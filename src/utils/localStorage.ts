export function saveItemLocalStorage(name: string, value: string) {
  localStorage.setItem(name, value);
}
export function getItemLocalStorage(name: string) {
  return localStorage.getItem(name);
}
