function createNavigationHtml() {
  let buttonsHtml = '';
  let friendsListButton = '';
  if (model.app.loggedIn == true) {
    buttonsHtml = `<button class="profile-page-button" onclick="goToPage('userProfilePage')">Profil</button>
                    <button class="loggut-button" onclick="logOut()">Logg ut</button>`;
    friendsListButton = `<button class="friends-button" onclick="logOut()">Venne liste</button>`;
  }
  return /*HTML*/ `
        <div class="navigation">
            <nav class="nav-buttons">
              ${buttonsHtml}
            </nav>
            <h2 class="name">EnergDOWN</h2>

            ${friendsListButton}
        </div>
    `;
}
