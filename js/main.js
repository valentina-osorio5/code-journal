"use strict";
const $image = document?.querySelector('#entry-image');
const $imageUrl = document?.querySelector('#photo-url');
const $entryForm = document?.querySelector('#entry-form');
function handleInput(event) {
    const eventTarget = event.target;
    const newSrc = eventTarget.value;
    $image?.setAttribute('src', newSrc);
}
$imageUrl?.addEventListener('input', handleInput);
function handleSubmit(event) {
    event.preventDefault();
    const $formElements = $entryForm?.elements;
    const newEntry = {
        entryId: data.nextEntryId,
        title: $formElements.title.value,
        photoUrl: $formElements.photoUrl.value,
        notes: $formElements.notes.value,
    };
    data.entries.unshift(newEntry);
    data.nextEntryId++;
    writeData();
    $image?.setAttribute('src', 'images/placeholder-image-square.jpg');
    $entryForm.reset();
}
$entryForm?.addEventListener('submit', handleSubmit);
const testEntries = {
    entryId: 1,
    title: 'test',
    photoUrl: 'https://plus.unsplash.com/premium_photo-1664382466516-756b1e0721f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    notes: 'test',
};
function renderEntry(entry) {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    const img = document.createElement('img');
    img.setAttribute('src', entry.photoUrl);
    listItem.appendChild(img);
    const title = document.createElement('h2');
    title.textContent = entry.title;
    listItem.appendChild(title);
    const description = document.createElement('p');
    description.textContent = entry.notes;
    listItem.appendChild(description);
    return listItem;
}
// this will probably be deleted
// const $dataViewDiv = document?.querySelector('.dataviewentries');
// for (let i = 0; i < entry.length; i++) {
//   const newHTML = renderEntry(entry[i]);
//   $dataViewDiv.append(newHTML);
// }
console.log(renderEntry(testEntries));
addEventListener("DOMContentLoaded", handleDCL);
const $dataViewDiv = document?.querySelector('.dataviewentries');
function handleDCL(data, entries) {
    for (let i = 0; i < entry.length; i++) {
        const newHTML = renderEntry(data.entries[i]);
        if (newHTML) {
            const uElement = document?.querySelector('UL');
            if (uElement) {
                uElement.appendChild(listItem);
                $dataViewDiv?.appendChild(uElement);
            }
            if ()
                ;
            else {
                const newUL = document.createElement('ul');
            }
            newUL.appendChild(listItem);
            $dataViewDiv?.appendChild(newUL);
        }
        else {
            return "No entries have been recorded.";
        }
    }
}
