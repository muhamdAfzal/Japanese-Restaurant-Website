import dish_01 from '../../../assets/dish-1.jpg'
import dish_02 from '../../../assets/dish-2.jpg'
import dish_03 from '../../../assets/dish-3.jpg'

const Demo = () => {
    return (
        <div className='d-flex justify-content-center text-center mt-5'>
            <div className='mt-5 py-5 pe-3'>
                <img src={dish_01} alt="" className='d-block w-100'/>
                <p className='fs-5 fw-medium mt-3'>FRESH FOOD</p>
            </div>
            <div className='p-2'>
                <img src={dish_02} alt="" className='d-block w-100'/>
                <p className='fs-5 fw-medium mt-3'>QUALITY DISH</p>
            </div>
            <div className='mt-5 py-5 ps-3'>
                <img src={dish_03} alt="" className='d-block w-100'/>
                <p className='fs-5 fw-medium mt-3'>SELECTED MEAT</p>
            </div>
        </div>
    );
};

export default Demo;