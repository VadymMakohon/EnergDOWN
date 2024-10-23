function createNavigationHtml() {
  let buttonsHtml = '';
  let friendsListButton = '';
  if (model.app.loggedIn == true) {
    buttonsHtml = `<button class="profile-page-button" onclick="goToPage('loggedInUserProfilePage')">Profil</button>
                    <button class="loggut-button" onclick="logOut()">Logg ut</button>`;
    friendsListButton = `<button class="friends-button" onclick="toggleFriendList()">Venne liste</button>`;
  }
  return /*HTML*/ `
        <div class="navigation">
            <nav class="nav-buttons">
              ${buttonsHtml}
            </nav>
            <h2 class="name" onclick="goToPage(bannerButtonCheck())">EnergDOWN</h2>

            ${friendsListButton}
        </div>
    `;
}

function showFriendList() {
  let friendsHtml = '';

  if (model.app.showFriends) {
    friendsHtml = /*HTML*/ `
      <div class="friends-container">
        <h3>Friends List</h3>
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
          <li>Friend 3</li>
        </ul>
      </div>`;
  } else {
    friendsHtml = '';
  }

  return friendsHtml;
}
function toggleFriendList() {
  model.app.showFriends = !model.app.showFriends;
  updateView();
}
