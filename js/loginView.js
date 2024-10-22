function updateViewLogin() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
        <header>
            <h1>Velkommen</h1>
            <form>
            <div class="login-container">
                <input type = "text" placeholder="Brukernavn" required oninput = "model.inputs.loginPage.username = this.value"/>
              
                <input type = "password" placeholder="Passord" required oninput = "model.inputs.loginPage.password = this.value"/>
            </div>
            <button class="login-button" onclick="logIn()">Logg inn</button>
            </form>
            <div style="color: red">${model.inputs.loginPage.error}</div>
        </header>
    `;
}
