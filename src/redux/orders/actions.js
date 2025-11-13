import {
  ERROR_FETCHING_ORDERS,
  SET_DATE,
  SET_PAGE,
  START_FETCHING_ORDERS,
  SUCCESS_FETCHING_ORDERS,
} from "./constants";
import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import moment from "moment";
import { clearNotif } from "../notif/actions";
let debouncedFetchOrders = debounce(getData, 1000);

export const startFecthingOrders = () => {
  return {
    type: START_FETCHING_ORDERS,
  };
};

export const successFetchingOrders = ({ orders, pages }) => {
  return {
    type: SUCCESS_FETCHING_ORDERS,
    orders,
    pages,
  };
};

export const errorFecthingOrders = () => {
  return {
    type: ERROR_FETCHING_ORDERS,
  };
};

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    dispatch(startFecthingOrders());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let params = {
        page: getState().orders?.page || 1,
        limit: getState().orders?.limit || 10,
        startDate: moment(getState().orders?.date?.startDate).format(
          "YYYY-MM-DD"
        ),
        endDate: moment(getState().orders?.date?.endDate).format("YYYY-MM-DD"),
      };

      let res = await debouncedFetchOrders("/cms/orders", params);
      // console.log("API Response:", res.data); // <== Add this

      const _temp = [];
      res.data.data.order.forEach((res) => {
        const person = Array.isArray(res.personalDetail)
          ? res.personalDetail[0]
          : res.personalDetail;
        const event = res.historyEvent;

        _temp.push({
          name: `${person.firstName} ${person.lastName}`,
          email: person?.email || "-",
          title: event?.title || "-",
          date: event?.date || "-",
          orderDate: moment(res.date).format("DD-MM-YYYY, h:mm:s a"),
          venueName: event?.venueName || "-",
        });
      });
      // console.log("Mapped Orders:", _temp);

      dispatch(
        successFetchingOrders({
          orders: _temp,
          pages: res.data.data.pages,
        })
      );
    } catch (error) {
      dispatch(errorFecthingOrders());
    }
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};

export const setDate = (ranges) => {
  return {
    type: SET_DATE,
    ranges,
  };
};
