import { TOffer } from '../types/offers';

export const offers: TOffer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavourite: false,
    isPremium: true,
    rating: 4.8,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true,
    },
    images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
    maxAdults: 4,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 10,
      },
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 8,
    },
    isFavourite: true,
    isPremium: false,
    rating: 4.2,
    description:
      'Stylish room with a view on the river and the city center.',
    bedrooms: 1,
    goods: ['Breakfast', 'Air conditioning', 'Mini bar'],
    host: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false,
    },
    images: ['/img/apartment-02.jpg', '/img/apartment-03.jpg'],
    maxAdults: 2,
  },
];
