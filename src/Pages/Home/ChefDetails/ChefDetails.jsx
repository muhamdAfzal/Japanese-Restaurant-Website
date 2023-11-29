import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {

    const dynamic = useParams();
    // console.log(dynamic);

    const chefData = useLoaderData();

    const chefs = chefData.find(chef => chef.id === dynamic.id);

    const [chef, setChef] = useState([]);

    useEffect(() => {
        setChef(chefs)
    }, [chefs]);
    console.log(chef);

    const [isActive, setIsActive] = useState(false);

    const notify = () => toast(`Added to Your Favorite List`)

    const favorite = () => {
        notify();
        setIsActive(true);
    }

    const {image, name, experience, like, bio, recipe_name_1, recipe_name_2, recipe_name_3, ingredients_1, ingredients_2, ingredients_3, cook_1, cook_2, cook_3, rating_1, rating_2, rating_3} = chef;

    return (
        <div>

            {/* Chef Bio */}
            <div className='container d-flex justify-content-between my-5'>
                <div className='me-5'>
                    <h1 className='fw-bold text-danger'>{name}</h1>
                    <h2 className=''>Cooking for more than <span className='text-decoration-underline'>{experience} Years!!!</span></h2>
                    <h3>Recipes are loved by more than <span className='text-decoration-underline'>{like} People!!</span></h3>
                    <hr className='my-4'/>
                    <p>{bio}</p>
                </div>
                <div>
                    <img src={image} alt="Chefs Picture" />
                </div>
            </div>

            {/* Chefs Recipe */}
            <div className='container text-center'>
                <h2 className='pt-4'>Some of {name}s Top Class Dishes!!!</h2>
                <Row>
                    <Col md={4}>
                        <Card className='my-5'>
                            <Card.Body>
                                <h3>{recipe_name_1}</h3>
                                <hr />
                                <Card.Text>
                                 <h5>Ingredients:</h5><p>{ingredients_1}</p>
                                 <h5>Cooking Method:</h5>
                                 <p>{cook_1}</p>
                                 <h5>Rating: {rating_1}/5</h5>
                                </Card.Text>
                                <Link><Button variant="outline-warning" className={isActive ? 'bottom-0 mb-1 disabled' : 'bottom-0 mb-1'} onClick={favorite}>Add to Favorite</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='my-5'>
                            <Card.Body>
                                <h3>{recipe_name_2}</h3>
                                <hr />
                                <Card.Text>
                                 <h5>Ingredients:</h5><p>{ingredients_2}</p>
                                 <h5>Cooking Method:</h5>
                                 <p>{cook_2}</p>
                                 <h5>Rating: {rating_2}/5</h5>
                                </Card.Text>
                                <Link><Button variant="outline-warning" className={isActive ? 'bottom-0 mb-1 disabled' : 'bottom-0 mb-1'} onClick={favorite}>Add to Favorite</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='my-5'>
                            <Card.Body>
                                <h3>{recipe_name_3}</h3>
                                <hr />
                                <Card.Text>
                                 <h5>Ingredients:</h5><p>{ingredients_3}</p>
                                 <h5>Cooking Method:</h5>
                                 <p>{cook_3}</p>
                                 <h5>Rating: {rating_3}/5</h5>
                                </Card.Text>
                                <Link><Button variant="outline-warning" className={isActive ? 'bottom-0 mb-1 disabled' : 'bottom-0 mb-1'} onClick={favorite}>Add to Favorite</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Toaster />
        </div>
    );
};

export default ChefDetails;