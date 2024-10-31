function updateViewFriendsList() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <link rel="stylesheet" href="style.css">
    <div class="friends-view" id="friends-view">
        
        <div class="friend-view-left">
            <button id="backBtn" class="back-btn-friends" onclick="goToPreviousPage()">Tilbake <i class="fa-solid fa-circle-left"></i></button>
        </div>
        
        <div class="friend-view-middle">
            <ul id="friendsList" class="friends-list">
                ${friendsListHTML()}
            </ul>
            </div>
            <div class="friends-view-right">
                <input type="text" class="search-box" id="newFriendName" placeholder="Friend's name" />
                <button onclick="addFriend(document.getElementById('newFriendName').value)">Legg til venn <i class="fa-solid fa-user-plus"></i></button>
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
