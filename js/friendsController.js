
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
        if(!userExist){
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
