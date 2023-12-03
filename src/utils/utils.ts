import * as fs from 'fs';
const path = require('path');

export function read(path?: string): string[]{
    const currentPath: string | undefined= require.main?.path;
    let input: string;
    if (path) {
        input = fs.readFileSync(currentPath + path, 'utf-8') 
    } else {
        input = fs.readFileSync(currentPath + '/input.txt', 'utf-8');
    }
    return input.split('\n');
}

