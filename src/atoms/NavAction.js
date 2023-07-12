
import { createUseStyles } from 'react-jss'
import { useState } from 'react'

const useStyles = createUseStyles({
    navAction: {
        height:'100%',
        width:80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F2F2F2',
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

