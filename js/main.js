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
const $liItem = document?.querySelectorAll('li');
function handleInput(event) {
    const eventTarget = event.target;
    const newSrc = eventTarget.value;
    $image?.setAttribute('src', newSrc);
}
$imageUrl?.addEventListener('input', handleInput);
function handleSubmit(event) {
    event.preventDefault();
    console.log($entryForm);
    const $formElements = $entryForm?.elements;
    console.log($formElements);
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
    console.log('view swap fired');
    console.log(viewName);
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
        console.log('showing no entries');
        $holdsNoEntries?.classList.remove('hidden');
    }
    else {
        console.log('hiding no entries div, showing entries');
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
