function editGoal() {
    const newGoal = model.inputs.editGoalPage.goal;
    let id = loggedInUserId();
    if (loggedInUserId() < 0) return;
    
    for (let goal of model.goals){
        if(goal.userId == id){
            goal.goal = newGoal;
        }
    }
    
    goToPage('loggedInUserProfilePage');
}

