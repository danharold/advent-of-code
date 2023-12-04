import { read } from '../../../utils/utils';
import { log } from 'console';

export function main(input: string[]) {
    let sum: number = 0;
    input.forEach((line) => {
        let val: number = getDigits(line);
        //log(line);
        //log(val);
        sum += val;
    });
    return sum;
}

export function getDigits(line: string) {
    const digits: any = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };

    //log('input: ', line);
    //log(line.indexOf('one'));

    let firstMatch: string = '';
    let firstIndex: number = Infinity;
    let lastMatch: string = '';
    let lastIndex: number = 0;
    Object.keys(digits).forEach((d) => {
        let first = line.indexOf(d);
        let last = line.lastIndexOf(d);

        if (first != -1 && first < firstIndex) {
            firstIndex = first;
            firstMatch = digits[d];
        }
        if (last != -1 && last >= lastIndex) {
            lastIndex = last;
            lastMatch = digits[d];
        }
    });

    //log(firstMatch);
    //log(lastMatch);

    let numbers: string = '';
    [...line].forEach((c) => {
        if (Number(c)) {
            numbers += c;
        }
    });

    //log('numbers: ', numbers);

    let result: string = '';
    if (line.indexOf(numbers[0]) < firstIndex) {
        result += String(numbers[0]);
    } else {
        result += firstMatch;
    }
    if (line.lastIndexOf(numbers.slice(-1)) > lastIndex) {
        result += numbers.slice(-1);
    } else {
        result += lastMatch;
    }

    //log('result: ', result);

    if (
        numbers.length === 1 &&
        firstMatch.length === 0 &&
        lastMatch.length === 0
    ) {
        return Number(numbers[0] + numbers[0]);
    }
    return Number(result);
}

if (require.main === module) {
    log(main(read()));
}
