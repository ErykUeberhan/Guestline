export type THotel = {
    data: Hotel;
}

type Hotel = {
    [index: number]: HotelInfo;
}

type HotelInfo = {
    address1: string;
    address2: string;
    checkInHours: number;
    checkInMinutes: number;
    checkOutHours: number;
    checkOutMinutes: number;
    country: string;
    description: string;
    email: string;
    facilities: Facilities;
    id: string;
    images: Images;
    name: string;
    position: Position;
    postcode: string;
    starRating: string;
    telephone: string;
    town: string;
}

type Facilities = {
    [index: number]: {case: number};
}

type Images = {
    [index: number]: {url: string};
}

type Position = {
    latitude: number;
    longitude: number;
    timezone: string;
}