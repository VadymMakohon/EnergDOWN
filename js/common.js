function createNavigationHtml() {
  let buttonsHtml = '';
  if (model.app.loggedIn == true) {
    buttonsHtml = `<button class="profile-page-button" onclick="goToPage('userProfilePage')">Profil</button>
                    <button class="loggut-button" onclick="goToPage('startPage')">Logg ut</button>`;
  }
  return /*HTML*/ `
        <div class="navigation">
            <nav class="nav-buttons">
              ${buttonsHtml}
            </nav>
            <h2 class="name">EnergDOWN</h2>
        </div>
    `;
}
