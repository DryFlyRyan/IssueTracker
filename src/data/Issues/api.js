import RootApi from 'data/api';

class IssuesApi {
  constructor(api) {
    this.api = api;
  }

  getRepoIssues = (options) => {
    const {
      fullName,
      ...rest
    } = options;

    return this.api.requestGitHub(`repos/${fullName}/issues`, rest);
  }
}

export default new IssuesApi(RootApi);
