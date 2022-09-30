export default function getData(url) {
  return fetch(url, {
    headers: {author: 40},
  }).then(resp => {
    if (!resp.ok) {
      throw Error('Jugadores no disponibles');
    }
    return resp.json();
  });
}
