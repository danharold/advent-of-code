import { read } from '../../../utils/utils';
import { log } from 'console';

function isNumber(val: string) {
    return typeof Number(val) === 'number' && isFinite(Number(val));
}

export function main(input: string[]) {
    // match symbols
    const reSymb = /[^1-9.]/dg;
    type Symbol = {
        symbol: string;
        loc: number[];
    };
    let symbols: Symbol[] = [];
    for (let i = 0; i < input.length; i++) {
        const matches = input[i].matchAll(reSymb);
        for (const match of matches) {
            let currentSymbol: Symbol = {
                symbol: match[0],
                loc: [i, match.index ? match.index : -1],
            };
            symbols.push(currentSymbol);
        }
    }

    // match nums
    const reNum = /[0-9]+/dg;
    type Num = {
        value: string;
        loc: number[];
    };
    let nums: Num[] = [];
    for (let i = 0; i < input.length; i++) {
        const matches = input[i].matchAll(reNum);
        for (const match of matches) {
            let currentNum: Num = {
                value: match[0],
                loc: [i, match.index ? match.index : 0],
            };
            nums.push(currentNum);
        }
    }

    let result = 0;
    symbols.forEach((symbol) => {
        log(symbol);

        // 8 possible neighbours
        const a = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];

        // get neighbouring indexes of current symbol
        let neighbourIndexes: any = [];
        a.forEach((b) => {
            let neighbourIndex = [symbol.loc[0] + b[0], symbol.loc[1] + b[1]];
            neighbourIndexes.push(neighbourIndex);
        });

        // compare with all nums
        let neighbours: number[] = [];
        nums.forEach((num: Num) => {
            let found = false;
            neighbourIndexes.forEach((neighbour: number[]) => {
                for (let i = 0; i < num.value.length; i++) {
                    if (
                        neighbour[0] == num.loc[0] &&
                        neighbour[1] == num.loc[1] + i &&
                        !found
                    ) {
                        found = true;
                    }
                }
            });
            if (found) {
                neighbours.push(Number(num.value));
            }
        });

        log('neighbours', neighbours);
        log('-----------------');

        // add product if strictly 2 neighbours
        if (neighbours.length == 2) {
            result += neighbours[0] * neighbours[1];
        }
    });

    log('SYMBOLS:', symbols);
    log('NUMS:', nums);
    log('RESULT:', result);

    return result;
}

if (require.main === module) {
    console.log(main(read()));
}
