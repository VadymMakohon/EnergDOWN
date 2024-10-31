function createNavigationHtml() {
  let buttonsHtml = '';
  let friendsListButton = '';
  if (model.app.loggedIn == true) {
    buttonsHtml = `<button class="profile-page-button" onclick="goToPage('loggedInUserProfilePage')">Profil <i class="fa-solid fa-user"></i></button>
                    <button class="loggut-button" onclick="logOut()">Logg ut <i class="fa-solid fa-right-from-bracket"></i></button>`;
    friendsListButton = `<button class="friends-button" onclick="toggleFriendList()">Venneliste <i class="fa-solid fa-user-group"></i></button>`;
  }
  return /*HTML*/ `
        <div class="navigation">
            <nav class="nav-buttons">
              ${buttonsHtml}
            </nav>
            <img class="name" src="img/logo4.png" onclick="goToPage(bannerButtonCheck())"/>

            ${friendsListButton}
        </div>
    `;
}

function showFriendList() {
  let friendsHtml = '';

  if (model.app.showFriends) {
    friendsHtml = /*HTML*/ `
      <div class="friends-container">
        <h3>Venneliste</h3>
        <ul>
          ${friendsListHTML()}
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

function friendsListHTML() {
  let friendsHtml = ``;
  let friends = allFriends();
  if (friends.length > 0) {
    for (const friend of friends) {
      friendsHtml += `<li><a href="#" onclick = 'goToFriendProfile(${friend.id})'>${friend.username}</a></li>`;
    }
  } else {
    friendsHtml = `<li>You don't have any friends</li>`;
  }
  return friendsHtml;
}

function goalsListHTML() {
  let goalsHtml = ``;
  let goals = getGoal();

  if (goals.length > 0) {
    for (const goal of goals) {
      goalsHtml += `<p>Mål: ${goal.progression}mg / ${goal.goal}mg</p>`;
    }
  } else {
    goalsHtml = `<p>You don't have any goals</p>`;
  }
  console.log(goals);

  return goalsHtml;
}
