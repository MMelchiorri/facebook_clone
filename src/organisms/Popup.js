import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    menuStyle: {
        position: 'relative'

    },
    chatStyle: {
        position: 'relative'
    },
    notificaStyle: {
        position: 'relative'
    }
})

export const Popup = ({ index, styles }) => {
    console.log(styles)
    const classes = useStyles()
    if (index === 0) {
        return (
            <div className={classes.wrapper}>
                <div className={styles}>Menu</div>
            </div>
        )
    }
    else if (index === 1) {
        return (
            <div className={styles}>Chat</div>
        )
    } else {
        return (
            <div className={styles}>Notifica</div>
        )
    }

}
