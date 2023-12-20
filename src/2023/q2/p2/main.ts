import { read } from '../../../utils/utils';
import { log } from 'console';

import { parseSet, parseGame } from '../p1/main';

export function main(input: string[]) {
    let games = input.map((game) => {
        return parseGame(game);
    });
    let result = 0;
    games.forEach((game) => {
        let minRed = 0;
        let minGreen = 0;
        let minBlue = 0;
        game.forEach((set) => {
            if (set['red'] > minRed) {
                minRed = set['red'];
            }
            if (set['green'] > minGreen) {
                minGreen = set['green'];
            }
            if (set['blue'] > minBlue) {
                minBlue = set['blue'];
            }
        });
        result += minRed * minBlue * minGreen;
    });
    return result;
}

if (require.main === module) {
    console.log(main(read()));
}
