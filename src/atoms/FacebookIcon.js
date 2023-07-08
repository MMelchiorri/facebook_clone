import { createUseStyles } from "react-jss";
import { FacebookIcon } from "../assets/icons";
import React from 'react'

const Logo = {icon:FacebookIcon}

const FacebookLogo = () => {

  return (
    <div>
        <Logo.icon />
    </div>
  )
}

export default FacebookLogo
