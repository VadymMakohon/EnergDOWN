const model = {
    // Del 1: 
    app: {
        currentPage: 'startPage',
        // createAccountPage, loginPage, landingPage, loggedInUserProfile, userProfilePage, viewHistoryPage, addDrinkPage, addCustomDrinkPage, editGoalPage, editProfilePage, friendsListPage
        loggedIn: false,
    },

    // Del 2: Inputs
    inputs: {

        startPage: {
        },

        createAccountPage: {
            username: '',
            email: '',
            password: '',
            image: '',
        },


        loginPage: {
            username: '',
            password: '',
        },


        landingPage: {
        },


        landingPageWithFriendList: {
        },

        loggedInUserProfile: {

        },

        userProfilePage: {

        },

        addDrinkPage: {


        },

        editGoalPage: {

        },

        friendsListPage: {
            searchFriend: '',
        },

        editProfilePage: {
            username: '',
            email: '',
            password: '',
            image: '',
        },

        viewHistoryPage: {
            startDate: '',
            endDate: '',
        },

        addCustomDrinkPage: {
            drinkName: '',
            coffeineContent: '',
            drinkImage: '',
        },

    },

    // Del 3: Felles data

    users: [
        {
            id: 0,
            username: '',
            email: '',
            password: '',
            image: '',

        }
    ],

    goals: [
        {
            goalId: '0',
            goal: '',
            date: '',
            userId: '',
        }
    ],

    drinks: [
        {
            drinkId: '0',
            name: '',
            coffeineContent: '',
            drinkImage: '',
        }
    ],

    favoriteDrinks: [
        { userId: 1, drinkId: 1, isFavorite: true },
    ],

}