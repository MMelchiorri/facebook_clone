import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        gap: 8,
        width: 300,
        height: 2,
        padding: 24,
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#E4E6E9',
            borderRadius: 8,
            cursor: 'pointer'
        }
    },
    content:{
        display:'flex',
        flexDirection:'column'
    }

})

const SideBarAction = ({ text, icon,subtitle }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <span>{icon}</span>
            <div className={classes.content}>
                <span>{text}</span>
                <span>{subtitle}</span>
            </div>
        </div>
    )
}

export default SideBarAction
