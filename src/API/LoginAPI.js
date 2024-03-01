// import AxiosInstance from "../config/AxiosInstance"


// export const loginUser = async (LoginUserData) => {
//     try {
//       if (LoginUserData.email && LoginUserData.password) {
//         const response = await AxiosInstance.post('/auth/login', LoginUserData);
//         console.log('Login successful:', response.data);
//         return response.data;
//       } else {
//         // Handle the case where email or password is missing
//         throw new Error('Email and password are required.');
//       }
//     } catch (error) {
//         console.log(error);

//       console.error('Login error:', error.response ? error.response.data : error.message);
//       return{error:"Invalid User credentials"};

//       // Handle the error more appropriately based on your requirements
//     //   return null; // or throw error; depending on your desired behavior
//     }
//   };    
