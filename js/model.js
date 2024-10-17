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
                commentInput: '',
            },
    
            userProfilePage: {
                commentInput: '',
                addFriend: 0,
            },
    
            addDrinkPage: {
                selectedDrink: 0,
            },
    
            editGoalPage: {
                goal: 0,
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
                customDrinkName: '',
                coffeineContent: '',
                customDrinkImage: '',
                customDrinkId: 0,
            },
    
        },
    
        // Del 3: Felles data
    
        users: [
            {
                userId: 0,
                username: '',
                email: '',
                password: '',
                image: '',
            }
        ],
    
        goals: [
            {
                goalId: 0,
                goal: 0,
                goalProgression: 0,
                date: '',
                userId: '',
            }
        ],
    
        drinks: [
            {
                drinkId: 0,
                name: 'Battery',
                caffeineContent: 50,
                drinkImage: 'battery.png',
            },
            {
                drinkId: 1,
                name: 'Kaffe',
                coffeineContent: 50,
                drinkImage: 'kaffe.png',
            },
            {
                drinkId: 2,
                name: 'Redbull',
                coffeineContent: 50,
                drinkImage: 'redbull.png',
            }
        ],
    
        customDrinks: [
            { userId: 1, customDrinkName: '', customDrinkImage: '', customDrinkId: 2, isFavorite: true },
        ],
    
        friendLists: [
            { userId: 1, friendId: 2, isFriend: true },
            { userId: 1, friendId: 3, isFriend: true },
            { userId: 1, friendId: 4, isFriend: true },
            { userId: 2, friendId: 1, isFriend: true },
            { userId: 2, friendId: 3, isFriend: true },
            { userId: 2, friendId: 4, isFriend: true },
        ],
    
        selectedDrinks: [
            { userId: 1, drinkId: 1, isCustom: false},
            { userId: 1, drinkId: 2, isCustom: false},
            { userId: 1, drinkId: 4, isCustom: false},
            { userId: 1, isCustom: true, caffeineContent: 50, name: 'kaffekopp'},
        ],
    
        comments: [
            { userId: 1, friendId: 2, comment: ""},
        ],
    
        /* Vi tenkte også at kanskje en kan ha en liste for hver bruker med venner, men vet ikke helt om det er riktig
        friendList: [
            {
                userId: 1, [
                    {
                        userId: 2, isFriend: true
                        userId: 3, isFriend: true
                    }
    
                ]
            }
        ],*/
    
       
    }