import { GroupsIcon, FriendsIcon, PlayIcon, HomeIcon } from "../assets/icons"
import NavAction from "../atoms/NavAction"
import { createUseStyles } from 'react-jss'

const Actions = [ { icon: HomeIcon, route: 'home' },{ icon: FriendsIcon, route: 'friends' }, { icon: PlayIcon, route: 'watch' }]

const useStyles = createUseStyles({
    nav:{
        padding: 8,
        maxHeight:60,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',

    }
})


const NavBar = () => {

    const classes=useStyles()

    return (
        <div className={classes.nav}>
            {Actions.map((item, index) => {
                return <NavAction icon={<item.icon />} />
            })}
        </div>
    )
}

export default NavBar