import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {

    it('09.c.2.1 the arrays are empty', () => {
        const arr1 = [];
        const arr2 = [];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })

    it('09.c.2.2 the first array is longer than the second array', () => {
        const arr1 = [1, 5, 9, 3];
        const arr2 = [1, 0];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })

    it('09.c.2.3 the second array is longer than the first array', () => {
        const arr1 = [1, 6];
        const arr2 = [1, 34, 7];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })

    it('09.c.2.4 the first array is better than the second array', () => {
        const arr1 = [55, 81, 109];
        const arr2 = [40, 77, 93];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    })

    it('09.c.2.5 the second array is better than the first array', () => {
        const arr1 = [40, 77, 93];
        const arr2 = [55, 81, 109];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })

    it('09.c.2.6 all the elements are the same', () => {
        const arr1 = [40, 40, 40];
        const arr2 = [40, 40, 40];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })

    it('09.c.2.7 somewhere all the elements are the same', () => {
        const arr1 = [40, 50, 80];
        const arr2 = [80, 40, 50];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    })

    it('09.c.2.8 one element - the first is bigger than the second', () => {
        const arr1 = [40];
        const arr2 = [30];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    })

    it('09.c.2.9 one element - the second is bigger than the first', () => {
        const arr1 = [30];
        const arr2 = [40];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })

    it('09.c.2.10 negative elements - the first is bigger than the second', () => {
        const arr1 = [-1, -2, -3];
        const arr2 = [-4, -5, -6];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    })

    it('09.c.2.11 negative elements - the second is bigger than the first', () => {
        const arr1 = [-4, -5, -6];
        const arr2 = [-1, -2, -3];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    })
});
