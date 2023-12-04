import { read } from '../../../utils/utils';
import { main, getDigits } from './main';

const exampleInput = read('/example.txt');
const exampleResult = 281;
const exampleValues = [29, 83, 13, 24, 42, 14, 76];

exampleInput.forEach((e, i) => {
    describe(e, () => {
        test(e, () => expect(getDigits(e)).toBe(exampleValues[i]));
    });
});

test('correct on example input', () => {
    expect(main(exampleInput)).toBe(exampleResult);
});
