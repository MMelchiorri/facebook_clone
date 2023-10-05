import { StoryImage } from "../atoms/StoryImage"
import { createUseStyles } from "react-jss"
import { SwiperSlide } from "swiper/react"

const useStyle = createUseStyles({
    wrapper: {
        width: 140,
        height: 250,

    }

})

export const Story = ({ image, profileImage }) => {

    const classes = useStyle()
    return (
        <SwiperSlide>
            <div className={classes.wrapper}>
                <StoryImage image={image} profileImage={profileImage} />
            </div>
        </SwiperSlide>

    )
}
