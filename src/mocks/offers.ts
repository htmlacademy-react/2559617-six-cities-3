import { TOffer } from "../types/offers";

const IMG_URL = '/img';
const CITIES: string[] = ['Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dussseldorf'];
const CITIES_DESCRIPTION: string[] = [
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
];

export const LOCATIONS = CITIES.map((item, index) => ({
    id: index + 1,
    title: item,
    src: '#'
}));

const createRandomOffer = (index: number): TOffer => ({
    id: String(index),
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: getRandomInteger(100, 1000),
    city: {
        name: getRandomElement(CITIES),
        location: {
            latitude: 48.24570414430183,
            longitude: 16.35604383833018,
            zoom: 5 
        } 
    },
    location: {
        latitude: 48.24570414430183,
        longitude: 16.35604383833018,
        zoom: 5
    },
    isFavourite: Boolean(getRandomInteger(0, 1)),
    isPremium: Boolean(getRandomInteger(0, 1)),
    rating: getRandomInteger(1, 5),
    description: getRandomArrayElement(CITIES_DESCRIPTION),
    bedrooms: getRandomInteger(1, 4),
    goods: ['Heating'],
    host: {
        name: 'Oliver Conner',
        avatarUrl: `${IMG_URL}/${getRandomInteger(0, 1) ? 'avatar-max.jpg' : 'avatar-angelina.jpg'}`,
        isPro: Boolean(getRandomInteger(0, 1))
    },
    images: [
        `${IMG_URL}/apartmnet-01.jpg`,
        `${IMG_URL}/apartmnet-02.jpg`,
        `${IMG_URL}/apartmnet-03.jpg`,
    ],
    maxAdults: getRandomInteger(1, 5),
});

export const generateOffers = (offersNumber: number): TOffer[] => (
    Array.from({ length: offersNumber }, (_, index) => createRandomOffer(index))
);


const getRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = <T>(arr: T[]): T => {
    return arr[getRandomInteger(0, arr.length - 1)];
};

const getRandomArrayElement = getRandomElement;