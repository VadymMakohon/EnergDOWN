function updateViewMain() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <header>
            
            
            <div class="goal-graph-main">
                Placeholder for getGoalGraph();
                <p>${goalsListHTML()}</p>
            </div>
            <div class="summery-main">
                Placeholder for getSummery();
            </div>
            <div class="motivation-main">
                Placeholder for getMotivation();
            </div>
            <div class="buttons-main">
                <button onclick="goToPage('viewHistoryPage')">Vis historikk</button>
                <button onclick="goToPage('addDrinkPage')">Legg til drikke</button>
            </div>
        </header>
        ${showFriendList()}
    `;
}
