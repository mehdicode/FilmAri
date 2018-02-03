// Include the Axios library for HTTP requests
import axios from "axios";


// Helper Functions
const helpers = {

    //SignUp New User
    regNewuser(email, password) {
        const newUser = { email, password };
        return axios.post("/api/register", newUser)
            .then((response) => {
                console.log(response);
                return response;
            });
    },

    //User LogIn
    userLogin(email, password) {
        const loggingUser = { email, password };
        return axios.post("/api/login", loggingUser)
            .then((response) => {
                console.log(response);
                return response;
            });
    }

};


// We export the helpers function
export default helpers;