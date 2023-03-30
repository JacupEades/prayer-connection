// import axios from "axios";
// import { prayerReducer } from "../reducers/userReducer";

// export const createCategory = async (category, authtoken) =>
// 	await axios.post(`${process.env.REACT_APP_API}/category`, category, {
// 		headers: { authtoken },
// 	});

// export const getCategories = async () =>
// 	await axios.get(`${process.env.REACT_APP_API}/categories`);

// export const sendPrayer = (message: any) => async (dispatch: any) => {
// 	try {
// 		dispatch({ type: SEND_PRAYER_REQUEST });

// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};

// 		const { data } = await axios.post("/api/prayer-request", message, config);

// 		dispatch({
// 			type: PRAYER_REQUEST_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error: any) {
// 		dispatch({
// 			type: PRAYER_REQUEST_FAIL,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };
