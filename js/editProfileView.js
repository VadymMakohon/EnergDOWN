function updateViewEditProfile() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${createNavigationHtml()}
    <div class="container-acdv">
        <div class="btn-div">
            <button class="back-btn" onClick="goToPreviousPage()">Tilbake</button>
        </div>
        <div class="left">
            <input type="text" placeholder="Brukernavn:" required oninput = "model.inputs.editProfilePage.username = this.value"/>
            <input type="email" placeholder="E-post:" required oninput = "model.inputs.editProfilePage.email = this.value"/>
            <input type="password" placeholder="Passord" required oninput = "model.inputs.editProfilePage.password = this.value"/>
            
            
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
        <button class="add-drink-btn" onclick = 'editUser()'>Endre</button>
        ${showFriendList()}
    `;
}
