function editGoal() {
    const inputs = model.inputs.editProfilePage;
    const newGoal = inputs.goal;
    let id = loggedInUserId();
    if (loggedInUserId() > -1) {
        let index = findIndexOfUserId(id);
        model.goals[index].goal = newGoal;
    }
    goToPage('loggedInUserProfilePage');
}
