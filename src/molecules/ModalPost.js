import { createUseStyles } from "react-jss"
import { useForm } from 'react-hook-form'
import { AaIcon, EmojiIcon, GifIcon, MapsIcon, PictureIcon, ProfileIcon } from "../assets/icons"

const useStyles = createUseStyles({
    wrapper: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'none',
        minHeight: 400,
        minWidth: 400,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    closeButton: {
        borderRadius: 20,
        border: 'none'
    }
})

const ModalIcon = [{ icon: PictureIcon }, { icon: ProfileIcon }, { icon: EmojiIcon }, { icon: MapsIcon }, { icon: GifIcon }]

export const ModalPost = ({ text, onClick, image }) => {
    const { register } = useForm()
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h3>Crea post</h3>
                <button className={classes.closeButton} onClick={onClick}>X</button>
            </div>
            <div>
            </div>
            <div>

            </div>
        </div>
    )
}
