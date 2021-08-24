import {
   STUDENT_REQUEST,
   STUDENT_SUCCESS,
   STUDENT_DELETE_REQUEST,
   STUDENT_DELETE_SUCCESS,
   STUDENT_UPDATE_SUCCESS,
   } from "./studentAction";

const initialState = {
  data:[],
  loading:false
};

export const studentData = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_REQUEST:
      return {
        ...state,
        loading:true
      };
    case STUDENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading:false,
      };
    case STUDENT_DELETE_REQUEST:
      return {
        ...state,
        loading:true,
      }
    case STUDENT_DELETE_SUCCESS:
      state = {...state,loading:false}
      state.data.splice(action.payload, 1)
      return state;
    case STUDENT_UPDATE_SUCCESS:
      state = {...state,loading:false}
      const objectIndex = action.payload.id
      state.data[objectIndex] = {
        ...state.data[objectIndex],
        address:action.payload.data.address,
        branchName:action.payload.data.branchName,
        collageName:action.payload.data.collageName,
        dateOfBirth:action.payload.data.dateOfBirth,
        mobileNumber:action.payload.data.mobileNumber,
        name:action.payload.data.name,
      }
      return state
    default:
      return state;
  }
};
