import { read } from '../../../utils/utils';
import { log } from 'console';

export function main(input: string[]) {
    let points = 0;
    for (let i = 0; i < input.length; i++) {
        const [winningNumbers, ownedNumbers] = parseCard(input[i]);
        const matches = findMatches(winningNumbers, ownedNumbers);
        log('Card ', i + 1, '   Matches ', matches);
        // n            0 1 2 3 4 5  ...
        // point values 0 1 2 4 8 16 ...
        // p_n = 2^(n-1) except at n = 0
        if (matches != 0) {
            points += 2 ** (matches - 1);
        }
    }
    return points;
}

export function parseCard(card: string): string[][] {
    const numbers = card.split(': ')[1].split(' | ');
    const winningNumbers = numbers[0].split(' ').filter(Number);
    const ownedNumbers = numbers[1].split(' ').filter(Number);
    return [winningNumbers, ownedNumbers];
}

export function findMatches(winningNumbers: string[], ownedNumbers: string[]) {
    let matches = 0;
    for (let j = 0; j < winningNumbers.length; j++) {
        if (ownedNumbers.includes(winningNumbers[j])) {
            matches++;
        }
    }
    return matches;
}

if (require.main === module) {
    console.log(main(read()));
}
