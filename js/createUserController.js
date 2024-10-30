function createUser() {
  let openId = findAvailableId();
  let profileImage = model.inputs.createAccountPage.image;
  if(profileImage == ''){
    profileImage = 'img/Profile_placeholder.png';
  }
  let newUser = {
    id: openId,
    username: model.inputs.createAccountPage.username,
    email: model.inputs.createAccountPage.email,
    password: model.inputs.createAccountPage.password,
    image: profileImage,
  };
  model.users.push(newUser);
  console.log(newUser);
  goToPage('loginPage');
}

function findAvailableId() {
  for (let i = 0; i <= model.users.length + 1; i++) {
    if (!idToUser(i)) return i;
  }
}
