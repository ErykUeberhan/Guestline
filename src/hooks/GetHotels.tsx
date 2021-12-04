import axios from 'axios';
import { useQuery } from 'react-query';
import { THotel } from '../lib/types/THotel';

const GetHotels = () => {
    const { isLoading, error, data } = useQuery("hotels", () => axios.get<THotel>("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"));
    return { isLoading, error, data };
}

export default GetHotels;