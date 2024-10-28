function updateViewMain() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <section class="main-view">   
            
            <div class="goal-graph-main">
                <div>${goalsListHTML()}</div>
            </div>
            <div class="summery-main">
                <p>Placeholder for getSummery()</p>
            </div>
            <div class="motivation-main">
                <p>${getRandomQuote()}</p>
            </div>
            <div class="buttons-main">
                <div>
                    <button onclick="goToPage('viewHistoryPage')">Vis historikk</button>
                    <button onclick="goToPage('addDrinkPage')">Legg til drikke</button>

                </div>
            </div>
        </section>
        ${showFriendList()}
    `;
}
