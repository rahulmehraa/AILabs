import {
    CURRENTROUTE,
    ADDTASK,
    TASKARRAY,
    SHOWMODAL,
    SHOWEDITINPUT
  } from "../types/types.js";
  const initialState = {
    currentRoute: null,
    name:null,
    addTask:null,
    taskArray:[],
    showModal:false,
    showEditInput:false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {

      case CURRENTROUTE:
        return { ...state, currentRoute: action.payload };
        case ADDTASK:
          return {...state , addTask:action.payload};
          case TASKARRAY:
          return {...state , taskArray:action.payload};
          case SHOWMODAL:
          return {...state , showModal:action.payload};
          case SHOWEDITINPUT:
            return {...state , showEditInput:action.payload}
        return initialState;
    }
    return state;
  };
  export default reducer;
  