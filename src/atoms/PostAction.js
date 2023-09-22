import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    icon: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        flex:0.3,
        minHeight:40,
        justifyContent:'center',
        '&:hover':{
            backgroundColor:'#F2F2F2',
            cursor:'pointer',
            borderRadius:10
        }
    }
})
export const PostAction = ({ icon, text }) => {

    const classes = useStyles()
    return (
        <div className={classes.icon}>
                {icon}
                {text}
        </div>
    )
}
