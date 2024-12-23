function updateViewStart() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <header>
      <h1 class="blinking-text">Velkommen</h1>
      <p>
        På denne nettsiden kan du holde oversikt over ditt koffeininntak. Du
        kan sette deg daglige mål og motta motivasjon for å nå dem.
      </p>

      <div class="button-container">
        <button onclick="goToPage('loginPage')">Logg inn</button>
        <button onclick="goToPage('createUserPage')">Opprett bruker</button>
      </div>
    </header>
  `;
}
