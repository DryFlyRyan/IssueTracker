import RootApi from 'data/api';

class ReposApi {
  constructor(api) {
    this.api = api;
  }

  getUserRepos = (options) => this.api.requestGitHub('user/repos?sort=created', options)
}

export default new ReposApi(RootApi);
