const model = {
  // Del 1:
  app: {
    currentPage: 'startPage',
    // createUserPage, loginPage, mainPage, loggedInUserProfilePage, userProfilePage,
    //viewHistoryPage, addDrinkPage, addCustomDrinkPage, editGoalPage, editProfilePage, friendsListPage
    loggedIn: false,
    showFriends: false,
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
      image: 'img/redbull.png',
    },
    {
      id: 2,
      username: 'Rullekake',
      email: 'test@testus.com',
      password: 'asdf',
      image: '',
    },
    {
      id: 3,
      username: 'Vadym',
      email: 'vadym@testus.com',
      password: '777',
      image: '',
    },
    {
      id: 4,
      username: 'Egidijus',
      email: 'egidijus@testus.com',
      password: 'eg',
      image: '',
    },
    {
      id: 5,
      username: 'Christopher',
      email: 'christopher@testus.com',
      password: 'klepp',
      image: '',
    },
  ],

  goals: [
    {
      id: 0,
      goal: 0,
      progression: 0,
      date: '',
      userId: 0,
    },
    {
      id: 0,
      goal: 100,
      progression: 25,
      date: '',
      userId: 1,
    },
    {
      id: 0,
      goal: 70,
      progression: 0,
      date: '',
      userId: 2,
    },
    {
      id: 0,
      goal: 80,
      progression: 0,
      date: '',
      userId: 3,
    },
    {
      id: 0,
      goal: 90,
      progression: 0,
      date: '',
      userId: 4,
    },
    {
      id: 0,
      goal: 100,
      progression: 0,
      date: '',
      userId: 5,
    },
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
      caffeineContent: 50,
      image: 'kaffe.png',
    },
    {
      userId: null,
      drinkId: 2,
      name: 'Redbull',
      caffeineContent: 50,
      image: 'redbull.png',
    },
  ],

  favoriteDrinks: [
    { userId: 1, drinkId: 1 },
    { userId: 1, drinkId: 2 },
  ],

  friends: [
    { userId: 1, friendId: 2 },
    { userId: 1, friendId: 3 },
    { userId: 1, friendId: 4 },
    { userId: 1, friendId: 5 },
    { userId: 2, friendId: 3 },
    { userId: 2, friendId: 4 },
    { userId: 2, friendId: 5 },
    { userId: 3, friendId: 2 },
    { userId: 3, friendId: 4 },
    { userId: 3, friendId: 5 },
    { userId: 4, friendId: 2 },
    { userId: 4, friendId: 3 },
    { userId: 4, friendId: 5 },
    { userId: 5, friendId: 2 },
    { userId: 5, friendId: 3 },
    { userId: 5, friendId: 4 },
  ],

  //Se om vi kan utvide dette inn i drinks
  selectedDrinks: [
    { userId: 1, drinkId: 1, isCustom: false },
    { userId: 1, drinkId: 2, isCustom: false },
    { userId: 1, drinkId: 4, isCustom: false },
    { userId: 1, isCustom: true, caffeineContent: 50, name: 'kaffekopp' },
  ],

  comments: [
    { userId: 1, friendId: 2, comment: 'Kommentar 1' },
    { userId: 1, friendId: 1, comment: 'Kommentar 2' },
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
};
