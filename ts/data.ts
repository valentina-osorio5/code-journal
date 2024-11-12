/* exported data, writeData */
interface Data {
  view: 'entries' | 'entry-form';
  entries: Entry[];
  editing: null | Entry;
  nextEntryId: number;
}

const dataKey = 'code-journal-data';

const data = readData();

function readData(): Data {
  let localStorageData: Data;
  const localData = localStorage.getItem(dataKey);
  if (localData) {
    localStorageData = JSON.parse(localData) as Data;
  } else {
    localStorageData = {
      view: 'entry-form',
      entries: [],
      editing: null,
      nextEntryId: 1,
    };
  }
  return localStorageData;
}

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(dataKey, dataJSON);
}
