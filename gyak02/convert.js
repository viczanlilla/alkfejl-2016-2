"use strict";

const fs = require('fs');
const jimp = require('jimp');
const DataStore = require('nedb');

const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
})

db.remove({}, {multi: true}, function (err, numRemoved){
    if (err) throw err;


fs.readdir('alkfejl-2016-2/gyak02/images/', function (err, files){
    if(err) throw err;
    let count = files.length;
    files.forEach(function(fileName) {
    jimp.read(`alkfejl-2016-2/gyak02/images/${fileName}`, function (err,image){
        if (err) throw err;
        //const width = image.bitmap.weidth;
        //const height / image.bitmap.height;
        const {width, height} = image.bitmap;
        db.insert({fileName, width, height}, function(err, insertedImage){
            //console.log(insertedImage);
            image.resize(100, jimp.AUTO);
            image.write(`alkfejl-2016-2/gyak02/converted/${insertedImage._id}.png`, function (err, fileName){
                if (err) throw err;
                console.log(fileName, 'feldolgozva');
                count --;
                if(count ==0){
                    console.log('vege');
                }
            })
        })
    })
    });
    //helyteelen: console.log('vege');
    //console.log(files);
})

})