import { read } from "../../../utils/utils";
import { main } from "./main";

test('Example', () => {
    expect(main(read('/example.txt'))).toBe(142);
})