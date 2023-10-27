import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        gap: 8,
        padding: 8,
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#E4E6E9',
            borderRadius: 8,
            cursor: 'pointer'
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 200
    }

})

const SideBarAction = ({ text, icon, subtitle }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <span>{icon}</span>
            <div className={classes.content}>
                <span>{text}</span>
                <span style={{ fontSize: 12 }}>{subtitle}</span>
            </div>
        </div>
    )
}

export default SideBarAction
