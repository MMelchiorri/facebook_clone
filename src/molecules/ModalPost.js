import { createUseStyles } from "react-jss"
import { useForm } from 'react-hook-form'
import { AaIcon, EmojiIcon, GifIcon, MapsIcon, PictureIcon, ProfileIcon } from "../assets/icons"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '30%',
        minHeight: '50%',
        borderRadius: 5,
        zIndex: 1,
        position: 'fixed',
        /* */
        backgroundColor: 'white',
    },
    upperModal: {
        display: 'flex',
        /**questa parte non so bene come fare per mandare l'elemento in posizione centro destra */
        alignItems: 'center',
        justifyContent: 'space-around'

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
    select: {
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        border: 'none',
        padding: 20
    },
    footer: {
        paddingLeft: 20,
        display: 'flex',
        justifyContent: 'space-between',

    },
    lowerModal:{
        display:'flex',
        flexDirection:'column',
    },
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        margin:12,
        border:'2px solid',
        borderColor:'#E5E6E8',
        borderRadius:5
    },
    publicButton:{
        backgroundColor:'#E4E6EB',
        border:'none',
        minHeight:30
    }
})

const ModalIcon = [{icon:PictureIcon},{icon:ProfileIcon},{icon:EmojiIcon},{icon:MapsIcon},{icon:GifIcon}]

export const ModalPost = ({ text, onClick, image }) => {
    const { register } = useForm()
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
                    <div className={classes.select}>
                        <p>Marco Melchiorri</p>
                        <select>
                            <option>Amici</option>
                        </select>
                    </div>
                </div>
                <div className={classes.body}>
                    <input className={classes.text} type="text" defaultValue={text} {...register(text)} />
                    <div className={classes.footer}>
                        {<AaIcon />}
                        {<EmojiIcon />}
                    </div>
                </div>
            </div>
            <div className={classes.lowerModal}>
                <div className={classes.container}>
                    <h4>Aggiungi al tuo post</h4>
                    {ModalIcon.map((element,index)=>{
                        return <element.icon key={index} />
                    })}
                </div>
                <button className={classes.publicButton}>Pubblica</button>
            </div>

        </div>
    )
}
