import { createUseStyles } from "react-jss"
import data from '../mock/mockChat.json'
import { ProfilePhoto } from "../atoms/ProfilePhoto"


const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 120,
        left: 1000
    }
})


const ChatBar = () => {

    const classNames = useStyles()

    return (
        <div className={classNames.wrapper}>
            {data.friends.map((elem) => {
                console.log(elem.chatlog[0])
                return (
                    <div key={elem.id} className={classNames.chatElement}>
                        {elem.picture !== ' ' && elem.chatlog[0] !== undefined ? (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ProfilePhoto image={elem.picture} />
                                <div style={{ width: 10, height: 8, borderRadius: 8, backgroundColor: '#31A24C', position: 'relative', right: 15, top: 16, border: '3px solid white' }}></div>
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