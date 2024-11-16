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
const $entryFormView = document?.querySelector('#entry-form-view');
const $uList = document?.querySelector('ul');
const $dataViewDiv = document?.querySelector('.dataviewentries');
const $holdsNoEntries = document?.querySelector('.holds-no-entries');
const $navBarButton = document?.querySelector('.navbarbtn');
const $newEntryButton = document?.querySelector('.newentrybtn');
const $newEntries = document?.querySelector('.entries-styling');
const $pen = document?.querySelector('.ul');
const $editViewTitle = document?.querySelector('.new-entry-header');

function handleInput(event: any): void {
  const eventTarget = event.target as HTMLInputElement;
  const newSrc = eventTarget.value;
  $image?.setAttribute('src', newSrc);
}
$imageUrl?.addEventListener('input', handleInput);

function handleSubmit(event: any): void {
  event.preventDefault();
  if (data.editing === null) {
    console.log('data.editing is null');
    const $formElements = $entryForm?.elements as FormElements;
    // console.log('$entryForm?.elements', $entryForm?.elements);
    const newEntry: Entry = {
      entryId: data.nextEntryId,
      title: $formElements.title.value,
      photoUrl: $formElements.photoUrl.value,
      notes: $formElements.notes.value,
    };
    console.log(newEntry);
    data.entries.unshift(newEntry);
    $uList?.prepend(renderEntry(newEntry));
    data.nextEntryId++;
    writeData();
    $image?.setAttribute('src', 'images/placeholder-image-square.jpg');
    $entryForm.reset();
    viewSwap('entries');
    toggleNoEntries();
  } else {
    console.log('data.editing is not null');
    console.log('data.editing', data.editing);
    console.log('data.editing.entryId', data.editing.entryId);
    const editEntry: Entry = {
      entryId: data.editing.entryId,
      title: data.editing.title,
      photoUrl: data.editing.photoUrl,
      notes: data.editing.notes,
    };
    console.log('editEntry', editEntry);
// loop over data.entries
// check if editEntry.entryId is equal to data.entries[i].entryId to find the match
// console.log a string that confirms that there is a match found
// set data.entries[i] to the editEntry
// after the for loop is complete you can look at data.entries in the console to see
// that the entry has been updated

    // we have to use splice, and replace this part of above data.entries.unshift(newEntry);
    // console.log(`we are editing` editEntry.entryId `at editEntry. )
    for (let i = 0; i < data.entries.length; i++) {
      if (editEntry.entryID === data.entries[i]){
      console.log('match found');
      data.entries[i] = editEntry
      }
    }
    // $uList?.prepend(renderEntry(editEntry));
    writeData();
    $editViewTitle.textContent = 'New Entry';
    data.editing = null;
  }
}

$entryForm?.addEventListener('submit', handleSubmit);

function renderEntry(entry: Entry): any {
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

function handleDCL(): void {
  toggleNoEntries();
  for (let i = 0; i < data.entries.length; i++) {
    const listItem = renderEntry(data.entries[i]);
    $uList?.appendChild(listItem);
    viewSwap(currentView);
  }
}
const currentView = data.view;

function viewSwap(viewName: 'entries' | 'entry-form'): void {
  const entriesView = document.getElementById('entries');
  const entryFormView = document.getElementById('entry-form-view');
  //   // Hide or show the appropriate view based on viewName
  if (viewName === 'entries') {
    entriesView?.classList.remove('hidden');
    $newEntries?.classList.remove('hidden');
    entryFormView?.classList.add('hidden');
  } else if (viewName === 'entry-form') {
    entryFormView?.classList.remove('hidden');
    entriesView?.classList.add('hidden');
    $newEntries?.classList.add('hidden');
  }

  // Update the view in the data model
  data.view = viewName;
  toggleNoEntries();
}

function toggleNoEntries(): void {
  if (data.entries.length === 0) {
    $holdsNoEntries?.classList.remove('hidden');
  } else {
    $holdsNoEntries?.classList.add('hidden');
  }
}

function handleViewEntriesClick(): void {
  viewSwap('entries');
}

$navBarButton?.addEventListener('click', handleViewEntriesClick);

function handleNewEntry(): void {
  viewSwap('entry-form');
}
$newEntryButton?.addEventListener('click', handleNewEntry);


$pen?.addEventListener('click', handlePenClick);
if (!$editViewTitle) throw new Error('$editViewTitle does not exist');

function handlePenClick(event: Event): void {
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
    let entryEdit;
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === entryIdNumber) {
        entryEdit = data.entries[i];
        console.log(entryEdit);
      }
    }
    data.editing = entryEdit;
    console.log('data.editing', data.editing);
  }
  if (data.editing) {
    const $formElements = $entryForm.elements as FormElements;
    $formElements.title.value = data.editing.title;
    $formElements.photoUrl.value = data.editing.photoUrl;
    $formElements.notes.value = data.editing.notes;
    $image?.setAttribute('src', data.editing.photoUrl);
    $editViewTitle.textContent = 'Edit Entry';
  }
}
