export type TRooms = {
    ratePlans: RatePlans;
    rooms: Rooms;
    
}

type RatePlans = {
    [index: number]: RatePlansInfo;
}

type RatePlansInfo = {
    cancellationPolicy: CancellationPolicy;
    id: string;
    longDescription: string;
    prePayment: string;
    shortDescription: string;
}

type CancellationPolicy = {
    amount: number;
    applicable: string;
    hour: string;
    name: string;
    penalty: string;
    text: string;
}

type Rooms = {
    [index: number]: RoomInfo;
}

type RoomInfo = {
    bedConfiguration: string;
    disabledAccess: boolean;
    facilities: Facilities;
    id: string;
    images: Images;
    longDescription: string;
    name: string;
    occupancy: Occupancy;
    shortDescription: string;
}

type Facilities = {
    [index: number]: FacilitiesInfo;
}

type FacilitiesInfo = {
    code: string;
    name: string;
}

type Images = {
    [index: number]: ImagesInfo;
}

type ImagesInfo = {
    alt: string;
    url: string;
}

type Occupancy = {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
}
