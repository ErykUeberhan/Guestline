export interface IHotel {
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
    starRating: number;
    telephone: string;
    town: string;
}

interface Facilities {
    [index: number]: {case: number};
}

interface Images {
    [index: number]: {url: string};
}

interface Position {
    latitude: number;
    longitude: number;
    timezone: string;
}