import { read } from '../../../utils/utils';
import { main } from './main';

const exampleInput = read('/example.txt');
const exampleResult = 13;

test('correct on example input', () => {
    expect(main(exampleInput)).toBe(exampleResult);
});
