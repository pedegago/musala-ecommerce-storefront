// import { key as storageKey } from "../config/apollo/persist";

// export const getStorage = (key = null) => {
//     try {
//         let storage = localStorage.getItem(storageKey);

//         if (!storage) {
//             return null;
//         }

//         storage = JSON.parse(storage);

//         return key ? storage[key] : storage;
//     } catch (e) {
//         return null;
//     }
// };

// export const setStorage = (key, value) => {
//     let storage = getStorage();

//     storage = storage || {};

//     try {
//         storage[key] = value;

//         storage = JSON.stringify(storage);

//         localStorage.setItem(storageKey, storage);
//     } catch (e) {}
// };
