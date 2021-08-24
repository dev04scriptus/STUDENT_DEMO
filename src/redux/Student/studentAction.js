export const STUDENT_REQUEST = "STUDENT_REQUEST";
export const STUDENT_DELETE_REQUEST = "STUDENT_DELETE_REQUEST";
export const STUDENT_UPDATE_REQUEST = "STUDENT_UPDATE_REQUEST";
export const STUDENT_SUCCESS = "STUDENT_SUCCESS";
export const STUDENT_DELETE_SUCCESS = "STUDENT_DELETE_SUCCESS";
export const STUDENT_UPDATE_SUCCESS = "STUDENT_UPDATE_SUCCESS";
export const STUDENT_DELETE_FAILURE = "STUDENT_DELETE_FAILURE";
export const STUDENT_UPDATE_FAILURE = "STUDENT_UPDATE_FAILURE";
export const STUDENT_FAILURE = "STUDENT_FAILURE";

export const studentRequest = () => {
  return {
    type: STUDENT_REQUEST,
  };
};

export const studentRequestDelete = () => {
  return {
    type: STUDENT_DELETE_REQUEST,
  };
};

export const studentRequestUpdate = () => {
  return {
    type: STUDENT_UPDATE_REQUEST,
  };
};

export const studentSuccess = (student) => {
  return {
    type: STUDENT_SUCCESS,
    payload: student,
  };
};

export const studentSuccessDelete = (id) => {
  return {
    type: STUDENT_DELETE_SUCCESS,
    payload: id,
  };
};

export const studentSuccessUpdate = (data) => {
  return {
    type: STUDENT_UPDATE_SUCCESS,
    payload: data,
  };
};


export const studentFailure = (error) => {
  return {
    type: STUDENT_FAILURE,
    payload: error,
  };
};

export const studentFailureDelete = (error) => {
  return {
    type: STUDENT_DELETE_FAILURE,
    payload: error,
  };
};

export const studentFailureUpdate = (error) => {
  return {
    type: STUDENT_UPDATE_FAILURE,
    payload: error,
  };
};

export const studentDataSet = (data) => {
  return (dispatch) => {
    dispatch(studentRequest(STUDENT_REQUEST))
    if(data){
      dispatch(studentSuccess(data))
    }else{
      dispatch(studentFailure("no record found"))
    }
  }
}

export const deleteStudentData = (data) => {
  return (dispatch) => {
    dispatch(studentRequestDelete(STUDENT_DELETE_REQUEST))
    if(data.id >= 0){
      dispatch(studentSuccessDelete(data.id));    
    }else{
      dispatch(studentFailureDelete("record was not delete"))
    }
  }
}

export const updateStudentRecord = (data) => {
  return (dispatch) => {
    dispatch(studentRequestUpdate(STUDENT_UPDATE_REQUEST))
    if(data) {
      dispatch(studentSuccessUpdate(data));
    }else {
      dispatch(studentFailureUpdate("record not update"))
    }
  }
}