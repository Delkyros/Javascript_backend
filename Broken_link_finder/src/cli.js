#!/usr/bin/env node
import chalk from "chalk";
import fs from 'fs';
import file_gather_object_extractor from "./index.js";
import validList from "./http-validation.js";

const path = process.argv;

async function printer(valid, result, identifyer = ''){
    if (valid) {
        console.log(
        chalk.yellow('Valid list'),
        chalk.black.bgGreen(identifyer),
        await validList(result))
} else{
        console.log(
        chalk.yellow('Link list'),
        chalk.black.bgGreen(identifyer),
        result);
    }
}

async function text_process(args){
    const path = args[2];
    const validation = args[3] === '--validation';

    try{
        fs.lstatSync(path);

    } catch (error) {
        if (error.code=='ENOENT'){
            console.log('File or directory is not found');
            return;
        }
    }
    
    if (fs.lstatSync(path).isFile()){
        const result = await file_gather_object_extractor(args[2])
        printer(validation, result)        
    } else if (fs.lstatSync(path).isDirectory()){
        const files = await fs.promises.readdir(path);
         files.forEach(async (fileName) => {
            const fileList = await  file_gather_object_extractor(`${path}/${fileName}`)
            printer(validation, fileList, fileName)
        })
    }
}
text_process(path);