// import { createStore } from 'redux';


// function counterReducer(state = { value: 0, step: 1, max: Infinity }, action)
// {
//     switch (action.type)
//     {
//         case 'increment':
//             if (state.value < state.max)
//             {
//                 return { ...state, value: state.value + (state.step) <= state.max ? state.value + (state.step) : state.value }
//             } else
//             {
//                 return { ...state, value: state.value }
//             }

//         // case 'decrement':
//         //     return { ...state, value: state.value - (state.step) }
//         case 'decrement':
//             if (state.value > 0)
//             {
//                 return { ...state, value: state.value - state.step };
//             } else
//             {
//                 return { ...state, value: 0 };
//             };
//         case 'reset':
//             return { ...state, value: 0 };

//         case 'updateMax':
//             return { ...state, max: action.payload };

//         case 'changeStep':
//             return { ...state, step: action.payload }
//         default:
//             return state
//     }
// }

// let store = createStore(counterReducer)

// export default store

import { createStore } from "redux";

function reducerTodo(state = [], action)
{

    switch (action.type)
    {
        case "add":
            return state.concat({ todo: action.todo, isCompleted: false });;
        case "remove":
            return state.filter((elm, index) => index !== Number(action.id));
        case "toggle":
            return state.filter((elm, index) =>
            {
                if (index === Number(action.id))
                {
                    elm.isCompleted = action.isCompleted;
                }
                return elm;
            })
        default:
            return state;
    }
}

let store = createStore(reducerTodo);
export default store;
