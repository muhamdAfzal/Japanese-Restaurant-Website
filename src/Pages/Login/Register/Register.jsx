import { useContext, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState([]);


    const registerHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
        .then(result => {
            const newUser = result.user;
            // console.log(newUser);
            setError('');
            e.target.reset();

        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

    return (
        <div className='container d-flex justify-content-center mt-5'>
            <Col md={6} className="">
            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email address" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" required/>
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2'>
                    Submit
                </Button>
                <br />
                <Form.Text>Already have an Account? <Link to="/login">Log In</Link></Form.Text>
                <p className='text-danger'>{error}</p>
            </Form>
            </Col>
        </div>
    );
};

export default Register;