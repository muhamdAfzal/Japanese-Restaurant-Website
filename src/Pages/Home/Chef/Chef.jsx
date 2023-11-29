import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {

    const {id, image, name, experience, like, recipe} = chef;

    return (
        <Col md={4}>
        <Card className='mb-4'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {experience} Years of Experiences
                <br />
                Have {recipe} of his own recipes
                <br />
                {like} of people already liked {name}s cooking
                </Card.Text>
                <Link to={`/chef/${id}`}><Button variant="primary" className='bottom-0 mb-1'>View Recipe</Button></Link>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Chef;