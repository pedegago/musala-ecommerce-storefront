const STORAGE_KEY = "musala-soft-framed-artworks";

export const getStorage = (key = null) => {
    try {
        let storage = localStorage.getItem(STORAGE_KEY);

        if (!storage) {
            return null;
        }

        storage = JSON.parse(storage);

        return key ? storage[key] : storage;
    } catch (e) {
        return null;
    }
};

export const setStorage = (key, value) => {
    let storage = getStorage();

    storage = storage || {};

    try {
        storage[key] = value;

        storage = JSON.stringify(storage);

        localStorage.setItem(STORAGE_KEY, storage);
    } catch (e) {}
};
