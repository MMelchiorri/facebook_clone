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


const array_of_image = [{ image: chips, avatar: avatar1 }, { image: mountain, avatar: avatar2 }, { image: green, avatar: avatar3 }, { image: moon, avatar: avatar4 }, { image: text, avatar: avatar5 }, { image: coke, avatar: avatar6 }, { image: fruits, avatar: avatar7 }]
register();

export const StorySlide = () => {
    const swiperElRef = useRef(null);
    const swiperSlideRef = useRef(null)

    useEffect(() => {
        register();

        /*const shadowRoot = swiperElRef.current.shadowRoot
        if (shadowRoot) {
            const button_prev = shadowRoot.querySelector('[part="button-prev"]');
            const button_next = shadowRoot.querySelector('[part="button-next"]');
            const wrapper = shadowRoot.querySelector('[part="wrapper"]');
            console.log(wrapper)
            if (button_prev && button_next && wrapper) {
                button_prev.style.backgroundColor = '#F2F2F2';
                button_next.style.backgroundColor = '#F2F2F2';
            }
        }*/


        // Object with parameters
        const params = {
            injectStyles: [
                `
                :host{
                    --swiper-navigation-color: #606266
                }
                `,
                `:host{
                    --swiper-navigation-size:30px
                }`,
            ],

        };

        const paramsSlide = {
            injectStyles: [
                `
                ::slotted(swiper-slide){
                   width: fit-content
                }
                `
            ],
        }

        // Assign it to swiper element
        Object.assign(swiperElRef.current, params);
        swiperElRef.current.initialize();
        Object.assign(swiperSlideRef.current, paramsSlide)
        swiperSlideRef.current.initialize()
        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view="2"
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