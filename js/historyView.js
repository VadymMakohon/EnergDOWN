function updateViewHistory() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="goToPage('loggedInUserProfilePage')">Profil</button>
    <button onclick="logOut()">Logg ut</button>
    <button onclick="goToPage('mainPage')">Tilbake</button>
    <header>
            
        <h1>Din historikk</h1>


        <div>
        <input type = "text" placeholder="Startdato" />
      
        <input type = "text" placeholder="Sluttdato" />
    </div>
            <div>
                Placeholder for getMotivation(startDate, endDate);
            </div>
        </header>
    `;
}