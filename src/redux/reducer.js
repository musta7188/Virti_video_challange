const initialState = {
  timeVideoPlayed: 0,
  videoPlay: false,
  VideoTime: 0,
};

const appReducer = (state = initialState, action) => {
  
  if(action.type === "VIDEO_PLAY"){
    return{
      ...state,
      videoPlay: true,
      timeVideoPlayed: state.timeVideoPlayed+1
    }
  }

    if(action.type === "VIDEO_STOP"){
      return{
        ...state,
        videoPlay: false,
      }
  }

  if(action.type ===  "VIDEO_TIMESTAMP"){
    return{
      ...state,
      VideoTime: action.payload.currentState
    }
  }



  return state;
};

export default appReducer;
