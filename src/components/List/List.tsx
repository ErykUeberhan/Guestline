import React from 'react'
import GetHotels from '../../hooks/GetHotels'
import HotelCard from '../HotelCard/HotelCard';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './List.sass'
import { ACTIONS } from '../../helpers/Reducer';
import { useStateValue } from '../../StateProvider';

const List: React.FC = () => {
    const [{rating, adults, children}, dispatch]:any = useStateValue()
    const { isLoading, error , data } = GetHotels();
    if(error instanceof Error) return <h1>Error: {error?.message}, please reload page.</h1>;
    if(isLoading) return <h1>Loading ...</h1>;

    return (
        <div className='list'>
            <div className='list-filter'>
                <div className='list-filter-rating'>
                {
                    Array(5).fill(0).map((e, i):any => (
                        i+1 <= rating ? <AiFillStar key={i} onClick={()=>dispatch({ type: ACTIONS.RATING, payload: {rating: i+1}})}/> : <AiOutlineStar key={i} onClick={()=>dispatch({ type: ACTIONS.RATING, payload: {rating: i+1}})}/>
                ))
                }
                
                </div>
                <div className='list-filter-adults'>
                        <h4>Adults: </h4>
                        <span onClick={() => dispatch({ type: ACTIONS.ADULTS, payload: {adults: adults+1}})}>+</span>
                        <p>{adults}</p>
                        <span onClick={() => {adults > 0 ? dispatch({ type: ACTIONS.ADULTS, payload: {adults: adults-1}}) : null!}}>-</span>
                </div>
                <div className='list-filter-children'>
                        <h4>Children: </h4>
                        <span onClick={() => dispatch({ type: ACTIONS.CHILDREN, payload: {children: children+1}})}>+</span>
                        <p>{children}</p>
                        <span onClick={() => {children > 0 ? dispatch({ type: ACTIONS.CHILDREN, payload: {children: children-1}}) : null!}}>-</span>
                </div>
            
            </div>
            {
                data?.data instanceof Array ?
                data?.data?.map((element, i:any) => {
                    return <HotelCard key={i} hotel={element}/>
                })
                :
                null
            }
            
        </div>
    )
}

export default List