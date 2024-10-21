function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <header>
            <h1>Velkommen</h1>
            <link rel="stylesheet" href="style.css">
            <div>
                <div>Brukernavn:</div>
                <input type = "text" oninput = "model.inputs.loginPage.username = this.value"/>
                <div>Passord:</div>
                <input type = "password" oninput = "model.inputs.loginPage.password = this.value"/>
            </div>

            <button onclick="logIn()">Logg inn</button>
    
  </header>
    `;
}