import { createUseStyles } from "react-jss"
import { Swiper } from "swiper/react"
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
import 'swiper/css'
import 'swiper/css/navigation'


const array_of_image = [{ image: chips, avatar: avatar1 }, { image: mountain, avatar: avatar2 }, { image: green, avatar: avatar3 }, { image: moon, avatar: avatar4 }, { image: text, avatar: avatar5 }, { image: coke, avatar: avatar6 }, { image: fruits, avatar: avatar7 }]

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex'
    }
})

export const StorySlide = () => {
    const classes = useStyles()
    return (
        //modules={[Navigation]}
        <Swiper spaceBetween={50} slidesPerView={3} navigation={true}>
            <div className={classes.wrapper}>
                {array_of_image.map((elem, key) => {
                    return <Story key={key} image={elem.image} profileImage={elem.avatar} />
                })}
            </div>
        </Swiper>



    )
}
