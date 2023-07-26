import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({

})

export const Chat = () => {

    const classes = useStyles()

    return (
        <div className={classes.chatStyle}>
            Chat
        </div>
    )
}
