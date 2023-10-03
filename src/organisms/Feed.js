import { createUseStyles } from "react-jss"
import { useState } from "react"
import CreatePost from "../molecules/CreatePost"

const useStyle = createUseStyles({
    wrapper: {
        minWidth: 600,
        padding: '24px',

    }
})

const Feed = () => {
    const [modal, isModalOpen] = useState(false)
    const classes = useStyle()
    return (
        <div className={classes.wrapper}>
            <CreatePost modal={modal} callback={() => isModalOpen(!modal)} />
        </div>
    )
}

export default Feed
