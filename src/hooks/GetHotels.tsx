import axios from 'axios';
import { useQuery } from 'react-query';
import { IHotel } from '../lib/interfaces/IHotel';

const GetHotels = () => {
    const { isLoading, error, data } = useQuery("hotels", () => axios.get<IHotel>("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"));
    return { isLoading, error, data };
}

export default GetHotels;