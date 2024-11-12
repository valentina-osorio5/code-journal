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
const $button = document?.querySelector('.button');
console.log(data.nextEntryID);
function handleSubmit(event) {
    event.preventDefault();
    const $formElements = $entryForm?.elements;
    const obj = {
        entryId: data.nextEntryId,
        title: $formElements.title.value,
        photoUrl: $formElements.photoUrl.value,
        notes: $formElements.notes.value
    };
    console.log(obj);
    data.entries.push(obj);
    $image?.setAttribute('src', 'images/placeholder-image-square.jpg');
    $entryForm.reset();
}
$entryForm?.addEventListener('submit', handleSubmit);
