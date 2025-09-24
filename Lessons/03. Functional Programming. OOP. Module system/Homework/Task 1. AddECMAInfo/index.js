const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

Object.freeze(javaScriptData);

const addECMAInfo = () => {
    const newObject = { ...javaScriptData};
    newObject.currentECMA = 2023;
    return newObject;
};

export default addECMAInfo;
export { javaScriptData };