import Feed from "../organisms/Feed"
import NavBar from "../organisms/NavBar"
import SideBar from "../organisms/SideBar"
import axios from 'axios'
import { createUseStyles } from "react-jss"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPosts } from "../store"
import ChatBar from "../organisms/ChatBar"

const useStyle = createUseStyles({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr'
    },
    innerWrapper: {
        marginTop: 60
    },
})



const Home = () => {

    const classes = useStyle()

    const dispatch = useDispatch()

    const getPosts = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
            dispatch(setPosts({ posts: res.data }))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getPosts() }, [])
    return (
        <div>
            <NavBar />
            <div className={classes.wrapper}>
                <div className={classes.innerWrapper}>
                    <SideBar />
                    <Feed />
                    <ChatBar />
                </div>
            </div>
        </div>
    )
}

export default Home
