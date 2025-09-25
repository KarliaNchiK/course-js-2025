const reorderDigits = (type, ...numbers) => {
    const numbersForSort = [...numbers];
    switch (type) {
        case "asc":
            return numbersForSort.sort((a,b) => a - b);
        case "desc":
            return numbersForSort.sort((a,b) => b - a);
    }

};

export default reorderDigits;
