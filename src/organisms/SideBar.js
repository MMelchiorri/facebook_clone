import { createUseStyles } from "react-jss"
import { BookMark, FriendIcon, GroupIcon, MarketPlaceIcon, MemoriesIcon, PlayIcon, ProfileIcon } from "../assets/icons"
import SideBarAction from "../atoms/Action"

const array_sidebar = [{ text: 'Marco Melchiorri', icon: ProfileIcon }, { text: 'Amici', icon: FriendIcon }, { text: 'Ricordi', icon: MemoriesIcon }, { text: 'Gruppi', icon: GroupIcon }, { text: 'Watch', icon: PlayIcon }, { text: 'MarketPlace', icon: MarketPlaceIcon }, { text: 'Elementi Salvati', icon: BookMark }]

const useStyles = createUseStyles({
  wrapper: {
    display: 'grid',
    flexDirection: 'column',
    gap: 24,
    padding: 16,
    maxwidth: 360,
    height: 'fit-content',
    position: 'fixed'
  }
})
const SideBar = () => {

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      {array_sidebar.map((element, index) => {
        return <SideBarAction key={index} text={element.text} icon={<element.icon />} />
      })}
    </div>
  )
}

export default SideBar
