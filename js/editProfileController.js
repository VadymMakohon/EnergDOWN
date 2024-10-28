function editUser(){
        let id = loggedInUserId();
        if(loggedInUserId() > -1){
        let index = findIndexOfUserId(id);

        model.users[index].username = model.inputs.editProfilePage.username
        model.users[index].email = model.inputs.editProfilePage.email
        model.users[index].password = model.inputs.editProfilePage.password
        model.users[index].image = model.inputs.editProfilePage.image

        model.inputs.loginPage.username = model.inputs.editProfilePage.username
        model.inputs.loginPage.password = model.inputs.editProfilePage.password
        }
    
    goToPage('loggedInUserProfilePage');

}

