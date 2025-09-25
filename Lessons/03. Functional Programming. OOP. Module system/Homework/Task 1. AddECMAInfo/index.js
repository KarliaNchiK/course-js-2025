const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    return { ...javaScriptData, currentECMA: 2023 };
};

// Неправильно (объект будет изменён)
// const addECMAInfo = () => {
//     javaScriptData.currentECMA = 2023;
//     return javaScriptData;
// };

export default addECMAInfo;
export { javaScriptData };