import { StoryImage } from "../atoms/StoryImage"
import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    wrapper: {
        width: 140,
        height: 250,

    }
})

export const Story = ({ image, profileImage, key }) => {

    const classes = useStyle()
    return (

        <div className={classes.wrapper}>
            <StoryImage image={image} profileImage={profileImage} />
        </div>
    )

}
