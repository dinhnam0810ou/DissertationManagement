import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import API, { endpoints } from "../configs/API";

export default function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // useEffect(() => {
  //   console.info("Test");
  // });
  const login = async (event) => {
    event.preventDefault();

    let res = await API.post(endpoints["login"], {
      client_id: "5HcSuIChW0oROQejYhtLsvsrHRSINvb9gsKsFKwy",
      client_secrect:
        "pbkdf2_sha256$390000$qwd5LvefQswjSXMBcLmeYa$uaC8c0lFTwzqrCPry26fycFOLlckMBKuMjIx5McAAG4=",
      username: username,
      password: password,
      grant_type: "password",
    });
    console.info(res.data.access_token);
    let accessToken = res.data.access_token;
  };
  return (
    <>
      <h1>Dang Nhap</h1>
      <Form onSubmit={login}>
        <LoginForm
          id="username"
          type="text"
          field={username}
          change={(event) => setUsername(event.target.value)}
        />
        <LoginForm
          id="password"
          type="password"
          field={password}
          change={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">OK</Button>
      </Form>
    </>
  );
}
class LoginForm extends React.Component {
  render() {
    return (
      <Form.Group className="mb-3" controlId={this.props.id}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          type={this.props.type}
          value={this.props.field}
          onChange={this.props.change}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    );
  }
}
{
  /* <div>
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
</div> */
}
