import { read } from '../../../utils/utils';
import { main } from './main';

const exampleInput = read('/example.txt');
const exampleResult = 4361;

test('correct on example input', () => {
    expect(main(exampleInput)).toBe(exampleResult);
});

describe('find failing edge cases', () => {
    // edge case when number is at end of line
    test('', () => {
        let input = [
            '.................!',
            '...............123',
            '..................',
            '..................',
        ];
        let result = 123;
        expect(main(input)).toBe(result);
    });
});
