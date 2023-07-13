import { createUseStyles } from "react-jss"
import { BookMark, FriendIcon, GroupIcon, MarketPlaceIcon, MemoriesIcon, PlayIcon, ProfileIcon } from "../assets/icons"
import SideBarAction from "../atoms/SideBarAction"

const array_sidebar = [{ text: 'Marco Melchiorri', icon: ProfileIcon }, { text: 'Amici', icon: FriendIcon }, { text: 'Ricordi', icon: MemoriesIcon }, { text: 'Gruppi', icon: GroupIcon }, { text: 'Watch', icon: PlayIcon }, { text: 'MarketPlace', icon: MarketPlaceIcon },{text:'Elementi Salvati',icon:BookMark}]

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16,
    width:300,
  }

})
const SideBar = () => {

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      {array_sidebar.map((element, index) => {
        return <SideBarAction text={element.text} icon={<element.icon />} />
      })}
    </div>
  )
}

export default SideBar
