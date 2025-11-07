import getIsFirstArrayCooler from './index';

describe('09.c.2 getIsFirstArrayCooler', () => {
    it ('09.c.2.1 check length', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [1, 2, 3, 4])).toBeFalsy();
    })

    it ('09.c.2.2 first array cooler', () => {
        expect(getIsFirstArrayCooler([1, 3, 3], [1, 2, 3])).toBeTruthy();
    })

    it ('09.c.2.3 first array equals second array', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [1, 2, 3])).toBeFalsy();
    })

    it ('09.c.2.4 second array cooler', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [1, 3, 3])).toBeFalsy();
    })

    it ('09.c.2.5 both arrays is empty', () => {
        expect(getIsFirstArrayCooler([], [])).toBeFalsy();
    })

    it ('09.c.2.6 both arrays matched up', () => {
        expect(getIsFirstArrayCooler([1, 2, 3], [1, 4, 1])).toBeFalsy();
    })
});
