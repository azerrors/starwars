
const BASE_URL = "https://swapi.dev/api/";

export async function getSearchedPeopleData(searchedData, page) {
  const res = await fetch(
    `${BASE_URL}people/?search=${searchedData}&page=${page}`,
  );
  const data = await res.json();
  return data.results;
}

export async function getSearchedFilmsData() {
  const res = await fetch(`${BASE_URL}films/`);
  const data = await res.json();
  return data.results;
}

export async function getSearchedPlanetData(searchedData, page) {
  const res = await fetch(
    `${BASE_URL}planets/?search=${searchedData}&page=${page}`,
  );
  const data = await res.json();
  return data.results;
}

export async function getSearchedSpeciesData(searchedData, page) {
  const res = await fetch(
    `${BASE_URL}species/?search=${searchedData}&page=${page}`,
  );
  const data = await res.json();
  return data.results;
}

export async function getSearchedCarData(searchedData, page) {
  const res = await fetch(
    `${BASE_URL}vehicles/?search=${searchedData}&page=${page}`,
  );
  const data = await res.json();
  return data.results;
}

export async function getSearchedStarshipsData(searchedData, page) {
  const res = await fetch(
    `${BASE_URL}starships/?search=${searchedData}&page=${page}`,
  );
  const data = await res.json();
  return data.results;
}
