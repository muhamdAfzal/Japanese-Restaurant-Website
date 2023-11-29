import error from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='d-block d-flex justify-content-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;