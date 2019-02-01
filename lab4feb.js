const fs = require('fs');


//skapa sökväg
var pathFirst = './firstName.txt';
var pathLast = './lastName.txt';
var path = './fullName.txt';


var options = {encoding: 'utf8', flag: 'r'}; // read file
var optionsToWrite = {encoding: 'utf8', flag: 'w'}; // write file

fs.readFile(pathFirst, options, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    } 
    fs.readFile(pathLast, options, (err, data2) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data2);
        } fs.writeFile (path, data + ' ' + data2, optionsToWrite, (err) => {  // skicka in det i en helt ny .txt fil
            if (err) {
                console.error(err);
            } else {
                console.log('Success');
            }
        })
    })
})
 


