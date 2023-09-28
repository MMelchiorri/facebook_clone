import { createUseStyles } from "react-jss"
import CreatePost from "../molecules/CreatePost"

const useStyle = createUseStyles({
    wrapper: {
        minWidth: 600,
        padding: '24px',

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
