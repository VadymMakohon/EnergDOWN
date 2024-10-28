function editUser(){
        let id = loggedInUserId();
        let index = findIndexOfUserId(id);

        model.users(index).username = model.inputs.editProfilePage.username
        model.users(index).email = model.inputs.editProfilePage.email
        model.users(index).password = model.inputs.editProfilePage.password
        model.users(index).image = model.inputs.editProfilePage.image
        
    
    goToPage('loggedInUserProfilePage');

}

function findIndexOfUserId(x){
    for(let i = 0; i <= model.users.length; i++){
        if(model.users(i).id == x) return i;
    }
    return -1;
}