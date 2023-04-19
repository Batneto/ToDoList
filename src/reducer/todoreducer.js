
export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case 'add todo':
                
            return [action.payload, ...state]
            

        case 'delete todo':

            const newState = state.filter(state => state.id != action.payload)

            return newState 


        default:
            return state

    }

}