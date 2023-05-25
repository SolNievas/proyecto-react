import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

const Carousel = () => {
    return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
    )
}

export default Carousel;