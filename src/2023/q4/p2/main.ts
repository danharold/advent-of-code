import { read } from '../../../utils/utils';
import { log } from 'console';

import { parseCard, findMatches } from '../p1/main';

/*
    populate array that tracks number of copies
    - initialise array of 1s of length = # of cards
    - iterate through the cards:
        * find the number of matches m
        * update the number of copies for the next m cards, by adding the 
          number of copies you have of the current card
*/

export function main(input: string[]) {
    let copies = Array(input.length).fill(1);
    log(copies);
    for (let i = 0; i < input.length; i++) {
        // find matches
        const [winningNumbers, ownedNumbers] = parseCard(input[i]);
        let m = findMatches(winningNumbers, ownedNumbers);
        log('Card ', i + 1, '   Matches ', m);

        // add the # of copies of the current card to the next m cards
        while (m > 0) {
            copies[i + m] += copies[i];
            m--;
        }
        log('Copies ', copies);
    }
    // return sum
    return copies.reduce((acc: number, val: string) => {
        return acc + Number(val);
    });
}

if (require.main === module) {
    console.log(main(read()));
}
