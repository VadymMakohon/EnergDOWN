function updateViewHistory() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <header>
    <div class="edit-goal-btn-container">
            <button class="back-btn" onClick="goToPage('loggedInUserProfilePage')">Tilbake</button>
        </div>
            
        <h1>Din historikk</h1>


        <div>
        <input type = "text" placeholder="Startdato" />
      
        <input type = "text" placeholder="Sluttdato" />
    </div>
            <div>
                Placeholder for getMotivation(startDate, endDate);
            </div>
        </header>
        ${showFriendList()}
    `;
}
