import fs from 'fs';
import chalk from 'chalk';


// unique error dealer for the library
function error_dealer(error){
    console.log(error);
    throw new Error(chalk.red(error.code, 'File not found at FilePath'));
}

//functions to access markdown files

//promises with then
/*
function file_gather_then(FilePath) {
  const encoding = 'utf-8';
  fs.promises
    .readFile(FilePath, encoding)
    .then((text) => console.log(chalk.green(text)))
    .catch(error_dealer)
}
console.log(file_gather_then('./files/text.md'))


// async file_gather

async function async_file_gather(FilePath) {
    try{
    const encoding ='utf-8';
    const text= await fs.promises.readFile(FilePath, encoding);
    console.log(chalk.green(text));
    } catch(error){
        error_dealer(error)
    }
}
async_file_gather('./files/text.md');

//Sync file gather

function file_gather(FilePath) {
    try{
    const encoding ='utf-8';
    const text= fs.promises.readFile(FilePath, encoding);
    console.log(chalk.green(text));
    } catch(error){
        error_dealer(error)
    }
}
file_gather('./files/text.md');

 Link extractor using regular expressions (RegExp)

Tested with https://regex101.com

RegEx for brackets before the link group 1 \[[^[\]]*?\]
RegEx for the link inside () \(https?:\/\/[^\s?#.].[^\s]*\)

Final regex \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
//            (group 1 )    (           group 2        )

Note that it was used more (), this denotes a group division inside the RegEx. 
This will return the link without () and whatever string inside [] before the link */

//Also working for PHP

//Testing the RegEx

function link_extractor (text){
    //  always add /                regex here                    / global multi-line
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const findings = [...text.matchAll(regex)];
    const results = findings.map(title_url => ({[title_url[1]]: title_url[2]}))
    
    return results.length !== 0 ? results: "No links in the file";
}

async function file_gather_object_extractor(FilePath) {
    try{
    const encoding ='utf-8';
    const text= await fs.promises.readFile(FilePath, encoding);
    return link_extractor(text);
    } catch(error){
        error_dealer(error)
    }
}

file_gather_object_extractor('./files/text.md');

export default file_gather_object_extractor;