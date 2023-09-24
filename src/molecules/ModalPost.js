import { createUseStyles } from "react-jss"
import {useForm} from 'react-hook-form'
import { AaIcon, EmojiIcon } from "../assets/icons"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '30%',
        minHeight: '50%',
        borderRadius: 5,
        zIndex:1,
        position: 'fixed',
        /* */
        backgroundColor: 'white',
    },
    upperModal: {
        display: 'flex',
        /**questa parte non so bene come fare per mandare l'elemento in posizione centro destra */
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        minHeight: 40,
        minWidth: 40,
        borderRadius: 20,
        border: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    middleModal: {
        display: 'flex',
        flexDirection: 'column',
    },
    headerMiddleModal: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10,
        gap: 10,
    },
    header:{
        display:'flex',
        flexDirection:'column',
    },
    body:{
        display:'flex',
        flexDirection:'column',
    },
    text:{
        border:'none',
        padding:20
    },
    footer:{
        paddingLeft:20,
        display:'flex',
        justifyContent:'space-between',

    }
})

export const ModalPost = ({ text, onClick, image }) => {
    const {register} = useForm()
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.upperModal}>
                <h3>Crea post</h3>
                <button className={classes.button} onClick={onClick}>X</button>
            </div>
            <div className={classes.middleModal}>
                <div className={classes.headerMiddleModal}>
                    {image}
                    <div className={classes.header}>
                        <p>Marco Melchiorri</p>
                        <select>
                            <option>Amici</option>
                        </select>
                    </div>
                </div>
                <div className={classes.body}>
                    <input className={classes.text} type="text" defaultValue={text} {...register(text)}/>
                    <div className={classes.footer}>
                        {<AaIcon />}
                        {<EmojiIcon />}
                    </div>
                </div>
            </div>

        </div>
    )
}
