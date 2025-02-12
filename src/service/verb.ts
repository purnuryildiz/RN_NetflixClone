import Client from './instance';

export async function get(url: string, params: object) {
  const response = await Client.get(url, {params});
  return response;
}

export async function post(url: string, params: object) {
  const response = await Client.post(url, params);
  return response;
}
