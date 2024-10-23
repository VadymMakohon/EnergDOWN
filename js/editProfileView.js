function updateViewEditProfile() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${createNavigationHtml()}
    <div class="container-acdv">
        <div class="btn-div">
            <button class="back-btn" onClick="goToPage('loggedInUserProfilePage')">Tilbake</button>
        </div>
        <div class="left">
            <input type="text" placeholder="Brukernavn:" required/>
            <input type="email" placeholder="E-post:" required/>
            <input type="password" placeholder="Passord" required/>
            
            
        </div>
        <div class="right">
            <input
            type="file"
            id="fileInput"
            accept="image/*"
            style="display: none"
            />
            <label for="fileInput" class="image-label-drink">
            <span class="image-drink-text">Endre profilebilde</span>
            </label>
        </div>
        </div>
        <button class="add-drink-btn">Endre</button>
        ${showFriendList()}
    `;
}
