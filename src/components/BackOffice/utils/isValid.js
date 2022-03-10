export const arrayIsValid = (array) => {
    return array !== null && array.length > 2;
};

export const stringIsValid = (string) => {
    return string !== null && string !== "";
};

export const createdAtIsValid = (date) => {
    return date instanceof Date;
};

export const typeIsValid = (type) => {
    return type !== "";
};

export const descriptionIsValid = (description) => {
    return description !== "";
};

export const imageArrayEditIsValid = (arrayOne, arrayTwo) => {

    return arrayOne.length + arrayTwo.length > 2;
};
