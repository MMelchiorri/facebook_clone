
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    navAction:{
        padding: 24,
        maxWidth:100,
        maxHeight:60,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
        marginRight:40,
        '&:hover':{
            backgroundColor:'#F2F2F2',
            borderRadius:20,
            height:2,
        }
    }
})

const NavAction = ({icon}) => {
    const classes = useStyles()

    return (
        <div className={classes.navAction}>
            {icon}
        </div>
    )
}

export default NavAction

