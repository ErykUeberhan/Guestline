import React from 'react'
import GetHotels from '../../hooks/GetHotels'
import HotelCard from '../HotelCard/HotelCard';

const List: React.FC = () => {
    const { isLoading, error , data } = GetHotels();
    if(error instanceof Error) return <h1>Error: {error?.message}, please reload page.</h1>;
    if(isLoading) return <h1>Loading ...</h1>;
    
    return (
        <div className='list'>
            {
                data?.data instanceof Array ?
                data?.data?.map((element:any) => {
                    return <HotelCard hotel={element}/>
                })
                :
                null
            }
            
        </div>
    )
}

export default List




