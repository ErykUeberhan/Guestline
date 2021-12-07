import React, { useEffect, useState } from 'react'
import GetRooms from '../../hooks/GetRooms';
import './HotelCard.sass'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useStateValue } from '../../StateProvider';

const HotelCard: React.FC<any> = (hotel: any) => {
    const [{rating, adults, children}]:any = useStateValue();
    const [rooms, setRooms] = useState<boolean>(false)
    const [image, setImage] = useState<number>(0);
    const [hotelState] = useState(hotel.hotel);
    const { isLoading, error , data } = GetRooms(hotelState.id);

    useEffect(() => {
        if(data?.data.rooms instanceof Array)
        data?.data.rooms.forEach((e)=>{
            if(adults <= e.occupancy.maxAdults && children <= e.occupancy.maxChildren && rating <= hotelState.starRating) return setRooms(true);
        })
        return () => {
            setRooms(false);
        }
    }, [rating, adults, children, data?.data.rooms, hotelState.starRating])
        console.log(rating + " : "+ hotelState.starRating)
   

    if(error instanceof Error) return <h1>Error: {error?.message}, please reload page.</h1>;
    if(isLoading) return <h1>Loading ...</h1>;
    
    
    return rooms ? (
        <div className='hotelCard'>
            <div className='hotelCard-header'>
                <div className='hotelCard-header-images'>
                    <MdOutlineArrowBackIos className='hotelCard-header-images-leftArrow' onClick={()=>{image > 0 ? setImage(image-1) : setImage(hotelState.images.length-1)}}/>
                    <img src={hotelState.images[image].url} alt={hotelState.images[image].alt}/>
                    <MdOutlineArrowForwardIos className='hotelCard-header-images-rightArrow' onClick={()=>{image < hotelState.images.length-1 ? setImage(image+1) : setImage(0)}}/>
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
                    {
                    Array(5).fill(0).map((e, i):any => (
                        i < parseInt(hotelState.starRating) ? <AiFillStar/> : <AiOutlineStar/>
                    ))}
                </div>
                
            </div>
            <div className='hotelCard-rooms'>
                {
                    data?.data.rooms instanceof Array ?
                    data?.data.rooms.map((element, index:any) => { return adults <= element.occupancy.maxAdults && children <= element.occupancy.maxChildren ?
                         <div className='hotelCard-rooms-room'>
                            <div className='hotelCard-rooms-room-name'>
                                <h2><b>{element.name}</b></h2>
                                <h3>Adults: {element.occupancy.maxAdults}</h3>
                                <h3>Children: {element.occupancy.maxChildren}</h3>
                            </div>
                            <div className='hotelCard-rooms-room-description'>
                                {element.longDescription}
                            </div>
                        </div>
                        :
                        null
                    })
                    :
                    null
                }
            </div>
        </div>
    )
    :
    null
}

export default HotelCard
