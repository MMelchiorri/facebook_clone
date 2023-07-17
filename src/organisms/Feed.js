import { createUseStyles } from "react-jss"
import CreatePost from "../molecules/CreatePost"
import { useForm } from "react-hook-form"

const useStyle = createUseStyles({
    wrapper: {
        display: 'flex',
        flex: 1,

    }

})

const Feed = () => {

    const classes = useStyle()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className={classes.wrapper}>
            <CreatePost />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />
                <input {...register("exampleRequired")} />
                <input type="submit" text="submit"/>
            </form>
        </div>
    )
}

export default Feed
