function updateViewLoggedInUserProfile() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
        <div id="userProfile"> 
            <div class="top-left" id="sectionUser">
                <h1>${getLoggedInUsername()}</h1>
                <div class="profilePicture"><img src="${getLoggedInProfilePicture()}" class="loggedInProfilePicture"></div>
                <div class="user-profile-btns">
                    <button id="editProfileButton" onClick="goToPage('editProfilePage')">Endre profil</button>
                    <button id="friendsListButton" onClick="goToPage('friendsListPage')">Venneliste</button>
                </div>
            </div>
            <div class="top-right" id="userProfileSectionGoal">
                <div class="userProfileTitle" id="userProfileTitleGoal">
                <h1>Dagens mål</h1>
                </div>
                <div id="dailyGoalProgression">${goalsListHTML()}</div>
                <div class="graph">${getGoalGraph()}</div>
                <button id="editGoalButton" onClick="goToPage('editGoalPage')">Endre mål</button>
            </div>
            <div class="bottom-left" id="userProfileSectionFavoriteDrinks">
                <div class="userProfileTitle" id="userProfileTitleFavoriteDrinks">
                    <h1>Favoritter</h1>
                </div>
                <div id="favoriteDrinks">
                    <ul>${getLoggedInFavoriteDrinks()}</ul>
                </div>
            </div>
            <div class="bottom-right" id="userProfileSectionComments">
                <div class="userProfileTitle" id="userProfileTitleComments">
                    <h1>Kommentarer</h1>
                </div>
                <div class="bottom-right-container">
                    <div class="comments-container">
                        <ul id="comments">${getLoggedInCommentsHtml()}</ul>
                    </div>
                        <div class="userProfileSection" id="userProfileSectionNavigation">
                            <button id="showHistoryButton" onClick="goToPage('viewHistoryPage')">Vis historikk</button>
                            <button id="addDrinkButton" onClick="goToPage('addDrinkPage')">Legg til drikke</button>
                        </div>
                    </div>
            </div>
        </div>
        ${showFriendList()}
    `;
}
