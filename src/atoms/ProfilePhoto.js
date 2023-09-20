import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    maxWidth:48,
    maxHeight:48,
    borderRadius:'100%'
})

export const ProfilePhoto = ({image}) => {
    const classes = useStyle()
  return (
    
    <div className={classes.wrapper}>
        <img className={classes.imgProfile} src={image} alt="profilePhoto"></img>
    </div>
  )
}
