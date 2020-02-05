import path from 'path';

const root = 'https://api.github.com';

class RootApi {
  static async requestGitHub(endpoint, options) {
    const res = await fetch(path.join(root, endpoint), {
      method: 'GET',
      ...options,
      headers: new Headers({
        Accept: 'application/json',
        Authorization: `token ${options.token}`,
        ...options.headers,
      }),
    });

    if (res.status < 200 || res.status >= 300) {
      throw res;
    }

    return res.json();
  }
}

export default RootApi;
