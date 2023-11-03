
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    navAction: {
        height: 40,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F0F2F5',
            width: 200,
            height: 40,
            borderRadius: 8,
        }
    }
})

const NavAction = ({ icon, text }) => {
    const classes = useStyles()
    return (
        <div className={classes.navAction} >
            {icon}
            <span style={{ paddingLeft: 5, color: '#606266', fontSize: '.9375rem' }}>{text}</span>
        </div>
    )
}

export default NavAction

