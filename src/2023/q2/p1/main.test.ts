import { read } from '../../../utils/utils';
import { main, parseSet, parseGame } from './main';

const exampleInput = read('/example.txt');
const exampleResult = 8;

test('correct on example input', () => {
    expect(main(exampleInput)).toBe(exampleResult);
});

test('parse set', () => {
    const set = '3 red, 4 blue, 5 green';
    const result = {
        red: 3,
        blue: 4,
        green: 5,
    };
    expect(parseSet(set)).toStrictEqual(result);
});

test('parse game', () => {
    const game = 'Game 6: 3 green, 4 blue, 5 red; 2 blue, 1 red; 5 blue';
    const result = [
        {
            green: 3,
            blue: 4,
            red: 5,
        },
        {
            blue: 2,
            red: 1,
            green: 0,
        },
        {
            blue: 5,
            green: 0,
            red: 0,
        },
    ];
    expect(parseGame(game)).toStrictEqual(result);
});
