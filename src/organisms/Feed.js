import { createUseStyles } from "react-jss"
import CreatePost from "../molecules/CreatePost"

const useStyle = createUseStyles({
    wrapper: {
        flex: 0.6,
        padding: '24px'
    }
})

const Feed = () => {
    const classes = useStyle()
    return (
        <div className={classes.wrapper}>
            <CreatePost />
        </div>
    )
}

export default Feed
