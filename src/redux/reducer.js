const initialState = {
  timeVideoPlayed: 0,
  videoPlay: false,
  showImage1: false,
  showImage2: false,
  showImage3: false,
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

  if(action.type ===  "SHOW_IMAGE_ONE"){
    return{
      ...state,
      showImage1: action.payload.currentState
    }
  }

  if(action.type ===  "SHOW_IMAGE_TWO"){
    return{
      ...state,
      showImage2: action.payload.currentState
    }
  }


  return state;
};

export default appReducer;
