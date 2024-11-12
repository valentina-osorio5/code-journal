interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  photoUrl: HTMLInputElement;
  notes: HTMLTextAreaElement;
}

const $image = document?.querySelector('#entry-image');
const $imageUrl = document?.querySelector('#photo-url');
const $entryForm = document?.querySelector('#entry-form') as HTMLFormElement;

function handleInput(event: any): void {
  const eventTarget = event.target as HTMLInputElement;
  const newSrc = eventTarget.value;
  $image?.setAttribute('src', newSrc);
}
$imageUrl?.addEventListener('input', handleInput);

const $button = document?.querySelector('.button');

function handleSubmit(event: any): void {
  event.preventDefault();
  console.log('button was pressed');
  const $formElements = $entryForm?.elements as FormElements;
  const obj = {
    title: $formElements.title.value,
    photoUrl: $formElements.photoUrl.value,
    notes: $formElements.notes.value,
  };
  console.log(obj);
}
$entryForm?.addEventListener('submit', handleSubmit);
