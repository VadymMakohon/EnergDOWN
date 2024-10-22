function updateViewLogin() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
        <header>
            <h1>Velkommen</h1>
            
            <div>
                <input type = "text" placeholder="Brukernavn" oninput = "model.inputs.loginPage.username = this.value"/>
              
                <input type = "password" placeholder="Passord" oninput = "model.inputs.loginPage.password = this.value"/>
            </div>

            <button onclick="logIn()">Logg inn</button>
            <div style="color: red">${model.inputs.loginPage.error}</div>
        </header>
    `;
}
