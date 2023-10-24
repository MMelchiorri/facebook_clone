import avatar1 from '../assets/img/1.svg'
import avatar2 from '../assets/img/2.svg'
import avatar3 from '../assets/img/3.svg'
import avatar4 from '../assets/img/4.svg'
import avatar5 from '../assets/img/5.svg'
import avatar6 from '../assets/img/6.svg'
import avatar7 from '../assets/img/7.svg'
import chips from '../assets/img/chips.svg'
import mountain from '../assets/img/mountain.svg'
import green from '../assets/img/green.svg'
import moon from '../assets/img/moon.svg'
import text from '../assets/img/text.svg'
import coke from '../assets/img/coke.svg'
import fruits from '../assets/img/fruits.svg'
import { Story } from "../molecules/Story"
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react'


const array_of_image = [
    { image: chips, avatar: avatar1 },
    { image: mountain, avatar: avatar2 },
    { image: green, avatar: avatar3 },
    { image: moon, avatar: avatar4 },
    { image: text, avatar: avatar5 },
    { image: coke, avatar: avatar6 },
    { image: fruits, avatar: avatar7 }]
register();

export const StorySlide = () => {
    const swiperElRef = useRef(null);
    const swiperSlideRef = useRef(null)

    useEffect(() => {
        // Object with parameters
        const swiperParams = {
            slidesPerView: 3,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            on: {
                init() {
                    // ...
                },
            },
        };

        // Assign it to swiper element
        Object.assign(swiperElRef.current, swiperParams);
        swiperElRef.current.initialize();
        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            navigation="true"
            init='false'
        >
            {array_of_image.map((item, index) => {
                return <swiper-slide ref={swiperSlideRef} key={index} init='false'>
                    <Story image={item.image} profileImage={item.avatar} />
                </swiper-slide>
            })}
        </swiper-container>
    );
}