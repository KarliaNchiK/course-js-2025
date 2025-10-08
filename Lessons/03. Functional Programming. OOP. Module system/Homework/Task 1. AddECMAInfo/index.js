const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    const obj = {
        currentECMA: 2023
    };

    return {...javaScriptData, ...obj};
   
};

export default addECMAInfo;
export { javaScriptData };