"use client"
// import ServerSideFunction from "@/utils/server-utils"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';
// import './ImageSlider.css';

const ClientRoutePage = () => {

    console.log("Client Route Rendered")
    
    // const result = ServerSideFunction()
    const result = clientSideFunction()

    const theme = useTheme()

    const settings = {
        dots: true,
      };

  return (
    <>
        <h1 style={{
          color: theme.colors.primary
        }}>Client Route Page { result }</h1>
        <div className="image-slider-container">
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
    </div>
    </>
  )
}

export default ClientRoutePage