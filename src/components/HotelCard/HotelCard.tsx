import React, { useState } from 'react'
import GetRooms from '../../hooks/GetRooms';
import './HotelCard.sass'

const HotelCard: React.FC<any> = (hotel: any) => {
    const [hotelState] = useState(hotel.hotel)
    console.log(hotelState)
    const { isLoading, error , data } = GetRooms(hotelState.id);
    if(error instanceof Error) return <h1>Error: {error?.message}, please reload page.</h1>;
    if(isLoading) return <h1>Loading ...</h1>;
    console.log(data)
    return (
        <div className='hotelCard'>
            <div className='hotelCard-header'>
                <div className='hotelCard-header-images'>
                    <img src={hotelState.images[0].url} alt=""/>
                </div>
                <div className='hotelCard-header-title'>
                    <h2 className='hotelCard-header-title-text'>
                        {hotelState.name}
                    </h2>
                    <h3 className='hotelCard-header-title-address1'>
                        {hotelState.address1}
                    </h3>
                    <h3 className='hotelCard-header-title-address2'>
                        {hotelState.address2}
                    </h3>
                </div>
                <div className='hotelCard-header-rating'>
                    {hotelState.starRating}
                </div>
                
            </div>
            <div className='hotelCard-rooms'>
                {
                    data?.data.rooms instanceof Array ?
                    data?.data.rooms.map((element:any) => {
                        return <div className='hotelCard-rooms-room'>
                            <div className='hotelCard-rooms-room-name'>
                                <h2>{element.name}</h2>
                                <h3>Adults: {element.occupancy.maxAdults}</h3>
                                <h3>Children: {element.occupancy.maxChildren}</h3>
                            </div>
                            <div className='hotelCard-rooms-room-description'>
                                {element.longDescription}
                            </div>
                        </div>
                    })
                    :
                    null
                }
            </div>
        </div>
    )
}

export default HotelCard
