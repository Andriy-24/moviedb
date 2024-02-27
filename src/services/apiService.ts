import axios from "axios";
import {baseURL} from "../constants";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request =>{
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWMxOTc1ODNiNDk3MjMwMjU5YTA2NjFhZTA3YzIzNSIsInN1YiI6IjY1ZGI0Zjk1YWUyODExMDE3YzRjZDM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbID85szIsYKSZy6GwJYQZ6D6G1r5kAdJApVJASAmK0'
    return request
})

export {
    apiService
}