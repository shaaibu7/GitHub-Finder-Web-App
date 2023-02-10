/* eslint-disable */
class Github {
  constructor() {
    this.client_id = 'ce5c35324757209e1756';
    this.client_secret = '10ed694ac25af985f545a28d032399e7cd3e0bbd';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
