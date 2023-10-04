import Feed from "../organisms/Feed"
import NavBar from "../organisms/NavBar"
import SideBar from "../organisms/SideBar"
import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr'
    },
    feed:{
        display:'flex',
        alignItems:"center",
        flexDirection:'column',

    }

})

const Home = () => {

    const classes = useStyle()
    return (
        <div>
            <NavBar />
            <div className={classes.wrapper}>
                <SideBar />
                <div className={classes.feed}>
                    <Feed />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Home
