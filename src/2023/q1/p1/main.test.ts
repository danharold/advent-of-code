import { read } from '../../../utils/utils';
import { main } from './main';

test('Correct on example input', () => {
    expect(main(read('/example.txt'))).toBe(142);
});
