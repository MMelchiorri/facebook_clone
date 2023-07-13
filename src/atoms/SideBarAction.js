import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        gap: 8,
        width:300,
        height:2,
        padding: 24,
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#E4E6E9',
            borderRadius:8,
            cursor:'pointer'
        }
    },
    
})

const SideBarAction = ({ text, icon }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}

export default SideBarAction
