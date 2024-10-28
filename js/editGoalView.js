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
            <div>Ditt nåværende mål: ${getGoalText()}</div>
            <input type = "number" placeholder="Endre mål" required oninput = "model.inputs.editProfilePage.goal = this.value"/>
            <button class="add-drink-btn" onclick = "editGoal()">Endre mål</button>

        </header>
        ${showFriendList()}
    `;
}
