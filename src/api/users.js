import { request } from './helpers';

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export const getUsers = async() => {
  await wait(2000);

  return request('/users');
};

export const getUser = userId => (
  request(`/users/${userId}`)
);

export const getUserTodos = userId => (
  request(`/users/${userId}/todos`)
);
