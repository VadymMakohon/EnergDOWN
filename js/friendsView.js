function updateViewFriendsList() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <link rel="stylesheet" href="style.css">
    <div class="friends-view" id="friends-view">
        
        <div class="friend-view-left">
            <button id="backBtn" class="back-btn-friends" onclick="goToPage('loggedInUserProfilePage')">Tilbake</button>
        </div>
        
        <div class="friend-view-middle">
            <ul id="friendsList" class="friends-list">
                ${friendsListHTML()}
            </ul>
            <div>
                <input type="text" id="newFriendName" placeholder="Friend's name" />
                <button onclick="addFriend(document.getElementById('newFriendName').value)">Add Friend</button>
            </div>
        </div>
    </div>
  `;

  document.getElementById('homeBtn').addEventListener('click', function () {
    console.log('Home button clicked!');
  });

  document.getElementById('logoutBtn').addEventListener('click', function () {
    console.log('Logout button clicked!');
  });
}
