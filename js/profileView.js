function updateViewUserProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div id="userProfile"> 
            <div class="userProfileSection" id="sectionUser">
                <div id="username"><!-- getUsername !--></div>
                <div id="profilePicture"><!-- getProfilePicture !--></div>
                <button id="endreProfil" onClick="goToPage('editProfilePage')">Endre profil</button>
                <button id="venneListe" onClick="goToPage('friendsListPage')">Venneliste</button>
            </div>
            <div class="userProfileSection" id="userProfileSectionGoal">
                <div class="userProfileTitle" id="userProfileTitleGoal">
                <h1>Dagens mål</h1>
                </div>
                <div id="dailyGoalProgression"><!-- getGoalProgression !--></div>
                <button id="editGoal" onClick="goToPage('editGoalPage')">Endre mål</button>
            </div>
            <div class="userProfileSection" id="userProfileSectionFavoriteDrinks">
                <div class="userProfileTitle" id="userProfileTitleFavoriteDrinks">
                    <h1>Favoritter</h1>
                </div>
                <div id="favoriteDrinks"><!-- getFavoriteDrinks !--></div>
            </div>
            <div class="userProfileSection" id="userProfileSectionComments">
                <div class="userProfileTitle" id="userProfileTitleComments">
                    <h1>Kommentarer</h1>
                </div>
                <div id="comments"><!-- getUserProfileComments !--></div>
            </div>
            <div class="userProfileSection" id="userProfileSectionNavigation">
                <button id="showHistory" onClick="goToPage('viewHistoryPage')">Vis historikk</button>
                <button id="addDrink" onClick="goToPage('addDrinkPage')">Legg til drikke</button>
            </div>
        </div>
    `;
}