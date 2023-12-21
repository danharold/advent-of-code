import { start } from 'repl';
import { read } from '../../../utils/utils';
import { log } from 'console';

function isNumber(val: string) {
    return typeof Number(val) === 'number' && isFinite(Number(val));
}

export function main(input: string[]) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let currentNum = '';
        for (let j = 0; j < input[i].length; j++) {
            let char = input[i][j];
            // if current character is numeric, concat to currentNum
            if (isNumber(char)) {
                currentNum += char;
            }

            // how do we know if we have identified a number?
            // - currentNum is not empty, but current char nonnumeric
            //      so, we are on the character after the number
            //      e.g. '.123.' or '123.'
            // - we are at the end of the string, and currentNum is not empty
            //      e.g. '.123'
            // (num !empty && char nonnumeric) || (num !empty && char is final char)
            // num !empty && (char nonnumeric || char is final char)

            if (
                currentNum !== '' &&
                (j == input[i].length - 1 || !isNumber(char))
            ) {
                // we have found a complete number
                // now check around if there is a symbol

                // get start index of the number substring
                let numIndex = [j - currentNum.length, j - 1];
                // edge case if char is at end of string, offset
                // only when '..123' but not '..123.', numeric only
                if (j == input[i].length - 1 && isNumber(char)) {
                    numIndex[0] += 1;
                    numIndex[1] += 1;
                }

                log('checking ', currentNum);
                log('[i, j]', [i, j]);
                log('num slice', numIndex);
                let symbols = '';

                // check before first char
                if (numIndex[0] - 1 >= 0) {
                    log('bef', input[i][numIndex[0] - 1]);
                    symbols += input[i][numIndex[0] - 1];
                }
                // after last char
                if (numIndex[1] + 1 < input[i].length) {
                    log('aft', input[i][numIndex[1] + 1]);
                    symbols += input[i][numIndex[1] + 1];
                }
                // above
                if (i - 1 >= 0) {
                    log(
                        'abv',
                        input[i - 1].slice(numIndex[0], numIndex[1] + 1),
                    );
                    symbols += input[i - 1].slice(numIndex[0], numIndex[1] + 1);
                    // top diagonals
                    if (numIndex[0] - 1 >= 0) {
                        log('TL', input[i - 1][numIndex[0] - 1]);
                        symbols += input[i - 1][numIndex[0] - 1];
                    }
                    if (numIndex[1] + 1 < input[i].length) {
                        log('TR', input[i - 1][numIndex[1] + 1]);
                        symbols += input[i - 1][numIndex[1] + 1];
                    }
                }

                // below
                if (i + 1 < input.length) {
                    log(
                        'bel',
                        input[i + 1].slice(numIndex[0], numIndex[1] + 1),
                    );
                    symbols += input[i + 1].slice(numIndex[0], numIndex[1] + 1);
                    // bottom diagonals
                    if (numIndex[0] - 1 >= 0) {
                        log('BL', input[i + 1][numIndex[0] - 1]);
                        symbols += input[i + 1][numIndex[0] - 1];
                    }
                    if (numIndex[1] + 1 < input[i].length) {
                        log('BR', input[i + 1][numIndex[1] + 1]);
                        symbols += input[i + 1][numIndex[1] + 1];
                    }
                }

                log('smb', symbols);
                if (symbols.split('.').join('').length > 0) {
                    // valid: contains something other than dots
                    log(symbols.split('.').join(''));
                    log(currentNum, ' IS VALID');
                    result += Number(currentNum);
                }
                currentNum = '';
                log('----------------------');
            }
        }
    }
    return result;
}

if (require.main === module) {
    console.log(main(read()));
}
