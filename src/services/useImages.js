
const BASE = "https://starwars-visualguide.com/assets/img/";

export function getImages(url, category) {
  const urlParts = url.split("/");
  const ID = urlParts[urlParts.length - 2];

  if (category === "character") {
    const image = `${BASE}characters/${ID}.jpg`;
    return { image, ID };
  }
  if (category === "film") {
    const image = `${BASE}films/${ID}.jpg`;
    return { image, ID };
  }
  if (category === "species") {
    const image = `${BASE}species/${ID}.jpg`;
    return { image, ID };
  }
  if (category === "starships") {
    const image = `${BASE}starships/${ID}.jpg`;
    return { image, ID };
  }
  if (category === "vehicles") {
    const image = `${BASE}vehicles/${ID}.jpg`;
    return { image, ID };
  }
  if (category === "planets") {
    const image = `${BASE}planets/${ID}.jpg`;
    return { image, ID };
  }
}
