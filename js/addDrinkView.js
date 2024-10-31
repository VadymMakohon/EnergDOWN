function updateViewAddDrink() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <div class="edit-goal-btn-container">
    <button class="back-btn" onClick="goToPreviousPage()">Tilbake <i class="fa-solid fa-circle-left"></i></button>
</div>
    <div class="add-drink-view">
        
        <h3>Velg en drikke:</h3>
        <ul id="drinkList" class="drink-list">
           ${drinksHTML()}
        </ul>

        <button id="customDrinkBtn" class="custom-drink-btn" onclick="goToPage('addCustomDrinkPage')">Lag egendefinert drikke <i class="fa-solid fa-plus"></i></button>
        <button id="confirmBtn" class="confirm-btn" onClick="addSelectedToGoalProgression()">Bekreft at du har drukket dette <i class="fa-solid fa-check"></i></button>
    </div>
    ${showFriendList()}
    `;
}
