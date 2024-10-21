function updateViewCreateUser() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    
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
          <img id="imagePreview" src="" alt="Egendefinert bilde" />
        </label>
      </div>
    </div>
    <button class="create-user">Opprett din bruker</button>
    
    
    `;
}
