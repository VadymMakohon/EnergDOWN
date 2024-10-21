function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <header>
            <h1>Velkommen</h1>

            <div>
                <div>Brukernavn:</div>
                <input type = "text" oninput = "model.inputs.loginPage.username = this.value"/>
                <div>Passord:</div>
                <input type = "password" oninput = "model.inputs.loginPage.password = this.value"/>
            </div>

            <button onclick="logIn()">Logg inn</button>
            <div style="color: red">${model.inputs.loginPage.error}</div>
        </header>
    `;
}