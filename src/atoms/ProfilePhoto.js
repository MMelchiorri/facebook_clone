import { createUseStyles } from "react-jss"
import cx from 'classnames'

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

export const ProfilePhoto = ({ image, className }) => {
  const classes = useStyle()
  return (

    <div className={classes.wrapper} >
      <img className={cx(classes.imgProfile, className)} src={image} alt="profilePhoto" />
    </div>
  )
}
