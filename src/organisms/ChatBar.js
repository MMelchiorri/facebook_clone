import { createUseStyles } from "react-jss"
import data from '../mock/mockChat.json'
import { ProfilePhoto } from "../atoms/ProfilePhoto"
import { SearchIcon, ThreeDots } from "../assets/icons"



const useStyles = createUseStyles({
    wrapper: {
        minWidth: 250,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 120,
        left: 1200,
    },
    container: {
        display: 'flex',
        minWidth: 120,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chatElement: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 5,
        paddingBottom: 20,
        maxHeight: 30,
        '&:hover': {
            paddingLeft: 5,
            maxHeight: 30,
            maxWidth: 180,
            borderRadius: 8,
            backgroundColor: '#E4E6E9',
            cursor: 'pointer'
        }
    }
})


const ChatBar = () => {

    const classNames = useStyles()

    return (
        <div className={classNames.wrapper}>
            <div className={classNames.container}>
                <span>Contatti</span>
                <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: 50 }}>
                    <SearchIcon />
                    <ThreeDots />
                </div>
            </div>
            {data.friends.map((elem) => {
                return (
                    <div key={elem.id} className={classNames.chatElement}>
                        {elem.picture !== ' ' ? (
                            <div className={classNames.chatElement}>
                                <ProfilePhoto image={elem.picture} />
                                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#31A24C', position: 'relative', right: 15, top: 16, border: '3px solid white' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontWeight: 'bold' }}>{elem.name}</span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>

    )
}

export default ChatBar