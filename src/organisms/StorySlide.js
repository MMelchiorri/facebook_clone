import { createUseStyles } from "react-jss"
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import chips from '../assets/img/chips.svg'
import mountain from '../assets/img/mountain.svg'
import green from '../assets/img/green.svg'
import moon from '../assets/img/moon.svg'
import text from '../assets/img/text.svg'
import coke from '../assets/img/coke.svg'
import fruits from '../assets/img/fruits.svg'
import Photo from '../assets/img/profile.jpg'
import { Story } from "../molecules/Story"
const array_of_image = [{ image: chips }, { image: mountain }, { image: green }, { image: moon }, { image: text }, { image: coke }, { image: fruits }]

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex'
    }
})

export const StorySlide = () => {
    const classes = useStyles()
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={3}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className={classes.wrapper}>
                {array_of_image.map((elem, key) => {
                    return <Story key={key} image={elem.image} profileImage={Photo} />
                })}

            </div>
        </Swiper >
    )
}
