function updateViewEditGoal() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <header>
        <div class="edit-goal-btn-container">
            <button class="back-btn" onClick="goToPage('loggedInUserProfilePage')">Tilbake</button>
        </div>
            <h1>Dagens mål</h1>
            <div>
                Placeholder for getGoalGraph();
            </div>
            <div>Ditt mål:</div>
            <input type = "text" placeholder="Endre mål" />

           
        </header>
        ${showFriendList()}
    `;
}
