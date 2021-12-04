import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { TRooms } from '../lib/types/TRooms';
declare module 'axios' {
    interface AxiosRequestConfig {
        urlParams?: Record<string, string>;
    }
}

function GetRooms(hotelId:any) {
    const { isLoading, error, data } = useQuery(hotelId, () => axios.get<TRooms>("https://obmng.dbm.guestline.net/api/roomRates/OBMNG/"+hotelId));
    return { isLoading, error, data };
}

export default GetRooms;