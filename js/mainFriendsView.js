function updateViewMainWithFriends() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="goToPage('loggedInUserProfilePage')">Profil</button>
    <button onclick="logOut()">Logg ut</button>
    <button onclick="goToPage('mainPage')">Venneliste</button>
    <header>
            
            
            <div>
                Placeholder for getFriends();
            </div>
            <div>
                Placeholder for getGoalGraph();
            </div>
            <div>
                Placeholder for getSummery();
            </div>
            <div>
                Placeholder for getMotivation();
            </div>

            <button onclick="goToPage('viewHistoryPage')">Vis historikk</button>
            <button onclick="goToPage('addDrinkPage')">Legg til drikke</button>
        </header>
    `;
}