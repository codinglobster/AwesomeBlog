import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function loginS() {
  return request('/api/login');
}
