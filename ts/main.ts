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

const testEntries = {
  entryId: 1,
  title: 'test',
  photoUrl:
    'https://plus.unsplash.com/premium_photo-1664382466516-756b1e0721f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
  notes: 'test',
};

function renderEntry(entry: Entry): any {
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

console.log(renderEntry(testEntries));

addEventListener('DOMContentLoaded', handleDCL(data.entries));

const $dataViewDiv = document?.querySelector('.dataviewentries');

function handleDCL(entries: Entry[]): void {
  let uList = document?.querySelector('ul');
  if (!uList) {
    uList = document.createElement('ul');
    console.log('creating a ul element');
  }
  for (let i = 0; i < entries.length; i++) {
    const listItem = renderEntry(entries[i]);
    uList?.appendChild(listItem);
    console.log('I added to the UL element');
  }
  if ($dataViewDiv && !document.contains(uList)) {
    $dataViewDiv.appendChild(uList);
    console.log('I added the ul to the dataview div');
  }
}
