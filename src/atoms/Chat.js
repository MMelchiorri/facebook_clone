import { createUseStyles } from "react-jss"
import { Arrows, ThreeDots, Publish } from "../assets/icons"

const useStyles = createUseStyles({

    chatStyle: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 400,
        minHeight: 'fit-content'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        minWidth: 100,
    },
    icon: {
        width: 30,
        height: 30,
        paddingTop: 8,
        paddingLeft: 8,
        '&:hover': {
            backgroundColor: '#D9D9D9',
            borderRadius: 20
        }
    }
})

const arrayIcon = [{ icon: ThreeDots }, { icon: Arrows }, { icon: Publish }]

export const Chat = () => {

    const classes = useStyles()

    return (
        <div className={classes.chatStyle}>
            <div className={classes.header}>
                <h1 style={{ fontSize: 24 }}>Chat</h1>
                <div className={classes.iconContainer}>
                    {arrayIcon.map((elem, index) => {
                        return <div className={classes.icon}><elem.icon /></div>
                    })}
                </div>
            </div>
        </div>
    )
}
