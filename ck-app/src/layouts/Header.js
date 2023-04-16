
import { Button, Container, Form, Nav, Navbar, } from "react-bootstrap"


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Trang Chủ</Nav.Link>
                            <Nav.Link href="#register">Đăng Ký</Nav.Link>
                            <Nav.Link href="#login">Đăng nhập</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search..."
                                className="me-2" aria-label="Search" />
                            <Button type="submit" variant="info">Tìm</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header