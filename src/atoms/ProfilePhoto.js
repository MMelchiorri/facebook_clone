import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
  wrapper: {
    maxWidth: 40,
    maxHeight: 40,
    borderRadius: '100%',
  },
  imgProfile: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    cursor: 'pointer'
  }
})

export const ProfilePhoto = ({ image }) => {
  const classes = useStyle()
  return (

    <div className={classes.wrapper} >
      <img className={classes.imgProfile} src={image} alt="profilePhoto" />
    </div>
  )
}
