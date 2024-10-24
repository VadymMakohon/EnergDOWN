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
      friendsHtml += `<li><a href="#">${friend.username}</a></li>`;
    }
  } else {
    friendsHtml = `<li>You don't have any friends</li>`;
  }
  return friendsHtml;
}

function goalsListHTML() {
  let goalsHtml = ``;
  let goals = getGoal(); // Get the list of goals for the logged-in user

  if (goals.length > 0) {
    for (const goal of goals) {
      goalsHtml += `<li>Goal: ${goal.goal}</li>`;
    }
  } else {
    goalsHtml = `<li>You don't have any goals set</li>`;
  }
  console.log(goals);

  return goalsHtml;
}
