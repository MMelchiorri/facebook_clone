import { GroupsIcon, FriendsIcon, PlayIcon, HomeIcon, MessengerIcon, ProfileIcon, NotificationIcon, MenuIcon } from "../assets/icons"
import NavAction from "../atoms/NavAction"
import { UserAction } from "../atoms/UserAction"
import FacebookLogo from "../atoms/FacebookIcon"
import { createUseStyles } from 'react-jss'

const NavActions = [{ icon: HomeIcon, route: 'home' }, { icon: FriendsIcon, route: 'friends' }, { icon: PlayIcon, route: 'watch' }]

export const UserActions = [{ icon: MenuIcon, route: 'menu' }, { icon: MessengerIcon, route: 'messenger' }, { icon: NotificationIcon, route: 'notification' }, { icon: ProfileIcon, path: 'profile' }]

const useStyles = createUseStyles({
    nav: {
        padding: 8,
        maxHeight: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)'

    },

    userSection:{
        display:"flex",
        marginLeft:700,
    }
})


const NavBar = () => {

    const classes = useStyles()

    return (
        <div className={classes.nav}>
            <FacebookLogo />
            {NavActions.map((item, index) => {
                return <NavAction icon={<item.icon />} />
            })}
            <div className={classes.userSection}>
                {UserActions.map((item, index) => {
                    return <UserAction icon={<item.icon />} />
                })}
            </div>
        </div>
    )
}

export default NavBar
