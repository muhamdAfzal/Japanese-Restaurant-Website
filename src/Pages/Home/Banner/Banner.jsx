import { Carousel } from 'react-bootstrap';

import Slide_01 from '../../../assets/Slide-01.jpg';
import Slide_02 from '../../../assets/Slide-02.jpg';
import Slide_03 from '../../../assets/Slide-03.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide_01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='fs-1 fw-bold carousel-caption mb-4'>Amazing Japanese Cuisine</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide_02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className='fs-1 fw-bold carousel-caption mb-4'>Top Class Japanese Chef</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide_03}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className='fs-1 fw-bold carousel-caption mb-4'>Taste The Japanese Culture</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;