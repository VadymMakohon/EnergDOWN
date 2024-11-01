
function addFriend(friendName) {
    if (!friendName.trim()) {
        alert("Skriv gjerne navn til en venn.");
        return;
    }

    const userId = loggedInUserId();
    const userIndex = findIndexOfUserId(userId);
    const friendId = userToId(friendName);

    if (userIndex > -1) {
        const friendsList = allFriends();

        const isDuplicate = friendsList.some(friend => friend.name === friendName);
        if (isDuplicate) {
            alert("Den venn finnes allerede.");
            return;
        }
        let userExist = false;
        for (let user of model.users) {
            if (user.username == friendName) userExist = true;
        }
        if (!userExist) {
            document.getElementById('newFriendName').value = '';
            alert("Det finnes ikke.");
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
