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
function handleSubmit(event) {
    event.preventDefault();
    console.log('button was pressed');
    const $formElements = $entryForm?.elements;
    const obj = {
        title: $formElements.title.value,
        photoUrl: $formElements.photoUrl.value,
        notes: $formElements.notes.value,
    };
    console.log(obj);
}
$entryForm?.addEventListener('submit', handleSubmit);
