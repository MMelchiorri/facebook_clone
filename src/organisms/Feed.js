import { createUseStyles } from "react-jss"
import { useState } from "react"
import CreatePost from "../molecules/CreatePost"
import Modal from "../molecules/Modal"

const useStyle = createUseStyles({
    wrapper: {
        width: '100%',
        maxWidth: 600,
        padding: '24px',
    },
    story: {
        display: 'flex'
    }
})

const Feed = () => {
    const [isPostModal, setIsPostModal] = useState(false)
    const classes = useStyle()
    return (
        <div className={classes.wrapper}>
            {isPostModal && <Modal onClose={() => setIsPostModal(!isPostModal)}>
                <h1>MODAL CONTENT</h1>
            </Modal>}
            <CreatePost callback={() => setIsPostModal(!isPostModal)} />
        </div>
    )
}

export default Feed