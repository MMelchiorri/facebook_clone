import { createUseStyles } from "react-jss"
import { ProfilePhoto } from "./ProfilePhoto"
const useStyle = createUseStyles({
    profileImage: {
        position: 'absolute',
        zIndex: 1,
        top: 10,
        left: 10,
        borderColor: '#0866FF',
        border: '5px solid',
        borderRadius: '50%'
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
        <>
            <ProfilePhoto image={profileImage} />
            <div className={classes.wrapper} />
        </>

    )
}
