import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/auth/register", userData)
    },
    getCurrentUser: function(){
        return axios.get("/api/allUsers/currentUser", {
            headers: {
                Authorization: localStorage.getItem('jwtToken')
            }
        })
    },
    getTutors: function(){
        // console.log(localStorage.getItem('jwtToken'))
        return axios.get("/api/allUsers/random", {
            headers: {
                Authorization: localStorage.getItem('jwtToken')
            }
        })
    },
    getTutor: function(id){
        return axios.get("/api/allUsers/" + id, {
            headers: {
                Authorization: localStorage.getItem('jwtToken')
            }
        })
    },
    getSearchedTutors: function(query){
        console.log(query);
        return axios.get("/api/allUsers/search/" + query)
    }
}