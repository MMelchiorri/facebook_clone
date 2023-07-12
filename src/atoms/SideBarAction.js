import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        gap: 16
    }
})

const SideBarAction = ({ text, icon }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <span>{text}</span>
            <span>{icon}</span>
        </div>
    )
}

export default SideBarAction
