function updateViewCreateUser() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${createNavigationHtml()}
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
        <div class="create-user-btn-container">
          <button class="create-user">Opprett din bruker</button>

        </div>
    </form>
    <script>
        
    </script>
    ${showFriendList()}
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
