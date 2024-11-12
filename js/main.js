'use strict';
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
