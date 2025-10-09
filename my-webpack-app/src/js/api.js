module.exports = {
    getData: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true });
            }, 100);
        });
    }
};
