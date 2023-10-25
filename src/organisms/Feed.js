import { createUseStyles } from "react-jss"
import { useState } from "react"
import { StorySlide } from "./StorySlide"
import { useSelector } from 'react-redux'
import { Posts } from "../atoms/Posts"
import { ModalPosts } from "../atoms/ModalPosts"
import CreatePost from "../molecules/CreatePost"
import Modal from "../molecules/Modal"

const useStyle = createUseStyles({
    wrapper: {
        width: '100%',
        maxWidth: 600,
        padding: '24px',
        marginLeft: 360

    },
    postWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        backgroundColor: '#FFFFFF',
        marginTop: 30,
        borderRadius: 5,
        minHeight: 'fit-content'
    }
})

const Feed = () => {
    const [isPostModal, setIsPostModal] = useState(false)
    const userPosts = useSelector(state => state.feed.value.posts)
    const [text, setText] = useState('A cosa stai pensando? ')

    const changeText = (e) => {
        setText(e.target.value)
    }
    const classes = useStyle()
    return (
        <div className={classes.wrapper}>
            {isPostModal && <Modal title={"Crea Post"} onClose={() => setIsPostModal(!isPostModal)} >
                <ModalPosts onClose={() => setIsPostModal(!isPostModal)} text={text} changeText={changeText} />
            </Modal>}
            <StorySlide />
            <CreatePost callback={() => setIsPostModal(!isPostModal)} text={text} />
            {userPosts.map((elem, index) => {
                return <div key={index} className={classes.postWrapper}>
                    <Posts title={elem.title} body={elem.body} /></div>
            })}
        </div>

    )
}

export default Feed