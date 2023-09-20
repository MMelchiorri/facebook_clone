import { createUseStyles } from "react-jss"
import CreatePost from "../molecules/CreatePost"
import { useForm } from "react-hook-form"

const useStyle = createUseStyles({
    wrapper: {
        flex: 1,
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
