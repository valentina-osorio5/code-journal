"use strict";
const $image = document?.querySelector('#entry-image');
const $imageUrl = document?.querySelector('#photo-url');
const $entryForm = document?.querySelector('#entry-form');
const $entryFormView = document?.querySelector('#entry-form-view');
const $uList = document?.querySelector('ul');
const $dataViewDiv = document?.querySelector('.dataviewentries');
const $holdsNoEntries = document?.querySelector('.holds-no-entries');
const $navBarButton = document?.querySelector('.navbarbtn');
const $newEntryButton = document?.querySelector('.newentrybtn');
const $newEntries = document?.querySelector('.entries-styling');
const $pen = document?.querySelector('.ul');
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
    $uList?.prepend(renderEntry(newEntry));
    data.nextEntryId++;
    writeData();
    $image?.setAttribute('src', 'images/placeholder-image-square.jpg');
    $entryForm.reset();
    viewSwap('entries');
    toggleNoEntries();
}
$entryForm?.addEventListener('submit', handleSubmit);
function renderEntry(entry) {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    const entryIdString = String(entry.entryId);
    listItem.setAttribute('data-entry-id', entryIdString);
    const img = document.createElement('img');
    img.setAttribute('src', entry.photoUrl);
    listItem.appendChild(img);
    const title = document.createElement('h2');
    title.textContent = entry.title;
    listItem.appendChild(title);
    const pen = document.createElement('i');
    pen.className = 'fa-solid fa-pencil';
    listItem.append(pen);
    const description = document.createElement('p');
    description.textContent = entry.notes;
    listItem.appendChild(description);
    return listItem;
}
window.addEventListener('DOMContentLoaded', handleDCL);
function handleDCL() {
    toggleNoEntries();
    for (let i = 0; i < data.entries.length; i++) {
        const listItem = renderEntry(data.entries[i]);
        $uList?.appendChild(listItem);
        viewSwap(currentView);
    }
}
const currentView = data.view;
function viewSwap(viewName) {
    const entriesView = document.getElementById('entries');
    const entryFormView = document.getElementById('entry-form-view');
    //   // Hide or show the appropriate view based on viewName
    if (viewName === 'entries') {
        entriesView?.classList.remove('hidden');
        $newEntries?.classList.remove('hidden');
        entryFormView?.classList.add('hidden');
    }
    else if (viewName === 'entry-form') {
        entryFormView?.classList.remove('hidden');
        entriesView?.classList.add('hidden');
        $newEntries?.classList.add('hidden');
    }
    // Update the view in the data model
    data.view = viewName;
    toggleNoEntries();
}
function toggleNoEntries() {
    if (data.entries.length === 0) {
        $holdsNoEntries?.classList.remove('hidden');
    }
    else {
        $holdsNoEntries?.classList.add('hidden');
    }
}
function handleViewEntriesClick() {
    viewSwap('entries');
}
$navBarButton?.addEventListener('click', handleViewEntriesClick);
function handleNewEntry() {
    viewSwap('entry-form');
}
$newEntryButton?.addEventListener('click', handleNewEntry);
// step 6 - after the loop set data.editing = entryEdit
// log `data.editing` confirm the object assigned to it is what was clicked.
// This is the conclusion of the whole step: Find the entry object in the `data.entries` array whose
// id matches the `data-entry-id` attribute value of the clicked entry and assigns that entry's object to
// the `data.editing` property. The next task will still be written in this function
$pen?.addEventListener('click', handlePenClick);
function handlePenClick(event) {
    console.log('handlePenClick is firing');
    const eventTarget = event.target;
    console.log(eventTarget);
    if (eventTarget?.className === 'fa-solid fa-pencil') {
        console.log('i was clicked');
        viewSwap('entry-form');
        const closestElement = eventTarget.closest('[data-entry-id]');
        const entryId = closestElement.dataset.entryId;
        console.log(entryId);
        const entryIdNumber = parseInt(entryId);
        console.log(entryIdNumber, typeof entryIdNumber);
        // let entryEdit;
        for (let i = 0; i < data.entries.length; i++) {
            if (data.entries[i].entryId === entryIdNumber) {
                const entryEdit = data.entries[i];
                console.log(entryEdit);
            }
        }
        data.editing = entryEdit;
        console.log('data.editing', data.editing);
    }
}
