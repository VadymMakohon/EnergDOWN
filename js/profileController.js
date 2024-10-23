function getUsername(id) {
    for (let user of model.users) {
      if (user.id == id)
        return user.username;
    }
}

function getProfilePicture(id) {
    for (let user of model.users) {
      if (user.id == id)
        return user.image;
    }
}

function getComments(id) {
  let userProfileComments = [];
  for (let comments of model.comments) {
    if (comments.userId == id)
        userProfileComments.push(comments.comment)
  }
  return userProfileComments;
}