import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../images/slider1.png';
import slider4 from '../../images/slider4.png';
import prod1 from '../../images/prod1.png';
import prod3 from '../../images/prod3.png';
import prod4 from '../../images/prod4.png';
import { useState } from 'react';
function Slider() {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='slider-background' interval={2000}>
                <div className='d-flex flex-row justify-content-around align-items-center h-25'>
                    <img src={slider1} alt='slider1' className='slider-img' />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير</h3>
                        <p className='slider-text'>خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slider-background2' interval={2000}>
                <div className='d-flex flex-row justify-content-around align-items-center'>
                    <img src={slider4} alt='slider4' className='slider-img' />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير</h3>
                        <p className='slider-text'>خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slider-background3' interval={2000}>
                <div className='d-flex flex-row justify-content-around align-items-center'>
                    <img src={prod1} alt='prod1' className='slider-img' />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير</h3>
                        <p className='slider-text'>خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slider-background4' interval={2000}>
                <div className='d-flex flex-row justify-content-around align-items-center'>
                    <img src={prod3} alt='prod3' className='slider-img' />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير</h3>
                        <p className='slider-text'>خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slider-background4' interval={2000}>
                <div className='d-flex flex-row justify-content-around align-items-center'>
                    <img src={prod4} alt='prod4' className='slider-img' />
                    <div>
                        <h3 className='slider-title'>هناك خصم كبير</h3>
                        <p className='slider-text'>خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;