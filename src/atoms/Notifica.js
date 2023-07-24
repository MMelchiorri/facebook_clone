import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    notificaStyle: {
        position: 'fixed',
        backgroundColor: 'white',
        top:58,
        right: 10,
        width: 300,
        height: 500,
        borderRadius: 20,
    },
})

export const Notifica = () => {

    const classes = useStyles()

    return (
        <div className={classes.notificaStyle}>
            Notifica
        </div>
    )
}
