
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    navAction: {
        height:'100%',
        width:80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#E4E6E9',
            borderRadius: 8,
        }
    }
})

const NavAction = ({ icon }) => {
    const classes = useStyles()
    return (
        <div className={classes.navAction} >
            {icon}
        </div>
    )
}

export default NavAction

