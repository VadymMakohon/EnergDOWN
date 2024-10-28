function updateViewAddCustomDrink() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${createNavigationHtml()}
    <div class="container-acdv">
        <div class="btn-div">
            <button class="back-btn" id="backToUserProfileButton" onClick="goToPage('addDrinkPage')">Tilbake</button>
        </div>
        <div class="left">
            <input type="text" placeholder="Navn:" required oninput = "model.inputs.addCustomDrinkPage.customDrinkName = this.value"/>
            <input type="number" placeholder="Koffeininnhold i mg:" required oninput = "model.inputs.addCustomDrinkPage.coffeineContent = this.value"/>
            
        </div>
        <div class="right">
            <input
            type="file"
            id="fileInput"
            accept="image/*"
            style="display: none"
            oninput = "model.inputs.addCustomDrinkPage.customDrinkImage = this.value"
            />
            <label for="fileInput" class="image-label-drink">
            <span class="image-drink-text">Drikke bilde</span>
            </label>
        </div>
        </div>
        <button class="add-drink-btn" onClick="createDrink()">Legg til</button>
        ${showFriendList()}
    
    `;
}
