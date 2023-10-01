const cardsArray = [
  {
    priority: false,
    title: 'Free',
    price: '$0/mo',
    description: '10 users included 2 GB of storage Email support Help center access',
    btnText: 'Sign up for free',
    btnType: "outline-primary"
  },
  {
    priority: false,
    title: 'Pro',
    price: '$15/mo',
    description: '30 users included 2 GB of storage Email support Help center access',
    btnText: 'Get started',
    btnType: "primary"
  },
  {
    priority: true,
    title: 'Enterprise',
    price: '$29/mo',
    description: '10 users included 2 GB of storage Email support Help center access',
    btnText: 'Contact us',
    btnType: "primary"
  },
]

const tableArrayData = [
  { content: "Public", isFree: true, isPro: true, isEnterprise: true },
  { content: "Private", isFree: false, isPro: true, isEnterprise: true },
  { content: "Permissions", isFree: true, isPro: true, isEnterprise: true },
  { content: "Sharing", isFree: false, isPro: true, isEnterprise: true },
  { content: "Unlimited members", isFree: false, isPro: true, isEnterprise: true },
  { content: "Extra Security", isFree: false, isPro: false, isEnterprise: true },
]

export{
  cardsArray,
  tableArrayData
}

