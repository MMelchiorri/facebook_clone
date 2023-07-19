import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    wrapper: {
        height: 400,
        width:400,
        position: 'fixed',
        display:'flex',
        backgroundColor: '#F7F8FA',
    },
    span:{
        fontFamily: 'Quicksand, sans-serif',
        fontSize:32,
        position:'relative',
        left:16

    },
    menuContent:{
        height:350,
        width:'90%',
        position:'absolute',
        top:40,
        left:20,
        backgroundColor:'#FFFFFF'
    }

})

export const MenuButton = () => {
    const classes = useStyle()
    return (
        <div className={classes.wrapper}>
            <span className={classes.span}>Menu</span>
            <div className={classes.menuContent}></div>
        </div>
    )
}
