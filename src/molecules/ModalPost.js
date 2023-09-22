import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '30%',
        minHeight: '50%',
        borderadius: 5,
        position: 'absolute',
        left: 500,
        top: 220,
        backgroundColor: 'white',
        flex:0.2
    },
    upperModal:{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    button:{
        height:30,
        width:30,
        borderRadius:20,
        border: 'none'
    }
})

export const ModalPost = ({ text }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.upperModal}>
                <h3>Crea post</h3>
                <button className={classes.button}>X</button>
            </div>
            {text}
        </div>
    )
}
