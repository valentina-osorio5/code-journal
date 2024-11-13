"use strict";
const dataKey = 'code-journal-data';
const data = readData();
function readData() {
    let localStorageData;
    const localData = localStorage.getItem(dataKey);
    if (localData) {
        localStorageData = JSON.parse(localData);
    }
    else {
        localStorageData = {
            view: 'entry-form',
            entries: [],
            editing: null,
            nextEntryId: 1,
        };
    }
    return localStorageData;
}
function writeData() {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(dataKey, dataJSON);
}
