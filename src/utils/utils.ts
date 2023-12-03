import * as fs from 'fs';

export function readInput(): string[]{
    const currentPath: string = process.cwd();
    const input: string = fs.readFileSync(currentPath + '/input.txt', 'utf-8');
    return input.split('\n');
}