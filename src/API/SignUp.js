import AxiosInstance from "../config/AxiosInstance"
import { useEffect, useState } from "react";


// --------------------------------SignUpAPI--------------------------------
export const signUpUser = async (userData) => {
    try {
      const response = await AxiosInstance.post('/auth/signup', userData);
      console.log('Signup successful:', response.data);  
      return response.data;
    } catch (error) {
      console.error('Signup error:', error.response.data);
      throw error.response.data; // Handle error response appropriately
    }
  };

// -----------------------------------------------------------------------
  
const UserAPI = {

  useFetchUser: () => {

    const [singleUser, setsingleUser] = useState([]);


    useEffect(() => {
      fetchUser();
    }, []);

    const fetchUser = () => {
            AxiosInstance.get('admin/GetUser',)
        .then((response) => {
          debugger;
          console.log(response);
          setsingleUser(response.data);
          console.log(response.data, '----------response.data-----');
        })
        .catch((err) => {
          debugger;
          console.error(err);

          if (err.response.data.message === 'unauthorized user') {
            localStorage.clear();
            // navigate('/')
          }
        });
    }

    return { singleUser };
  },
};
export default UserAPI;
