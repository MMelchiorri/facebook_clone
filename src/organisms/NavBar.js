import { useState } from "react"
import { FriendsIcon, PlayIcon, HomeIcon, MessengerIcon, ProfileIcon, NotificationIcon, MenuIcon, FacebookIcon } from "../assets/icons"
import NavAction from "../atoms/NavAction"
import { UserAction } from "../atoms/UserAction"
import { createUseStyles } from 'react-jss'

const NavActions = [{ icon: HomeIcon, route: 'home' }, { icon: FriendsIcon, route: 'friends' }, { icon: PlayIcon, route: 'watch' }]
export const UserActions = [{ icon: MenuIcon, route: 'menu' }, { icon: MessengerIcon, route: 'messenger' }, { icon: NotificationIcon, route: 'notification' }, { icon: ProfileIcon, path: 'profile' }]
const useStyles = createUseStyles({
    nav: {
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1
    },
    navItems: {
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
        height: '100%'
    },
    userSection: {
        display: "flex",
        gap: 16
    }
})


const NavBar = () => {
    const classes = useStyles()
    const [openAction, setOpenAction] = useState()
    return (
        <div className={classes.nav}>
            <div style={{ cursor: 'pointer' }}>
                <FacebookIcon />
            </div>
            <span className={classes.navItems}>
                {NavActions.map((item, index) => {
                    return <NavAction key={index} icon={<item.icon />} />
                })}
            </span>
            <div className={classes.userSection}>
                {UserActions.map((item, index) => {
                    return <UserAction key={index} index={index} icon={<item.icon />} isOpen={index === openAction} callBack={setOpenAction} />
                })}
            </div>
        </div>
    )
}

export default NavBar
