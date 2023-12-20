import { read } from '../../../utils/utils';
import { log } from 'console';

export function main(input: string[]) {
    let maxRed = 12;
    let maxGreen = 13;
    let maxBlue = 14;

    let games = input.map((game) => {
        return parseGame(game);
    });
    let result = 0;

    for (let i = 0; i < games.length; i++) {
        let game = games[i];
        let isPossible: boolean = true;
        for (let j = 0; j < game.length; j++) {
            let set = game[j];
            if (
                set['red'] > maxRed ||
                set['blue'] > maxBlue ||
                set['green'] > maxGreen
            ) {
                isPossible = false;
                break;
            }
        }
        if (isPossible) {
            result += i + 1;
        }
    }

    return result;
}

export function parseSet(set: string) {
    // e.g. set = '3 blue, 4 green, 2 red'
    let splitSet = set.replace('/[\r]/g', '').split(', ');
    let result: any = {
        red: 0,
        green: 0,
        blue: 0,
    };
    splitSet.forEach((element) => {
        let cubeValues = element.split(' ');
        result[cubeValues[1]] = Number(cubeValues[0]);
    });
    return result;
}

export function parseGame(game: string) {
    // e.g. game = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    let splitGame = game.split(': ');
    let gameNumber = Number(splitGame[0].split(' ')[1]);
    let setsUnparsed = splitGame[1].split('; ');
    let sets = setsUnparsed.map((set) => {
        return parseSet(set);
    });
    return sets;
}

if (require.main === module) {
    console.log(main(read()));
}
