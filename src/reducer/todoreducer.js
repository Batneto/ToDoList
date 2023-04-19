
export const todoReducer = (state = [], action) => {

    switch (action.type) {


        case ' add todo':
                
            return [action.payload, ...state]
            

        case 'delete todo':

            const newState = state.filter(state => state.id != action.payload)

            return newState


        case 'toggle todo':
        
        
        const nuevoState = state.map((item) => {
                
            if (item.id === action.payload) {
              
               item.done = !item.done 

            }
            return item

          });
         
          return nuevoState;


        default:

            return state

    }

}