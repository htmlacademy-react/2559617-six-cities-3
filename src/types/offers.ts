export type TApartmentType = 'apartment' | 'room';
export type TLocationCoordinates = {
    latitude: number;
    longitude: number;
    zoom: number;
}
export type TCity = {
    name: string;
    location: TLocationCoordinates;
}

export type THost = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type TOffer = {
    id: string;
    title: string;
    type: TApartmentType;
    price: number;
    previewImage: string;
    city: TCity;
    location: TLocationCoordinates;
    isFavourite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: THost;
    images: string [];
    maxAdults: number;
}
