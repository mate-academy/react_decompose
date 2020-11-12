const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const request = (url, options) => (
  fetch(`${BASE_URL}${url}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
);

export const post = (url, data) => (
  request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'aplication/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
);

export const patch = (url, data) => (
  request(url, {
    method: 'PATCH',
    headers: {
      'Content-type': 'aplication/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
);
