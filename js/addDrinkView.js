function updateViewAddDrink() {
    document.getElementById('app').innerHTML = /*HTML*/`
    ${createNavigationHtml()}
    <div class="add-drink-view">
        <button id="backBtn" class="back-btn">Tilbake</button>

        <h3>Velg en drikke:</h3>
        <ul id="drinkList" class="drink-list">
            <li>Kaffe</li>
            <li>Redbull</li>
            <li>Battery</li>
            <li>Monster</li>
            <li>Energishot</li>
        </ul>

        <button id="customDrinkBtn" class="custom-drink-btn">Lag egendefinert drikke</button>

        <button id="confirmBtn" class="confirm-btn">Bekreft at du har drukket dette</button>
    </div>
    `;
}