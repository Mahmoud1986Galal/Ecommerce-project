import React from 'react'
import Slider from '../../component/Home/Slider';
import HomeCategory from '../../component/Home/HomeCategory';
import CardProductContainer from '../../component/Products/CardProductContainer';
import DiscountSection from '../../component/Home/DiscountSection';
import laptops from '../../images/laptops.png';
import clothes from '../../images/clothe.png'
import BrandFeatured from '../../component/Brand/BrandFeatured';


const HomePage = () => {
    return (
        <div className=' text-center font'>
            <Slider />
            <HomeCategory />
            <CardProductContainer img={laptops} title='الاكثر مبيعا' btntitle='المزيد' pathtext='/allproducts' />
            <DiscountSection />
            <CardProductContainer img={clothes} title='احدث الازياء' btntitle='المزيد' pathtext='/allproducts' />
            <BrandFeatured title='أشهر الماركات' btntitle='المزيد' />
        </div>
    )
}

export default HomePage;