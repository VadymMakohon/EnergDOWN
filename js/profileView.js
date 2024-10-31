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
    <div class="top-right top-right-profile" id="userProfileSectionGoal profileGoal">
        <div class="userProfileTitle" id="userProfileTitleGoal">
             <h1>${getUsername(id)}'s mål</h1>
        </div>
        <div id="dailyGoalProgression">${getProfileGoalsListHTML(id)}</div>
        <div class="graph">${getProfileGoalGraph(id)}</div>
    </div>
    <div class="bottom-left" id="userProfileSectionFavoriteDrinks">
        <div class="userProfileTitle" id="userProfileTitleFavoriteDrinks">
            <h1>${getUsername(id)}'s favoritter</h1>
        </div>
            <div id="favoriteDrinks">
                <ul>
                    ${getFavoriteDrinksHtml(id)}
                </ul>
            </div>
    </div>
    <div class="bottom-right bottom-right-profile" id="userProfileSectionComments">
        <div class="userProfileTitle" id="userProfileTitleComments">
            <h1>${getUsername(id)}'s kommentarer</h1>
        </div>
        <div class="bottom-right-container-profile">
            <div class="comments-container">
                <ul id="comments">${getCommentsHtml(id)}</ul>
            </div>
            <div class="userProfileSection-profile" id="userProfileSectionNavigation-profile">
            <input type="textfield" placeholder="Skriv en kommentar" id="commentForUser">
            <button onclick="submitComment(${id}, commentForUser.value)">Legg kommentar <i class="fa-solid fa-pen"></i></button>
                </div>
            </div>
    </div>
</div>
        ${showFriendList()}
    `;
}
