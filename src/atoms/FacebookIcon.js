import { createUseStyles } from "react-jss";
import { FacebookIcon } from "../assets/icons";
import React from 'react'

const Logo = {icon:FacebookIcon}

const useStyles = createUseStyles({
  icon:{
    marginRight:580,
    cursor:'pointer'
  }
})

const FacebookLogo = () => {

  const classes = useStyles()

  return (
    <div className={classes.icon}>
        <Logo.icon />
    </div>
  )
}

export default FacebookLogo
