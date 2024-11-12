interface Entry {
  entryId: number;
  title: string;
  photoUrl: string;
  notes: string;
}

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

function handleSubmit(event: any): void {
  event.preventDefault();
  const $formElements = $entryForm?.elements as FormElements;
  const newEntry: Entry = {
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
