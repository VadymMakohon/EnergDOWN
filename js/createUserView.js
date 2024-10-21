function updateViewCreateUser() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    <form id="createUserForm">
        <div class="container-cuv">
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
            <label for="fileInput" class="image-label">
            <span class="image-text">Egendefinert bilde</span>
            </label>
        </div>
        </div>
        <button class="create-user">Opprett din bruker</button>
    </form>
    
    
    `;
}
