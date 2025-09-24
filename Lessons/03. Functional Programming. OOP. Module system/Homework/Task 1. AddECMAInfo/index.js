const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};
Object.freeze(javaScriptData);
const addECMAInfo = () => {
    // Начало
    const mutableData = { ...javaScriptData};
    mutableData.currentECMA = 2023;
    return mutableData;
    // Конец
};
export default addECMAInfo;
export { javaScriptData };