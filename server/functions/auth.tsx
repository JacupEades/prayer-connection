import axios from "axios";

export const currentUser = async (authtoken: any) => {
	return await axios.post(
		`${process.env.REACT_APP_API}/current-user`,
		{},
		{
			headers: {
				authtoken,
			},
		}
	);
};
