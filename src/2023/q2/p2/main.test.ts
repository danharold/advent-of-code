import { read } from '../../../utils/utils';
import { parseSet, parseGame } from '../p1/main';
import { main } from './main';

const exampleInput = read('/example.txt');
const exampleResult = 2286;

test('correct on example input', () => {
    expect(main(exampleInput)).toBe(exampleResult);
});
