import axios from "axios";

export default {
    ////////////////DONE ////////////////////
    createUser: function(userData){
        return axios.post("/auth/register", userData)
    },
    ///////////////Done///////////////
    getTutors: function(){
        return axios.get("/api/allUsers/random")
    },
    //////Done///////////
    getTutor: function(id){
        return axios.get("/api/allUsers/" + id)
    },
    //////Used in Search.js //////////////////
    getSearchedTutors: function(query){
        console.log(query);
        return axios.get("/api/allUsers/search/" + query)
    }
}