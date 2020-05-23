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

export const formatCard = card => {
    let value = "";

    card = card.replace(/-/g, "");

    for (let i = 0; i < card.length; i++) {
        if (i % 4 === 0 && i > 1) value += "-";

        value += card[i];
    }

    return value;
};
