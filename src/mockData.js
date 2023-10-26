const configData = {
  "menu": {
    "id": "menu_id",
    "value": "menu_value",
    "items": [
      {
        name: 'Home',
        title: 'Home',
        url: '/',
      },
      {
        name: 'Settings',
        title: 'Settings',
        url: '/settings',
      },
      {
        name: 'My Profile',
        title: 'My Profile',
        url: '/myProfile',
      },
      {
        name: 'Policy',
        title: 'Policy',
        url: '/policy',
      },
      {
        name: 'Notifications',
        title: 'Notifications',
        url: '/notifications',
      },
      {
        name: 'Calculator',
        title: 'Calculator',
        url: '/calculator',
      }
    ]
  },
  "home_features": {
    "products": [
      {
        "class": "Vip",
        "category": "Gold+",
        "coverage": "500,000",
        "currency": "SAR",
        "rating": "3"
      },
      {
        "class": "Premium",
        "category": "Gold",
        "coverage": "250,000",
        "currency": "SAR",
        "rating": "3"
      },
      {
        "class": "Classic",
        "category": "Silver",
        "coverage": "500,000",
        "currency": "SAR",
        "rating": "2"
      },
      {
        "class": "Essential",
        "category": "Basic",
        "coverage": "500,000",
        "currency": "SAR",
        "rating": "1"
      }
    ],
    "myInsurance": [
      {
        id: 1,
        title: "Health Insurance",
        image: require('./assets/health-insurance.png'),
        navigate: 'Health Insurance'
      },
      {
        id: 2,
        title: "Life Insurance",
        image: require('./assets/life-insurance.png'),
        navigate: 'Life Insurance'
      },
      {
        id: 3,
        title: "Vehicle Insurance",
        image: require('./assets/car-insurance.png'),
        navigate: 'Vehicle Insurance'
      }
    ],
    "Settings": [
      {},
      {}
    ],
    "Mynetwork": [
      {},
      {}
    ]
  }
}
export { configData };