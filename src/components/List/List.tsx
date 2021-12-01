import React from 'react'
import GetHotels from '../../hooks/GetHotels'

function List() {
    const { isLoading, error , data } = GetHotels();
    if(error instanceof Error) return <h1>Error: {error?.message}, please reload page.</h1>;
    if(isLoading) return <h1>Loading ...</h1>;
    console.log(data);
    return (
        <div className='list'>
            
        </div>
    )
}

export default List
