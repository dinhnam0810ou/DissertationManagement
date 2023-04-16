import { Button, Form, InputGroup } from "react-bootstrap"



const Login = () => {
    return (
        <>
            <h1 className="text-center text-info">ĐĂNG NHẬP </h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
                <Button variant="primary" type="submit">Đăng nhập</Button>
            </Form.Group>
        </>
    )
}

export default Login