// we can make this better later, I just put it there as an example

export const setToStorage = <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
};

export const getFromStorage = <T>(key: string): T => {
    const data = localStorage.getItem(key) || '';
    return JSON.parse(data);
};
