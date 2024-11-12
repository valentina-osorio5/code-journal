const $image = document?.querySelector('#entry-image');
console.log($image);
const $imageUrl = document?.querySelector('#photo-url');

function handleInput(event: any): void {
  const eventTarget = event.target as HTMLInputElement;
  const newSrc = eventTarget.value;
  console.log(newSrc);
  $imageUrl?.setAttribute('src', 'eventTarget.value');
}
$imageUrl?.addEventListener('input', handleInput);
