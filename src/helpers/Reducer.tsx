export const initialState = {
    rating: 1,
    adults: 0,
    children: 0
};

export const ACTIONS = {
    RATING: 'rating',
    ADULTS: 'adults',
    CHILDREN: 'children'
}

interface reducerStates {
    rating: number,
    adults: number,
    children: number
}

interface reducerActions {
    type: string,
    rating: number,
    adults: number,
    children: number
}

const reducer = (state:reducerStates, action:reducerActions) => {
    switch(action.type){
        case ACTIONS.RATING: {
            return {
                ...state,
                rating: action.rating,
            }
        }
        case ACTIONS.ADULTS: {
            return {
                ...state,
                adults: action.adults,
            }
        }
        case ACTIONS.CHILDREN: {
            return {
                ...state,
                children: action.children,
            }
        }
        default:
            return state;
    }
}

export default reducer;