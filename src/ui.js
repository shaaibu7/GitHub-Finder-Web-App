/* eslint-disable */
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
     <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <button class="btn btn-warning btn-block mb-4">Public Repos: ${user.public_repos}</button>
          <button class="btn btn-info btn-block mb-4">Public Gists: ${user.public_gists}</button>
          <button class="btn btn-warning btn-block mb-4">Followers: ${user.followers}</button>
          <button class="btn btn-info btn-block mb-4">Following: ${user.following}</button>
          <br><br>
          <ul>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
           </ul>
        </div>
      </div>
     </div>
     <h3 class="page-heading mb-3">Latest Repos</h3>
     <div id="repos"></div>
     
     `;
  }

  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <button class="btn btn-warning btn-block mb-4">Stars: ${repo.stargazers_count}}</button>
              <button class="btn btn-info btn-block mb-4">Watchers: ${repo.watchers_count}</button>
              <button class="btn btn-success btn-block mb-4">Forks: ${repo.forks_count}</button>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.getElementById('search1');
    const search = document.getElementById('search2');

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}