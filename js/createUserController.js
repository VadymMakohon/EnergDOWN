function createUser(){
    let openId = findAvailableId();
    let newUser = {
        id: openId,
        username: model.inputs.createAccountPage.username,
        email: model.inputs.createAccountPage.email,
        password: model.inputs.createAccountPage.password,
        image: model.inputs.createAccountPage.image,
    }
    model.users.push(newUser);
    goToPage('loginPage');

}

function findAvailableId(){
    for(let i = 0; i <= model.users.length + 1; i++){
        if(!idToUser(i)) return i;
    }
}