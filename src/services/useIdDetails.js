const BASE_URL = "https://swapi.dev/api/";

export async function getCharacterId(id) {
  const res = await fetch(`${BASE_URL}/people/${id}`);
  const data = await res.json();
  return data;
}

export async function getFilmId(id) {
  const res = await fetch(`${BASE_URL}/films/${id}`);
  const data = await res.json();
  return data;
}

export async function getVehicleId(id) {
  const res = await fetch(`${BASE_URL}/vehicles/${id}`);
  const data = await res.json();
  return data;
}

export async function getStarshipId(id) {
  const res = await fetch(`${BASE_URL}/starships/${id}`);
  const data = await res.json();
  return data;
}

export async function getPlanetId(id) {
  const res = await fetch(`${BASE_URL}/planets/${id}`);
  const data = await res.json();
  return data;
}

export async function getSpecieId(id) {
  const res = await fetch(`${BASE_URL}/species/${id}`);
  const data = await res.json();
  return data;
}
// CUSTOM FUNCTIONS
