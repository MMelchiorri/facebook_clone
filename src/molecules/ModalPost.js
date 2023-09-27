import { createUseStyles } from "react-jss"
import { useForm } from 'react-hook-form'
import { AaIcon, EmojiIcon, GifIcon, MapsIcon, PictureIcon, ProfileIcon } from "../assets/icons"

const useStyles = createUseStyles({
    wrapper: {

    },
})

const ModalIcon = [{icon:PictureIcon},{icon:ProfileIcon},{icon:EmojiIcon},{icon:MapsIcon},{icon:GifIcon}]

export const ModalPost = ({ text, onClick, image }) => {
    const { register } = useForm()
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>

        </div>
    )
}
