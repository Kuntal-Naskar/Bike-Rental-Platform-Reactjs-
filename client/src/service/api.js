/*import axios from "axios";

const URL = 'http://localhost:8000'


export const addUser = async(data) =>{
    try{
        return await axios.post('/api/formB', data)
    }catch(error){
        console.log("Error While Calling API ", error)

    }   
}
*/
import axios from "axios";

const URL = 'http://localhost:8000';

// Function to add user data for FormA
export const addUserFormA = async (data) => {
  try {
    return await axios.post(`${URL}/addFormA`, data); // Endpoint for FormA
  } catch (error) {
    console.log("Error While Calling API for Form A:", error);
  }
};

// Function to add user data for FormB
export const addUserFormB = async (data) => {
  try {
    return await axios.post(`${URL}/addFormB`, data); // Endpoint for FormB
  } catch (error) {
    console.log("Error While Calling API for Form B:", error);
  }
};
 