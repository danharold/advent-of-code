import { read } from '../../../utils/utils';
import { log } from 'console';

export function main(input: string[]) {
    let values: number[] = [];
    input.forEach((line) => {
        let digits: string = '';
        [...line].forEach((c) => {
            if (Number(c)) {
                digits += c;
            }
        });
        values.push(Number(digits[0] + digits.slice(-1)));
    });
    return values.reduce((sum, val) => {
        return sum + val;
    });
}

if (require.main === module) {
    log(main(read()));
}
