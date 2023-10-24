import { createUseStyles } from "react-jss";
import { ProfilePhoto } from "./ProfilePhoto";
import Photo from '../assets/img/profile.jpg'
import { FriendIcon } from "../assets/icons";
import friendIcon from '../assets/img/friendIcon.png'



const useStyle = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        maxWidth: 180

    },
    selectWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    select: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 100,
        border: 'none',
        backgroundColor: '#E4E6EB',
        borderRadius: 3
    },
    footer: {

    }
})

export const ModalPosts = () => {

    const classes = useStyle();
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <ProfilePhoto image={Photo} />
                <div className={classes.selectWrapper}>
                    <span style={{ fontWeight: 600 }}>Marco Melchiorri</span>
                    <div className={classes.select}>
                        <img style={{ height: 15 }} src={friendIcon} alt="friend icon" />
                        <span>Amici</span>
                    </div>

                </div>
            </div>
            <div className={classes.footer}></div>
        </div>
    )
}
