import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const {loginInfo,upadateLoginInfo , loginUser, loginError, isLoginLoading} = useContext(AuthContext);

    const upadateFunction = (event) => {
        upadateLoginInfo({...loginInfo,[event.target.name]: event.target.value})
    };

    return (
        <Form onSubmit={loginUser}>
            <Row  style={{height:"100vh",justifyContent:"center",padding:"10%"}}>
                <Col xs="5">
                    <Stack gap="3">
                        <h2>Login</h2>
                        
                        <Form.Control type="text" name="email" placeholder="Enter your Email" onChange={upadateFunction}/>
                        <Form.Control type="text" name="password" placeholder="Enter a Password" onChange={upadateFunction}/>

                        <Button variant="primary" type="submit">
                            {isLoginLoading ? "Logging in..." : "Login"}
                            
                        </Button>
                        {
                            loginError?.error 
                            && 
                            <Alert variant="danger">
                                <p>{loginError?.message}</p>
                            </Alert>
                        }
                    </Stack>
                </Col>
            </Row>
        </Form>
    );
}

export default Login;
