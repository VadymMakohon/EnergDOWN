function getUsername(id) {
    for (let user of model.users) {
      if (user.id == id)
        return user.username;
    }
}

function getProfilePicture(id) {
    for (let user of model.users) {
      if (user.id == id)
        return user.username;
    }
}