const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало

    return {
        ...javaScriptData,
        currentECMA: 2023
    }
    // Конец
};

console.log(addECMAInfo())
export default addECMAInfo;
export { javaScriptData };