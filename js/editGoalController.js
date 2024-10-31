function editGoal() {
    const newGoal = model.inputs.editGoalPage.goal;
    let id = loggedInUserId();
    let counter = 0;
    if (loggedInUserId() < 0) return;
    
    for (let goal of model.goals){
        if(goal.userId == id){
            counter++;
            goal.goal = newGoal;
        }
    }
    if(counter == 0){
        createNewGoal(id,newGoal);
    }
    goToPage('loggedInUserProfilePage');
}

function createNewGoal(id,goal){
    let newGoal = {
        id: 0,
        goal: goal,
        progression: 0,
        date: '',
        userId: id,
      }
      model.goals.push(newGoal);
}

