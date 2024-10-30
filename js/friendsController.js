// Brukte samme logikken her som i addDrinkController. Litt usikkert om det er riktig, selv om funksjon virker!!!

function getFriends() {
    const userId = loggedInUserId();
    const userIndex = findIndexOfUserId(userId);

    return userIndex > -1 && model.users[userIndex].friends ? model.users[userIndex].friends : [];
}

function friendsListHTML2() {
    const friends = getFriends();
    let friendsHtml = '';

    if (friends.length > 0) {
        friends.forEach(friend => {
            friendsHtml += `<li>${friend.name}</li>`;
        });
    } else {
        friendsHtml = "<p>No friends added yet.</p>";
    }

    return friendsHtml;
}

function addFriend(friendName) {
    if (!friendName.trim()) {
        alert("Please enter a friend's name.");
        return;
    }

    const userId = loggedInUserId();
    const userIndex = findIndexOfUserId(userId);
    const friendId = userToId(friendName);

    if (userIndex > -1) {
        const friendsList = allFriends();

        const isDuplicate = friendsList.some(friend => friend.name === friendName);
        if (isDuplicate) {
            alert("This friend is already in your list.");
            return;
        }
        let userExist = false;
        for (let user of model.users) {
            if (user.username == friendName) userExist = true;
          }
        if(userExist == false){
            alert("This does not exist.");
            return;
        }
        

        model.friends.push({
            userId,
            friendId 
        });
        alert(`${friendName} added to friends list.`);

        document.getElementById('newFriendName').value = '';
        updateView();
    }
}
