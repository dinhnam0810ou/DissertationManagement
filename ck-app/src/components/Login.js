import { useState } from "react"
const Login = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = () => {
    console.log(email)
  }
  return (
    <div>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" >
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5" onChange={(e) => { setEmail(e.target.value) }} value={email}> 
                  <h2 class="text-white-50 mb-5">Login</h2>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="username">Email</label>
                    <input type="username" id="username" class="form-control form-control-lg" />
                  </div>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" id="password" class="form-control form-control-lg" />
                  </div>
                  <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                  <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Login</button>
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