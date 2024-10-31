function updateViewEditGoal() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <header>
        <div class="edit-goal-btn-container">
            <button class="back-btn" onClick="goToPreviousPage()">Tilbake <i class="fa-solid fa-circle-left"></i></button>
        </div>
        <div class="edit-goal-container">
            <h1>Dagens mål</h1>
            <div id="dailyGoalProgression">${goalsListHTML()}</div>
            <div class="graph">${getGoalGraph()}</div>
            <div><p>Ditt nåværende mål: ${getGoalText()}</p></div>
            <input type = "number" placeholder="Endre mål" required oninput = "model.inputs.editGoalPage.goal = this.value"/>
            
                <button onclick = "editGoal()">Endre mål <i class="fa-solid fa-pen"></i></button>
            
        </div>

        </header>
        ${showFriendList()}
    `;
}
