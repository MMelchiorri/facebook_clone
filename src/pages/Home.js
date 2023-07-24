import Feed from "../organisms/Feed"
import NavBar from "../organisms/NavBar"
import SideBar from "../organisms/SideBar"
import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    wrapper: {
        display:'flex',
    

    }

})

const Home = () => {

    const classes = useStyle()
    return (
        <div>
            <NavBar />
            <div className={classes.wrapper}>
                <SideBar />
                <Feed />
            </div>
        </div>
    )
}

export default Home
