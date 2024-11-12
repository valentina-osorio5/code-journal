"use strict";
const data = {
    view: 'entry-form',
    entries: [],
    editing: null,
    nextEntryId: 1,
};
function saveToS() {
    const objJSON = JSON.stringify(obj);
    // Save the JSON string in local storage under the key ‘todos-storage’
    localStorage.setItem(obj - storage, objJSON);
}
