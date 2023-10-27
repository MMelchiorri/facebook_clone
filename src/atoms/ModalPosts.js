import { createUseStyles } from "react-jss";
import { ProfilePhoto } from "./ProfilePhoto";
import { BackArrow, EmojiIcon, ThreeDots } from "../assets/icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store";
import aaimage from '../assets/img/SATP_Aa_square-2x.png'
import Photo from '../assets/img/profile.jpg'
import friendIcon from '../assets/img/friendIcon.png'
import picture from '../assets/img/picture.png'
import icon from '../assets/img/icon.png'
import emoji from '../assets/img/emoji.png'
import location from '../assets/img/location.png'
import gif from '../assets/img/gif.png'
import { useState } from "react";




const useStyle = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
    },
    selectWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 6,
    },

    userName: {
        fontWeight: 600
    },
    select: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 100,
        borderStyle: 'none',
        backgroundColor: '#E4E6EB',
        borderRadius: 6,
        cursor: 'pointer',
        minWidth: 81,
        minHeight: 24,
        padding: '2px 4px'
    },
    icon: {
        height: 12
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'none',
        cursor: 'text',
        marginTop: 15,

    },
    text: {
        maxWidth: 450,
        minHeight: 200,
        borderStyle: 'none'
    },
    emoticon: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-between',
    },
    addPost: {
        border: '3px solid',
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        borderColor: '#E5E6E8',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

const array = [{ value: picture }, { value: icon }, { value: emoji }, { value: location }, { value: gif }]

export const ModalPosts = ({ text, changeText }) => {
    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (e) => {
        console.log(e)
    }


    const classes = useStyle();
    return (

        <div className={classes.wrapper}>
            <div className={classes.header}>
                <ProfilePhoto image={Photo} />
                <div className={classes.selectWrapper}>
                    <span className={classes.userName}>Marco Melchiorri</span>
                    <div className={classes.select}>
                        <img className={classes.icon} src={friendIcon} alt="friend icon" />
                        <span style={{ fontSize: 13, fontWeight: 600 }}>Amici</span>
                        <BackArrow />
                    </div>
                </div>
            </div>
            <div className={classes.body} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea style={{ border: "none", minWidth: 400, minHeight: 200, resize: 'none' }} defaultValue={text} {...register("text")} onChange={changeText} autoFocus={true} />
                    <div className={classes.emoticon}>
                        <img style={{ cursor: 'pointer', width: 38, height: 38 }} src={aaimage} alt="image_icon" />
                        <EmojiIcon />
                    </div>

                    <div className={classes.addPost}>
                        <span>Aggiungi al tuo post</span>
                        <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: 180 }}>
                            {array.map((elem, index) => {
                                return <img key={index} style={{ width: 20, height: 20 }} src={elem.value} alt="" />
                            })}
                            <ThreeDots />
                        </div>
                    </div>
                    <button type="submit" style={{
                        border: 'none',
                        minWidth: 450,
                        minHeight: 30,
                        cursor: 'pointer',
                        backgroundColor: text === '' || text === 'A cosa stai pensando?' ? '#E4E6EB' : '#0861F2',
                        color: text === '' || text === 'A cosa stai pensando?' ? '' : ' #EBEEF2'
                    }}
                        disabled={text === '' || text === 'A cosa stai pensando?' ? true : false}>
                        <span>Pubblica</span>
                    </button>
                </form>
            </div>
        </div >

    )
}
