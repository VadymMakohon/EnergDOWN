function updateViewLoggedInUserProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
    ${createNavigationHtml()}
        <div id="userProfile"> 
            <div class="userProfileSection" id="sectionUser">
                <div id="username">${getLoggedInUsername()}</div>
                <div id="profilePicture"><img src="${getLoggedInProfilePicture()}" class="loggedInProfilePicture"></div>
                <button id="editProfileButton" onClick="goToPage('editProfilePage')">Endre profil</button>
                <button id="friendsListButton" onClick="goToPage('friendsListPage')">Venneliste</button>
            </div>
            <div class="userProfileSection" id="userProfileSectionGoal">
                <div class="userProfileTitle" id="userProfileTitleGoal">
                <h1>Dagens mål</h1>
                </div>
                <div id="dailyGoalProgression">${goalsListHTML()}</div>
                <button id="editGoalButton" onClick="goToPage('editGoalPage')">Endre mål</button>
            </div>
            <div class="userProfileSection" id="userProfileSectionFavoriteDrinks">
                <div class="userProfileTitle" id="userProfileTitleFavoriteDrinks">
                    <h1>Favoritter</h1>
                </div>
                <div id="favoriteDrinks">${getLoggedInFavoriteDrinks()}</div>
            </div>
            <div class="userProfileSection" id="userProfileSectionComments">
                <div class="userProfileTitle" id="userProfileTitleComments">
                    <h1>Kommentarer</h1>
                </div>
                <div id="comments">${getLoggedInComments()}</div>
            </div>
            <div class="userProfileSection" id="userProfileSectionNavigation">
                <button id="showHistoryButton" onClick="goToPage('viewHistoryPage')">Vis historikk</button>
                <button id="addDrinkButton" onClick="goToPage('addDrinkPage')">Legg til drikke</button>
            </div>
        </div>
        ${showFriendList()}
    `;
}