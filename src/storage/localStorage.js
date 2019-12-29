export const retrieveFromLocal = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const updateLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
