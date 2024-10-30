function updateViewUserProfile() {
  let id = model.inputs.userProfilePage.profileId;
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${createNavigationHtml()}
    <div id="userProfile"> 
    <div class="top-left" id="sectionUser">
        <h1>${getUsername(id)}</h1>
        <div class="profilePicture"><img src="${getProfilePicture(
          id
        )}" class="loggedInProfilePicture"></div>
        <div class="user-profile-btns">
        </div>
    </div>
    <div class="top-right" id="userProfileSectionGoal">
        <div class="userProfileTitle" id="userProfileTitleGoal">
        <h1>Dagens mål</h1>
        </div>
        <div id="dailyGoalProgression">${getProfileGoalsListHTML(id)}</div>
        <div class="graph">${getProfileGoalGraph(id)}</div>
    </div>
    <div class="bottom-left" id="userProfileSectionFavoriteDrinks">
        <div class="userProfileTitle" id="userProfileTitleFavoriteDrinks">
            <h1>Favoritter</h1>
        </div>
            <div id="favoriteDrinks">
                <ul>
                    ${getFavoriteDrinksHtml(id)}
                </ul>
            </div>
    </div>
    <div class="bottom-right" id="userProfileSectionComments">
        <div class="userProfileTitle" id="userProfileTitleComments">
            <h1>Kommentarer</h1>
        </div>
        <div class="bottom-right-container">
            <div class="comments-container">
                <ul id="comments">${getCommentsHtml(id)}</ul>
            </div>
                <div class="userProfileSection" id="userProfileSectionNavigation">
                </div>
            </div>
    </div>
</div>
        ${showFriendList()}
    `;
}
