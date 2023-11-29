import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../../firebase/firebase.config';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();

    const { signIn } = useContext(AuthContext);

    const loginHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const googleHandler = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const gitHandler = () => {
        signInWithPopup(auth, gitProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container d-flex justify-content-center my-5'>
            <Col md={6} className="">
            <Form onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email address" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2'>
                    Submit
                </Button>
                <br />
                <Form.Text>Do not have an Account? <Link to="/register">Register</Link></Form.Text>
            </Form>
            <Button variant="outline-warning" className='bottom-0 mt-4' onClick={googleHandler}>Sign In by Google</Button>
            <br />
            <Button variant="outline-dark" className='bottom-0 mt-2' onClick={gitHandler}>Sign In by GitHub</Button>
            </Col>
        </div>
    );
};

export default Login;