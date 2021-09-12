import React from 'react'

const Carousel = () => {
    return (
        <>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2016/03/30/05/41/music-1290087_1280.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp2673274.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.wallpapersafari.com/57/89/OYstuD.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel
