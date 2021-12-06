import React, { useState } from 'react'
import GetHotels from '../../hooks/GetHotels'
import HotelCard from '../HotelCard/HotelCard';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './List.sass'

const List: React.FC = () => {
    const [stars, setStars] = useState<number>(0)
    const [adults, setAdults] = useState<number>(0)
    const [children, setChildren] = useState<number>(0)
    const { isLoading, error , data } = GetHotels();
    if(error instanceof Error) return <h1>Error: {error?.message}, please reload page.</h1>;
    if(isLoading) return <h1>Loading ...</h1>;

    return (
        <div className='list'>
            <div className='list-filter'>
                <div className='list-filter-rating'>
                {
                    Array(5).fill(0).map((e, i):any => (
                        i+1 <= stars ? <AiFillStar onClick={()=>setStars(i+1)}/> : <AiOutlineStar onClick={()=>setStars(i+1)}/>
                ))
                }
                
                </div>
                <div className='list-filter-adults'>
                        <h4>Adults: </h4>
                        <span onClick={() => setAdults(adults+1)}>+</span>
                        <p>{adults}</p>
                        <span onClick={() => {adults > 0 ? setAdults(adults-1) : null!}}>-</span>
                </div>
                <div className='list-filter-children'>
                        <h4>Children: </h4>
                        <span onClick={() => setChildren(children+1)}>+</span>
                        <p>{children}</p>
                        <span onClick={() => {children > 0 ? setChildren(children-1) : null!}}>-</span>
                </div>
            
            </div>
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




