import { createActions } from 'redux-actions';
import http from '../../services/http'

const {
  getAllPlaceRequest,
  getAllPlaceSuccess,
  getAllPlaceFail,
} = createActions({
  GET_ALL_PLACE_REQUEST: () => { },
  GET_ALL_PLACE_SUCCESS: data => ({ data }),
  GET_ALL_PLACE_FAIL: error => ({ error }),
});

export const getAllPlace = () => async dispatch => {
  dispatch(getAllPlaceRequest());
  try {
    const data = await http.get(`https://travel-love.herokuapp.com/places`)
    dispatch(getAllPlaceSuccess(data.data));
  } catch (error) {
    dispatch(getAllPlaceFail(error));
  }
};

const { createNewPlaceRequest, createNewPlaceSuccess, createNewPlaceFail } = createActions({
  CREATE_NEW_PLACE_REQUEST: () => { },
  CREATE_NEW_PLACE_SUCCESS: data => data,
  CREATE_NEW_PLACE_FAIL: error => ({ error }),
});

export const createNewPlace = (Name, Country, URL_Image, Description) => async dispatch => {
  dispatch(createNewPlaceRequest());
  try {
    const data = await http.post(`https://travel-love.herokuapp.com/places`, {
      Name,
      Country,
      URL_Image,
      Description
    });
    dispatch(createNewPlaceSuccess(data));
    dispatch(getAllPlace);
  } catch (error) {
    dispatch(createNewPlaceFail(error));
  }
};


const { getPlaceRequest, getPlaceSuccess, getPlaceFail } = createActions({
  GET_PLACE_REQUEST: () => { },
  GET_PLACE_SUCCESS: data => data,
  GET_PLACE_FAIL: error => ({ error }),
});

export const getPlace = (_id) => async dispatch => {
  dispatch(getPlaceRequest());
  try {
    const data = await http.get(`https://travel-love.herokuapp.com/places/${_id}`)
    dispatch(getPlaceSuccess(data));
  } catch (error) {
    dispatch(getPlaceFail(error));
  }
};


const { updatePlaceRequest, updatePlaceSuccess, updatePlaceFail } = createActions({
  UPDATE_PLACE_REQUEST: () => { },
  UPDATE_PLACE_SUCCESS: data => data,
  UPDATE_PLACE_FAIL: error => ({ error }),
});

export const updatePlace = (_id,Name,Country,URL_Image,Description) => async dispatch => {
dispatch(updatePlaceRequest());
console.log("data Input",_id,Name,Country,URL_Image,Description)
try {
  const data = await http.put(`https://travel-love.herokuapp.com/places/${_id}`, {
        Name,
        Country,
        URL_Image,
        Description
    });
    dispatch(updatePlaceSuccess(data));
    dispatch(getAllPlace);
  } catch (error) {
    dispatch(updatePlaceFail(error));
  }
};

const { deletePlaceRequest, deletePlaceSuccess, deletePlaceFail } = createActions({
  DELETE_PLACE_REQUEST: () => { },
  DELETE_PLACE_SUCCESS: data => data,
  DELETE_PLACE_FAIL: error => ({ error }),
});

export const deletePlace = (_id) => async dispatch => {
  dispatch(deletePlaceRequest())
  try {
    const data = await http.delete(`https://travel-love.herokuapp.com/places/${_id}`);
    dispatch(deletePlaceSuccess(data));
    dispatch(getAllPlace);
  } catch (error) {
    dispatch(deletePlaceFail(error));
  }
};
