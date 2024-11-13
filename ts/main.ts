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

function handleInput(event: any): void {
  const eventTarget = event.target as HTMLInputElement;
  const newSrc = eventTarget.value;
  $image?.setAttribute('src', newSrc);
}
$imageUrl?.addEventListener('input', handleInput);

function handleSubmit(event: any): void {
  event.preventDefault();
  console.log($entryForm);
  const $formElements = $entryForm?.elements as FormElements;
  console.log($formElements);
  const newEntry: Entry = {
    entryId: data.nextEntryId,
    title: $formElements.title.value,
    photoUrl: $formElements.photoUrl.value,
    notes: $formElements.notes.value,
  };
  data.entries.unshift(newEntry);
  $uList?.prepend(renderEntry(newEntry));
  data.nextEntryId++;
  writeData();
  // handleDCL();
  $image?.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
  viewSwap('entries');
  toggleNoEntries();
}

$entryForm?.addEventListener('submit', handleSubmit);

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

// console.log(renderEntry(testEntries));

// const testEntries = {
//   entryId: 1,
//   title: 'test',
//   photoUrl:
//     'https://plus.unsplash.com/premium_photo-1664382466516-756b1e0721f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
//   notes: 'test',
// };

window.addEventListener('DOMContentLoaded', handleDCL);

function handleDCL(): void {
  // console.log('handleDCLfired');
  for (let i = 0; i < data.entries.length; i++) {
    // console.log('looping through entries');
    const listItem = renderEntry(data.entries[i]);
    $uList?.appendChild(listItem);
    // console.log('I added to the UL element');
  }
}

function toggleNoEntries(): void {
  if (data.entries.length === 0) {
    console.log('showing no entries');
    if ($holdsNoEntries) {
      $holdsNoEntries.className = 'column-full holds-no-entries';
    }
    if ($dataViewDiv) {
      $dataViewDiv.className = 'dataviewentries hidden';
    }
  } else {
    console.log('hiding no entries div, showing entries');
    if ($dataViewDiv) {
      $dataViewDiv.className = 'dataviewentries';
    }
    if ($holdsNoEntries) {
      $holdsNoEntries.className = 'column-full holds-no-entries hidden';
    }
  }
}

// toggleNoEntries();

// function viewSwap(viewName: 'entries' | 'entry-form'): void {
//   console.log('view swap fired');
//   console.log(viewName);
//   const entriesView = document.getElementById('entries');
//   const entryFormView = document.getElementById('entry-form-view');
//   //   // Hide or show the appropriate view based on viewName
//   if (viewName === 'entries') {
//     entriesView?.classList.remove('hidden');
//     entryFormView?.classList.add('hidden');
//   } else if (viewName === 'entry-form') {
//     entryFormView?.classList.remove('hidden');
//     entriesView?.classList.add('hidden');
//   }

//     // Update the view in the data model
//     data.view = viewName;
//     toggleNoEntries();
// }

function handleViewEntriesClick(): void {
  viewSwap('entries');
}

$navBarButton?.addEventListener('click', handleViewEntriesClick);
