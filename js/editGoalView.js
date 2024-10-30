function updateViewEditGoal() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <header>
        <div class="edit-goal-btn-container">
            <button class="back-btn" onClick="goToPreviousPage()">Tilbake</button>
        </div>
            <h1>Dagens mål</h1>
            <div id="dailyGoalProgression">${goalsListHTML()}</div>
            <div class="graph">${getGoalGraph()}</div>
            <div>Ditt nåværende mål: ${getGoalText()}</div>
            <input type = "number" placeholder="Endre mål" required oninput = "model.inputs.editGoalPage.goal = this.value"/>
            <button class="add-drink-btn" onclick = "editGoal()">Endre mål</button>

        </header>
        ${showFriendList()}
    `;
}
