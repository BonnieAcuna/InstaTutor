import axios from "axios";

export default {
    getTutors: function(){
        return axios.get("/api/tutors/random")
    },
    getTutor: function(id){
        return axios.get("/api/tutors/" + id)
    },
    createTutor: function(tutorData){
        return axios.post("/api/tutors", tutorData)
    },
    getSearchedTutors: function(query){
        console.log(query);
        return axios.get("/api/tutors/search/" + query)
    },
    getUser: function(id){
        return axios.get("/api/users/" + id)
    },
    createUser: function(userData){
        return axios.post("/api/users", userData)
    },
    logIn: function(loginData){
        return axios.post("/login", loginData)
    }
}