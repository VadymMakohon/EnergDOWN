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
            sentComments: [],
            favoriteDrinks: [],
        },

        userProfilePage: {
            sentComments: [],
            friendsList: [],
        },

        addDrinkPage: {
            goalRegistrations: [
                { goal: '', goalProgression: '', date: '', },
            ],
            favoriteDrinks: [],
            drinksBeforeConfirmation: [],
        },

        editGoalPage: {
            goalRegistrations: [
                { goal: '', goalProgression: '', date: '', },
            ],
        },

        friendsListPage: {
            friendList: [],
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
            favoriteDrinks: [],
        },

    },

    // Del 3: Felles data

    registeredAccounts: [
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
            id: '',
            goal: '',
            date: '',
            userId: '',
        }
    ]

    drinks: [
        {
            id: '',
            name: '',
            caffeineContent: '',
            drinkImage: '',
        }
    ],

    favoriteDrinks: [
        {
            userId: '',
            name: '',
            isFavorite: true,

        }
    ]
}