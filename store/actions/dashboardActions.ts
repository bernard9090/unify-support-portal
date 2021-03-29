import * as TYPES from "../types"

export const setSenderIDS = (ids:any) => ({
    type: TYPES.SET_SENDER_IDS,
    data:ids
})

export const setSelectedSenderID = (senderId:any) => ({
  type:TYPES.SET_SELECTED_SENDER_ID,
  data:senderId
})