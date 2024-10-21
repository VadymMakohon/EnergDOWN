    const model = {
        // Del 1: 
        app: {
            currentPage: 'startPage',
            // createUserPage, loginPage, mainPage, mainWithFriendsPage, loggedInUserProfilePage, userProfilePage, 
            //viewHistoryPage, addDrinkPage, addCustomDrinkPage, editGoalPage, editProfilePage, friendsListPage
            loggedIn: false,
        },
    
        // Del 2: Inputs
        inputs: {
    
            createAccountPage: {
                username: '',
                email: '',
                password: '',
                image: '',
            },
    
    
            loginPage: {
                username: '',
                password: '',
                error: '',
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
                id: 0,
                username: '',
                email: '',
                password: '',
                image: '',
            },
            {
                id: 1,
                username: 'admin',
                email: 'admin@getacademy.no',
                password: '1234',
                image: '',
            },
            {
                id: 2,
                username: 'Rullekake',
                email: 'test@testus.com',
                password: 'asdf',
                image: '',
            }
        ],
    
        goals: [
            {
                id: 0,
                goal: 0,
                progression: 0,
                date: '',
                userId: '',
            }
        ],
    
        drinks: [
            {
                userId: null,
                drinkId: 0,
                name: 'Battery',
                caffeineContent: 50,
                image: 'battery.png',
            },
            {
                userId: null,
                drinkId: 1,
                name: 'Kaffe',
                coffeineContent: 50,
                image: 'kaffe.png',
            },
            {
                userId: null,
                drinkId: 2,
                name: 'Redbull',
                coffeineContent: 50,
                image: 'redbull.png',
            }
        ],
        
        favoriteDrinks: [
            {userId: 1, drinkId: 1},
        ],
    
        friends: [
            { userId: 1, friendId: 2},
            { userId: 1, friendId: 3},
            { userId: 1, friendId: 4},
            { userId: 2, friendId: 1},
            { userId: 2, friendId: 3},
            { userId: 2, friendId: 4},
        ],
        
        //Se om vi kan utvide dette inn i drinks
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