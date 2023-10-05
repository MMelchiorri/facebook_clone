import Feed from "../organisms/Feed"
import NavBar from "../organisms/NavBar"
import SideBar from "../organisms/SideBar"
import { StorySlide } from "../organisms/StorySlide"
import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr'
    },
    innerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

    },
    feed: {
        display: 'flex',
        justifyContent: "center",


    }

})

const Home = () => {

    const classes = useStyle()
    return (
        <div>
            <NavBar />
            <div className={classes.wrapper}>
                <SideBar />
                <div className={classes.innerWrapper}>
                    <div className={classes.storySlide}>
                        <StorySlide />
                    </div>
                    <div className={classes.feed}>
                        <Feed />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
