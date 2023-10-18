import { createUseStyles } from "react-jss"
import { useState } from "react"
import { StorySlide } from "./StorySlide"
import CreatePost from "../molecules/CreatePost"
import Modal from "../molecules/Modal"
import { useSelector } from 'react-redux'
const useStyle = createUseStyles({
    wrapper: {
        width: '100%',
        maxWidth: 600,
        padding: '24px',
    },
    story: {
        display: 'flex'
    },
    postWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    }
})

const Feed = () => {
    const [isPostModal, setIsPostModal] = useState(false)
    const userPosts = useSelector(state => state.feed.value.posts)
    const classes = useStyle()
    return (
        <div className={classes.wrapper}>
            {isPostModal && <Modal onClose={() => setIsPostModal(!isPostModal)}>
                <h1>MODAL CONTENT</h1>
            </Modal>}
            <StorySlide />
            <CreatePost callback={() => setIsPostModal(!isPostModal)} />
            <div className={classes.postWrapper}>
                {userPosts.map((elem) => {
                    return <div>
                        <h1>{elem.title}</h1>
                        <div>{elem.body}</div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Feed