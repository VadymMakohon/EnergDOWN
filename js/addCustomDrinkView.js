function updateViewAddCustomDrink() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${createNavigationHtml()}
    <div class="container-acdv">
        <div class="btn-div">
            <button class="back-btn" id="backToUserProfileButton" onClick="goToPage('addDrinkPage')">Tilbake</button>
        </div>
        <div class="left">
            <input type="text" placeholder="Navn:" required/>
            <input type="number" placeholder="Koffeininnhold i mg:" required/>
            
        </div>
        <div class="right">
            <input
            type="file"
            id="fileInput"
            accept="image/*"
            style="display: none"
            />
            <label for="fileInput" class="image-label-drink">
            <span class="image-drink-text">Drikke bilde</span>
            </label>
        </div>
        </div>
        <button class="add-drink-btn">Legg til</button>
        ${showFriendList()}
    
    `;
}
