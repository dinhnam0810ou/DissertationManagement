import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import API, { authAPI, endpoints } from "../configs/API";
import cookie from "react-cookies";
import { Navigate } from "react-router-dom";
import { MyUserContext } from "../configs/MyContext";

const Login = () => {
  const [username, setUsername] = useState(null);
  // [(password, setPassword)] = useState(null);
  return (
    <div>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white">
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h1 class="text-white-50 mb-5">Login</h1>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="username">
                      Email
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      class="form-control form-control-lg"
                    />
                    <h1>hello{username}</h1>
                  </div>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p class="mb-0">
                    Don't have an account?{" "}
                    <a href="/register" class="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
