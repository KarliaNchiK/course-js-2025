import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it('09.c.2 firstIsCooler', () => {
        let firstArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        let secondArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

        let expected = getIsFirstArrayCooler(firstArr, secondArr);
        expect(expected).toBe(true);
    });

    it('09.c.2.1 differentLength', () => {
        let firstArr = [0, 1, 2, 3, 4, 5, 6];
        let secondArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

        let expected = getIsFirstArrayCooler(firstArr, secondArr);
        expect(expected).toBe(false);
    });

    it('09.c.2.1 secondIsColeer', () => {
        let firstArr = [0, 0, 0, 0, 0, 0];
        let secondArr = [1, 1, 1, 1, 1, 1];

        let expected = getIsFirstArrayCooler(firstArr, secondArr);
        expect(expected).toBe(false);
    });

    it('09.c.2.1 equal', () => {
        let firstArr = [0, 2, 0, 2, 0, 2];
        let secondArr = [1, 1, 1, 1, 1, 1];

        let expected = getIsFirstArrayCooler(firstArr, secondArr);
        expect(expected).toBe(false);
    });
});
