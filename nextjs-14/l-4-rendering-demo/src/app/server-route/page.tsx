import ImageSlider from "@/components/imageSlider"
import ServerSideFunction from "@/utils/server-utils"

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ServerRoutePage = () => {

    console.log("Server Route Rendered")

    const result = ServerSideFunction()
    
    // const settings = {
    //     dots: true,
    // };

  return (
    <>
        <h1>Server Route Page</h1>
        <p>{ result }</p>
        <ImageSlider />

        {/* <div className="image-slider-container">
            <Slider {...settings}>
                <div>
                    <img src="http://picsum.photos/400/200" />
                </div>
                <div>
                    <img src="http://picsum.photos/400/200" />
                </div>
                <div>
                    <img src="http://picsum.photos/400/200" />
                </div>
                <div>
                    <img src="http://picsum.photos/400/200" />
                </div>
            </Slider>
        </div> */}
    </>
  )
}

export default ServerRoutePage