import { useState, useContext, } from "react"
import { useDispatch } from "react-redux"
import API, { authAPI, endpoints } from "../configs/API"
import cookie from "react-cookies"
import { Navigate } from "react-router-dom"
import { MyUserContext } from "../configs/MyContext"

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  })
  const setUser = (userdata) => { 
    return {
      "type": "login", 
      "payload": userdata,
    }
  }
  let dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authAPI.post("/o/token/", {
        grant_type: "password",
        username: login.username,
        password: login.password,
        client_id: "Mpi7g2FO9hj1wnDj6FeimMuhgkqyM5n8aRowGVaG",
        client_secret: "VP71UVJKOVi0wpp2sjsy6Sv9BEKciq02cMvJMG6qN807cFdL4leP8udyZ6Lx81z7iybz4oUBTwQohSI66C7VWHByxqVaEGIjzV52biwh5aixg00PkmUaAGz69u5Lz2Mq",
      });
      authAPI.defaults.headers["Authorization"] =
        "Bearer " + response.data.access_token;
      const userResponse = await authAPI.get("/users/current-user/");
      dispatch(setUser(userResponse.data));
      cookie.set(userResponse.data);
    } catch (error) {
      console.log(error);
    }
  };


return (
  <div>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" >
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5" >
                <h1 class="text-white-50 mb-5">Login</h1>
                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="username">Email</label>
                  <input type="username" id="username" class="form-control form-control-lg" />
                </div>
                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="password">Password</label>
                  <input type="password" id="password" class="form-control form-control-lg" />
                </div>
                <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <button class="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>
              </div>
              <div>
                <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Login