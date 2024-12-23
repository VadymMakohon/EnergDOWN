const model = {
  // Del 1:
  app: {
    currentPage: 'startPage',
    // createUserPage, loginPage, mainPage, loggedInUserProfilePage, userProfilePage,
    //viewHistoryPage, addDrinkPage, addCustomDrinkPage, editGoalPage, editProfilePage, friendsListPage
    loggedIn: false,
    showFriends: false,
    previousPage: '',
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
      image: 'img/Profile_placeholder.png',
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
      image: 'img/windfish.png',
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
      progression: 20,
      date: '',
      userId: 2,
    },
    {
      id: 0,
      goal: 80,
      progression: 10,
      date: '',
      userId: 3,
    },
    {
      id: 0,
      goal: 90,
      progression: 20,
      date: '',
      userId: 4,
    },
    {
      id: 0,
      goal: 100,
      progression: 15,
      date: '',
      userId: 5,
    },
  ],

  drinks: [
    {
      userId: null,
      drinkId: 0,
      name: 'Battery 0.5L',
      caffeineContent: 160,
      image: 'battery.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 1,
      name: 'Kaffe kopp',
      caffeineContent: 95,
      image: 'kaffe.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 2,
      name: 'Redbull 0.25L',
      caffeineContent: 80,
      image: 'redbull.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 3,
      name: 'Monster 0.5L',
      caffeineContent: 160,
      image: 'monster.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 4,
      name: 'Espresso shot',
      caffeineContent: 64,
      image: 'espresso.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 5,
      name: 'Coca-Cola 0.33L',
      caffeineContent: 34,
      image: 'coca_cola.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 6,
      name: 'Pepsi Max 0.33L',
      caffeineContent: 38,
      image: 'pepsi_max.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 7,
      name: 'Burn 0.33L',
      caffeineContent: 110,
      image: 'burn.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 8,
      name: 'Monster Energy 0.5L',
      caffeineContent: 150,
      image: 'monster_energy.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 9,
      name: 'Green Tea kopp',
      caffeineContent: 35,
      image: 'green_tea.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 10,
      name: 'Rockstar 0.5L',
      caffeineContent: 160,
      image: 'rockstar.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 11,
      name: 'Iced Coffee kopp',
      caffeineContent: 60,
      image: 'iced_coffee.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 12,
      name: 'Energy Shot 60ml',
      caffeineContent: 200,
      image: 'energy_shot.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 13,
      name: 'Hell Energy Drink 0.25L',
      caffeineContent: 80,
      image: 'hell_energy.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 14,
      name: 'Xyience 0.5L',
      caffeineContent: 176,
      image: 'xyience.png',
      selected: false,
    },
    {
      userId: null,
      drinkId: 15,
      name: 'Yerba Mate kopp',
      caffeineContent: 85,
      image: 'yerba_mate.png',
      selected: false,
    },
  ],

  favoriteDrinks: [{ userId: 0, drinkId: 0 }],

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

  suggestions: [
    {
      suggestionId: 0,
      suggestion: 'Dagelig koffeininntak over 500mg kan være helseskadelig!',
    },
    {
      suggestionId: 1,
      suggestion: 'Kroppsvekt er en viktig faktor for hvor mye koffein du tåler!',
    },
    {
      suggestionId: 2,
      suggestion: 'Daglig inntak over 5,7 mg/kg kroppsvekt kan gi generelle negative helseeffekter!',
    },
    {
      suggestionId: 3,
      suggestion: 'Et koffeininntak på rundt 400 mg koffein per dag (tilsvarende opptil 5 kopper kaffe) kan nytes som en del av en sunn balansert diett og en aktiv livsstil.',
    },
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
    { userId: 1, friendId: 2, comment: 'Godt jobba med målet ditt!' },
    { userId: 1, friendId: 4, comment: 'Stå på, du klarer dette!' },
    { userId: 1, friendId: 3, comment: 'Inspirerende fremgang!' },
    { userId: 1, friendId: 5, comment: 'Imponerende innsats!' },
    { userId: 2, friendId: 5, comment: 'Bra fokus på målene!' },
    { userId: 2, friendId: 4, comment: 'Hold deg motivert!' },
    { userId: 2, friendId: 3, comment: 'Du er på rett vei!' },
    { userId: 2, friendId: 3, comment: 'Imponert over innsatsen din!' },
    { userId: 3, friendId: 3, comment: 'Fortsett det gode arbeidet!' },
    { userId: 3, friendId: 5, comment: 'Motivasjonen din inspirerer!' },
    { userId: 3, friendId: 5, comment: 'God progresjon!' },
    { userId: 3, friendId: 4, comment: 'Veldig bra innsats!' },
    { userId: 4, friendId: 2, comment: 'Kjempebra måloppnåelse!' },
    { userId: 4, friendId: 3, comment: 'Fortsett med de gode vanene!' },
    { userId: 4, friendId: 5, comment: 'Veldig imponerende!' },
    { userId: 4, friendId: 2, comment: 'Så inspirerende å se!' },
    { userId: 5, friendId: 2, comment: 'Du er virkelig dedikert!' },
    { userId: 5, friendId: 3, comment: 'Bra jobbet med progresjonen din!' },
    { userId: 5, friendId: 2, comment: 'Hold fokus, du er på vei!' },
    { userId: 5, friendId: 4, comment: 'Veldig bra, fortsett sånn!' },
  ],
};
