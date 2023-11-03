import { createUseStyles } from "react-jss";
import data from '../mock/mockChat.json'
import { ProfilePhoto } from "./ProfilePhoto";

const useStyles = createUseStyles({
    //post part
    chatStyle: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 360,
        maxHeight: 600,
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconContainer: {
        display: "flex",
        justifyContent: "space-around",
        minWidth: 100,
    },
    icon: {
        width: 30,
        height: 30,
        paddingTop: 8,
        paddingLeft: 8,
        "&:hover": {
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
        },
    },
    chatContainer: {
        display: "flex",
        alignItems: "center",
    },
    buttonContainer: {
        maxWidth: 200,
        display: 'flex',
        justifyContent: 'space-around',
        padding: 14
    },
    buttonSelected: {
        border: 'none',
        padding: 8,
        color: '#005FC6',
        fontSize: 15,
        fontWeight: 600,
        borderRadius: 20,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    buttonNotSelected: {
        border: 'none',
        padding: 8,
        color: '#050505',
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: '#F2F2F2',
            borderRadius: 20,
        }
    },
    chatWrapper: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'fit-content',
        overflowY: 'scroll'
    },
    chatElement: {
        padding: 10,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F2F2F2'
        }
    }
});

const PostaChat = () => {
    const classes = useStyles();
    return (
        <div className={classes.chatWrapper}>
            {data.friends.map((elem) => {
                console.log(elem.chatlog[0])
                return (
                    <div key={elem.id} className={classes.chatElement}>
                        {elem.picture !== ' ' && elem.chatlog[0] !== undefined ? (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ProfilePhoto image={elem.picture} />
                                <div style={{ width: 30, height: 10, borderRadius: '50%', backgroundColor: '#31A24C', position: 'relative', right: 15, top: 16, border: '3px solid white' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontWeight: 'bold' }}>{elem.name}</span>
                                    <span style={{ fontSize: '12px', padding: 3 }}>{elem.chatlog[0].text}</span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    )
}

export default PostaChat