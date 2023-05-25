import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

const Carousel = () => {
    return (
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
    )
}

export default Carousel;