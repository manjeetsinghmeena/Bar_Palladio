function Carousel() {
    return (
        <div className="carousel">
            <div className="menu">FROM THE KITCHEN</div>
            <div className="carousel-content">
                <div className="carousel-item">
                    <img src="/menu1.jpg" alt="Food 1" className="menu1" />
                    <img src="/menu2.jpg" alt="Food 2" className="menu2" />
                    <img src="/menu3.jpg" alt="Food 3" className="menu3" />     
                    <img src="/menu4.jpg" alt="Food 4" className="menu4" />
                    <img src="/menu5.jpg" alt="Food 5" className="menu5" />
                </div>
            </div>
        </div>
    );
}
export default Carousel;