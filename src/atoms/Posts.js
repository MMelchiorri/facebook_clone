import { createUseStyles } from "react-jss"
import { Cross, ThreeDots } from "../assets/icons"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    span: {
        color: '#333333',
        fontFamily: 'Segoe UI Historic',
        fontSize: 15,
        fontWeight: 600
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export const Posts = ({ title, body }) => {

    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span className={classes.span}>{title}</span>
                <div className={classes.icons}>
                    <ThreeDots />
                    <Cross />
                </div>
            </div>
            <div>{body}</div>
        </div>
    )
}
