function updateViewMain() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <section class="main-view">   
            
            <div class="goal-graph-main">
                <div>${goalsListHTML()}</div>
                <div class="graph">${getGoalGraph()}</div>
            </div>
            <div class="summery-main">
            <p>Koffeinkontroll – Din Partner for et Sunnere Koffeininntak</p>
                        </div>
            <div class="motivation-main">
                <p>${getRandomQuote()}</p>
            </div>
            <div class="buttons-main">
                <div>
                    
                    <button onclick="goToPage('addDrinkPage')">Legg til drikke <i class="fa-solid fa-plus"></i></button>

                </div>
            </div>
        </section>
        ${showFriendList()}
    `;
}
