function updateViewCreateUser() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${createNavigationHtml()}
    <form id="createUserForm">
        <div class="container-cuv">
        <div class="left">
            <input type="text" placeholder="Brukernavn:" required oninput = "model.inputs.createAccountPage.username = this.value"/>
            <input type="email" placeholder="E-post:" required oninput = "model.inputs.createAccountPage.email = this.value"/>
            <input type="password" placeholder="Passord" required oninput = "model.inputs.createAccountPage.password = this.value"/>
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
        <div class="create-user-btn-container">
          <button class="create-user" onclick = 'createUser()'>Opprett din bruker</button>

        </div>
    </form>
    <script>
        
    </script>
    `;
}

document
  .getElementById('createUserForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const image = document.querySelector('input[type="file"]').value;
  });
