export const initialState = {
    rating: null,
    adults: 0,
    children: 0,
};

export const ACTIONS = {
    RATING: 'rating',
    ADULTS: 'adults',
    CHILDREN: 'children'
}

const reducer = (state:any, action:any) => {
    switch(action.type){
        case ACTIONS.RATING: {
            return {
                ...state,
                rating: action.payload.rating,
            }
        }
        case ACTIONS.ADULTS: {
            return {
                ...state,
                adults: action.payload.adults,
            }
        }
        case ACTIONS.CHILDREN: {
            return {
                ...state,
                children: action.payload.children,
            }
        }
        default:
            return state;
    }
}

export default reducer;