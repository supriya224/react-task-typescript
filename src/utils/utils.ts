export const getPokemonFromStorage = () => {
  return JSON.parse(localStorage.getItem('pokemon') || '')
}
export const setPokemonToStorage = (value: any[]) => {
  localStorage.setItem('pokemon', JSON.stringify(value))
}