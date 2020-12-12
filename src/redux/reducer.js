const initialState = {
  timeVideoPlayed: 0,
  videoPlay: false
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


  return state;
};

export default appReducer;
