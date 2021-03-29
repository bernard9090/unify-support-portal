import * as TYPES from "../types"
import {AuthAdmin} from "../../types/@types";

const initialState = {
    senderIds: [],
    selectedSenderId:{}
};

interface Payload {
    type:string,
    data:any
}


const dashboardReducer = (state = initialState, payload:Payload) => {

switch (payload.type) {
  case TYPES.SET_SENDER_IDS:
    return  {
      ...state,
      senderIds:payload.data
    }


  case TYPES.SET_SELECTED_SENDER_ID  :
    return {
      ...state,
      selectedSenderId:payload.data
    }
    
    

  default:
    return state;
}
}

export default dashboardReducer