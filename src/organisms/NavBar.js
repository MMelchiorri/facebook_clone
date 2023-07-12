import { GroupsIcon, FriendsIcon, PlayIcon, HomeIcon, MessengerIcon, ProfileIcon, NotificationIcon, MenuIcon, FacebookIcon } from "../assets/icons"
import NavAction from "../atoms/NavAction"
import { UserAction } from "../atoms/UserAction"
import { createUseStyles } from 'react-jss'

const NavActions = [{ icon: HomeIcon, route: 'home' }, { icon: FriendsIcon, route: 'friends' }, { icon: PlayIcon, route: 'watch' }]

export const UserActions = [{ icon: MenuIcon, route: 'menu' }, { icon: MessengerIcon, route: 'messenger' }, { icon: NotificationIcon, route: 'notification' }, { icon: ProfileIcon, path: 'profile' }]

const useStyles = createUseStyles({
    nav: {
        padding: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)'

    },

    navItems: {
        display: 'flex',
        justifyContent:'center',
        gap:24,
        flex:1,
        height:'100%'
    },

    userSection: {
        display: "flex",
        gap:16
    }
})


const NavBar = () => {

    const classes = useStyles()

    return (
        <div className={classes.nav}>
            <FacebookIcon />
            <span className={classes.navItems}>
                {NavActions.map((item, index) => {
                    return <NavAction icon={<item.icon />} onClick={() => { console.log(`sono in ` + item.icon) }} />
                })}
            </span>
            <div className={classes.userSection}>
                {UserActions.map((item, index) => {
                    return <UserAction icon={<item.icon />} />
                })}
            </div>
        </div>
    )
}

export default NavBar
