/**
 * @jest-environment jsdom
 */
import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it('09.c.2.1 should return true when first array has more elements that are greater at corresponding positions', () => {
        const arr1 = [5, 8, 13, 3];
        const arr2 = [3, 9, 10, 2];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    });

    it('09.c.2.2 should return false when first array has more elements that are greater at corresponding positions', () => {
        const arr1 = [2, 5, 7, 1];
        const arr2 = [5, 3, 9, 4];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2.3 should return false when equal number of elements are greater at corresponding positions', () => {
        const arr1 = [10, 3, 8, 5];
        const arr2 = [5, 7, 2, 10];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2.4 should return false when arrays have different lengths', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3, 4];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);

        const arr3 = [1, 2, 3, 4, 5];
        const arr4 = [1, 2];
        expect(getIsFirstArrayCooler(arr3, arr4)).toBe(false);
    });

    it('09.c.2.5 should return false when both arrays are empty', () => {
        const arr1 = [];
        const arr2 = [];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);
    });

    it('09.c.2.6 should return false when one array is empty and other is not', () => {
        const arr1 = [];
        const arr2 = [1, 2, 3];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(false);

        const arr3 = [1, 2, 3];
        const arr4 = [];
        expect(getIsFirstArrayCooler(arr3, arr4)).toBe(false);
    });

    it('09.c.2.7 should work correctly with negative numbers', () => {
        const arr1 = [-5, -2, 0, 3];
        const arr2 = [-10, -1, -3, 2];
        expect(getIsFirstArrayCooler(arr1, arr2)).toBe(true);
    });
});
