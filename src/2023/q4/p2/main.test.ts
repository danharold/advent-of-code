import { read } from '../../../utils/utils';
import { main } from './main';

const exampleInput = read('/example.txt');
const exampleResult = 30;

test('correct on example input', () => {
    expect(main(exampleInput)).toBe(exampleResult);
});
