function updateViewFriendsList() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <link rel="stylesheet" href="style.css">
        <div class="friends-view">
            <nav class="top-nav">
                <button id="homeBtn" class="nav-btn">Hjem</button>
                <button id="logoutBtn" class="nav-btn">Logg ut</button>
            </nav>

            <button id="backBtn" class="back-btn">Tilbake</button>

            <div class="search-container">
                <input type="text" id="searchInput" class="search-box" placeholder="Søk venner..." oninput="searchFriends()">
            </div>

            <ul id="friendsList" class="friends-list">
                <li class="friend">Vadym</li>
                <li class="friend">Christopher</li>
                <li class="friend">Egidijus</li>
                <li class="friend">Thomas</li>
            </ul>
        </div>
    `;


    document.getElementById('homeBtn').addEventListener('click', function () {
        console.log('Home button clicked!');

    });

    document.getElementById('logoutBtn').addEventListener('click', function () {
        console.log('Logout button clicked!');

    });
}