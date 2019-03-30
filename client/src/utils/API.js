import axios from "axios";

export default {
    getTutors: function(){
        return axios.get("/api/tutors")
    },
    getTutor: function(id){
        return axios.get("/api/tutors/" + id)
    },
    createTutor: function(tutorData){
        return axios.post("/api/tutors", tutorData)
    },
    getUser: function(id){
        return axios.get("/api/users/" + id)
    },
    createUser: function(userData){
        return axios.post("/api/users", userData)
    }
}