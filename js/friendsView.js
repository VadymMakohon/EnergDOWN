function updateViewFriendsList() {
    document.getElementById('app').innerHTML = /*HTML*/`
        // <style>
        //     body {
        //         background-image: linear-gradient(to right, #E22865, #37ADCD);
        //     }

        //     .friends-view {
        //         padding: 20px;
        //         max-width: 400px;
        //         margin: auto;
        //     }

        //     .top-nav {
        //         display: flex;
        //         justify-content: flex-start;
        //         gap: 10px;
        //         margin-bottom: 10px;
        //     }

        //     .nav-btn, .back-btn {
        //         padding: 10px;
        //         background-color: #4a8be7;
        //         border: none;
        //         color: white;
        //         cursor: pointer;
        //         font-size: 14px;
        //     }

        //     .nav-btn:hover, .back-btn:hover {
        //         background-color: #0f07e8;
        //     }

        //     .search-container {
        //         margin-bottom: 10px;
        //     }

        //     .search-box {
        //         width: 100%;
        //         padding: 8px;
        //         font-size: 16px;
        //     }

        //     .friends-list {
        //         list-style-type: none;
        //         padding: 0;
        //     }

        //     .friend {
        //         padding: 10px;
        //         margin: 5px 0;
        //         background-color: #f4f4f4;
        //         color: black;
        //         border: 1px solid #ddd;
        //         cursor: pointer;
        //     }

        //     .friend:hover {
        //         background-color: #ddd;
        //     }
        // </style>

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