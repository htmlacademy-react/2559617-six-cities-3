export enum AppRoute {
    Main = '/',
    Login= '/login',
    Favorites = '/favorites',
    Offer = '/offer'
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITIES =[
  {
    id: 'paris',
    name: 'Paris'
  },
  {
    id: 'cologne',
    name: 'Cologne'
  },
  {
    id: 'brussels',
    name: 'Brussels'
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam'
  },
  {
    id: 'hamburg',
    name: 'Hamburg'
  },
  {
    id: 'dusseldorf',
    name: 'Dusseldorf'
  },
]
