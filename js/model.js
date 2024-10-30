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
      profileId: 0,
      commentInput: '',
      addFriend: 0,
    },

    addDrinkPage: {
      selected: [],
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
      customCaffeineContent: 0,
      customDrinkImage: '',
      customDrinkId: 0,
      selected: false,
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
      image: 'img/Profile_placeholder.png',
    },
    {
      id: 2,
      username: 'Rullekake',
      email: 'test@testus.com',
      password: 'asdf',
      image: 'img/avatar 4.png',
    },
    {
      id: 3,
      username: 'Vadym',
      email: 'vadym@testus.com',
      password: '777',
      image: 'img/avatar 10-min.png',
    },
    {
      id: 4,
      username: 'Egidijus',
      email: 'egidijus@testus.com',
      password: 'eg',
      image: 'img/avatar 11-min.png',
    },
    {
      id: 5,
      username: 'Christopher',
      email: 'christopher@testus.com',
      password: '1',
      image: 'img/avatar 12-min.png',
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
      selected: false,
    },
    {
      userId: null,
      drinkId: 1,
      name: 'Kaffe',
      caffeineContent: 95,
      image: 'kaffe.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 2,
      name: 'Redbull',
      caffeineContent: 80,
      image: 'redbull.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 3,
      name: 'Monster',
      caffeineContent: 160,
      image: 'monster.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 4,
      name: 'Espresso',
      caffeineContent: 64,
      image: 'espresso.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 5,
      name: 'Coca-Cola',
      caffeineContent: 34,
      image: 'coca_cola.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 6,
      name: 'Pepsi',
      caffeineContent: 38,
      image: 'pepsi.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 7,
      name: 'Black Coffee',
      caffeineContent: 95,
      image: 'black_coffee.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 8,
      name: 'Latte',
      caffeineContent: 77,
      image: 'latte.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 9,
      name: 'Green Tea',
      caffeineContent: 35,
      image: 'green_tea.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 10,
      name: 'Chai Latte',
      caffeineContent: 40,
      image: 'chai_latte.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 11,
      name: 'Iced Coffee',
      caffeineContent: 60,
      image: 'iced_coffee.png',
      selected: false,
    },
  ],

  favoriteDrinks: [
    { userId: 1, drinkId: 1 },
    { userId: 1, drinkId: 2 },
    { userId: 1, drinkId: 3 },
    { userId: 1, drinkId: 6 },
    { userId: 1, drinkId: 8 },
    { userId: 1, drinkId: 10 },
  ],

  friends: [
    { userId: 1, friendId: 2 },
    { userId: 1, friendId: 3 },
    { userId: 1, friendId: 5 },
    { userId: 2, friendId: 3 },
    { userId: 2, friendId: 4 },
    { userId: 3, friendId: 2 },
    { userId: 3, friendId: 5 },
    { userId: 4, friendId: 7 },
    { userId: 4, friendId: 3 },
    { userId: 4, friendId: 8 },
    { userId: 5, friendId: 9 },
    { userId: 5, friendId: 11 },
    { userId: 5, friendId: 4 },
  ],

  quotes: [
    {
      quoteId: 0,
      quote: 'For mye koffein kan gi deg hjertebank, ta det med ro!',
    },
    {
      quoteId: 1,
      quote: 'En kopp mindre i dag kan gi deg bedre søvn i natt.',
    },
    {
      quoteId: 2,
      quote: 'Reduser koffeininntaket og få mer naturlig energi.',
    },
    {
      quoteId: 3,
      quote: 'Tenk på helsen din, drikk vann i stedet for energidrikker.',
    },
    {
      quoteId: 4,
      quote: 'Mindre koffein kan føre til færre stressfølelser.',
    },
    {
      quoteId: 5,
      quote: 'Bytt ut brus med vann for en sunnere hverdag.',
    },
    {
      quoteId: 6,
      quote: 'Redusert koffein kan gi deg en mer stabil energi gjennom dagen.',
    },
    {
      quoteId: 7,
      quote: 'Mindre koffein gir deg bedre fokus og konsentrasjon.',
    },
    {
      quoteId: 8,
      quote: 'Ta vare på hjertet ditt, kutt ned på koffeinen.',
    },
    {
      quoteId: 9,
      quote: 'En kopp mindre kaffe kan gi deg en bedre dag.',
    },
    {
      quoteId: 10,
      quote: 'Følg hjertet ditt, velg færre koffeinholdige drikker.',
    },
    {
      quoteId: 11,
      quote: 'Redusert koffein kan hjelpe deg med å føle deg roligere.',
    },
    {
      quoteId: 12,
      quote: 'Koffeinkutt kan føre til færre hodepiner.',
    },
    {
      quoteId: 13,
      quote: 'Velg vann over koffein for en bedre balanse i livet.',
    },
    {
      quoteId: 14,
      quote: 'Mindre koffein, mer naturlig energi og bedre helse.',
    },
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
