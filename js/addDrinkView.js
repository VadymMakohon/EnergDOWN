function updateViewAddDrink() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <div class="edit-goal-btn-container">
    <button class="back-btn" onClick="goToPage('loggedInUserProfilePage')">Tilbake</button>
</div>
    <div class="add-drink-view">

        <h3>Velg en drikke:</h3>
        <ul id="drinkList" class="drink-list">
           ${drinksHTML()}
        </ul>

        <button id="customDrinkBtn" class="custom-drink-btn" onclick="goToPage('addCustomDrinkPage')">Lag egendefinert drikke</button>

        <button id="confirmBtn" class="confirm-btn">Bekreft at du har drukket dette</button>
    </div>
    ${showFriendList()}
    `;
}
