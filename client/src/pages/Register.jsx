import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const {registerInfo,upadateRegisterInfo , registerUser, registerError, isRegisterLoading} = useContext(AuthContext);

    const upadateFunction = (event) => {
        upadateRegisterInfo({...registerInfo,[event.target.name]: event.target.value})
    };
    return (
        <Form onSubmit={registerUser}>
            <Row  style={{height:"100vh",justifyContent:"center",padding:"10%"}}>
                <Col xs="5">
                    <Stack gap="3">
                        <h2>Register</h2>
                
                        <Form.Control type="text" placeholder="Enter your Name" name="name" onChange={upadateFunction}/>
                        <Form.Control type="text" placeholder="Enter your Email" name="email" onChange={upadateFunction}/>
                        <Form.Control type="text" placeholder="Enter  a Password" name="password" onChange={upadateFunction}/>

                        <Button variant="primary" type="submit">
                            {isRegisterLoading ? "Registering..." : "Register"}
                        </Button>
                        {
                            registerError?.error 
                            && 
                            <Alert variant="danger">
                                <p>{registerError?.message}</p>
                            </Alert>
                        }
                        
                    </Stack>
                </Col>
            </Row>
        </Form>
    );
}

export default Register;
