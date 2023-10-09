import { createUseStyles } from "react-jss"
import { ProfilePhoto } from "./ProfilePhoto"
const useStyle = createUseStyles({
    profilePicture: {
        borderColor: '#0866FF',
        zIndex: 1,
        position: 'relative',
        top: 5,
        left: 5,
        border: '5px solid',

    },
    wrapper: (props) => ({
        width: '100%',
        height: '100%',
        borderRadius: 8,
        position: 'relative',
        backgroundImage: `url(${props.image})`,
        transition: 'transform .7s',
        '&:hover': {
            transform: 'scale(1.05)',
            cursor: 'pointer',
        }
    }
    )
})

export const StoryImage = ({ image, profileImage }) => {
    const classes = useStyle({ image })
    return (


        <div className={classes.wrapper} >
            <ProfilePhoto className={classes.profilePicture} image={profileImage} />
        </div>

    )
}
