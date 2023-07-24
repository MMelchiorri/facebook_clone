import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    chatStyle: {
        position: 'fixed',
        backgroundColor: 'white',
        top:58,
        right: 10,
        width: 300,
        height: 500,
        borderRadius: 20,
    },
})

export const Chat = () => {

    const classes = useStyles()

    return (
        <div className={classes.chatStyle}>
            Chat
        </div>
    )
}
