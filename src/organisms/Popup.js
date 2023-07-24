import { createUseStyles } from "react-jss"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Events, Feed, FriendIcon, GroupIcon, News, Pages, Publish, Story } from "../assets/icons"

const array_div_u = [
    { icon: Events, title: "Eventi", paragraph: "Organizza o trova eventi e altro da fare online e nelle vicinanze" },
    { icon: FriendIcon, title: "Amici", paragraph: "Cerca Amici o persone che potresti conoscere" },
    { icon: GroupIcon, title: "Gruppi", paragraph: "Connettiti con persone che condividono i tuoi interessi" },
    { icon: News, title: "Sezione Notizie", paragraph: "Vedi i post pertinenti delle persone e delle pagine che segui" },
    { icon: Feed, title: "Feed", paragraph: "Vedi i post più recenti degli amici, gruppi, Pagine e altro ancora" },
    { icon: Pages, title: "Pagine", paragraph: "Scopri le aziende e connettiti con loro su Facebook" }
]

const array_div_d = [
    { icon: Publish, title: "Pubblica" },
    { icon: Story, title: "Storia" },

]

const useStyles = createUseStyles({
    menuStyle: {
        position: 'fixed',
        backgroundColor: '#F7F8FA',
        right: 10,
        width: 600,
        height: 600,
        borderRadius: 20,
    },
    chatStyle: {
        position: 'fixed',
        backgroundColor: 'white',
        right: 10,
        width: 300,
        height: 500,
        borderRadius: 20,
    },
    notificaStyle: {
        position: 'fixed',
        backgroundColor: 'white',
        right: 10,
        width: 300,
        height: 500,
        borderRadius: 20,
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'relative',
        height: 'auto'
    },
    div_u: {
        width: 300,
        backgroundColor: '#FFFFFF',


    },
    title: {
        position: 'relative',
        left: 30,
    },
    search_menu: {
        backgroundColor: '#F7F8FA',
        border: 'none',
        position: 'relative',
        top: 15,
        left: 20,
        width: '85%',
        height: 30,
        borderRadius: 10,
        paddingLeft: 10
    },
    social: {
        fontWeight: 'bold',
        position: 'relative',
        top: 40,
        left: 30,
    },
    inner_div: {
        display: 'flex',
        columnGap: 10,
        position: 'relative',
    },
    wrapper_div_u: {
        display: 'flex',
        columnGap: 10,
        marginBottom: 20,
        position: 'relative',
        top: 60,
        '&:hover': {
            backgroundColor: '#F2F2F2',
            opacity: 0.6,
            cursor: 'pointer',
            borderRadius: 2,
            height: 'auto'
        }
    },
    wrapper_p: {
        position: 'relative',
        bottom: 20,
    },
    title_sub: {
        fontWeight: 'bold',
        margin: 0 //perchè prende come margin 16 quando io non lo specifico? chiedere a Valerio
    },
    paragraph_sub: {
        margin: 0,
        fontSize: 12,
        color: 'light-grey'
    },
    div_d: {
        width: 200,
        backgroundColor: '#FFFFFF',

    },
    crea: {
        position: 'relative',
        left: 10
    },
    wrapper_div_d: {
        position: 'relative',
        top: 45,
        left: 20,
        '& p': {
            margin: 0,
            position: 'relative',
            left: 10
        }
    },

    inner_div_d: {
        display: 'flex',
        position: 'relative',
    }


})



export const Popup = ({ index, styles, callBack }) => {
    const classes = useStyles()
    const { register, handleSubmit } = useForm({
        defaultValues: {

        }
    })
    if (index === 0) {
        return (
            <div className={classes.menuStyle} >
                <h2 className={classes.title}>Menu</h2>
                <div className={classes.wrapper}>
                    <div className={classes.div_u}>
                        <form>
                            <input className={classes.search_menu} {...register("search")} placeholder="Cerca Menu" />
                        </form>
                        <span className={classes.social}>Social</span>
                        <div className>
                            {array_div_u.map((element, index) => {
                                return (
                                    <div className={classes.wrapper_div_u}>
                                        <div key={index}>{<element.icon />}</div>
                                        <div className={classes.warapper_p}>
                                            <p className={classes.title_sub}>{element.title}</p>
                                            <p className={classes.paragraph_sub}>{element.paragraph}</p>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>

                    <div className={classes.div_d}>
                        <h2 className={classes.crea}>Crea</h2>
                        {array_div_d.map((element, index) => {
                            return (
                                <div className={classes.wrapper_div_d}>
                                    <div className={classes.inner_div_d}>
                                        <div className={classes.icon}>{<element.icon />}</div>
                                        <p>{element.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    else if (index === 1) {
        return (
            <div className={classes.chatStyle}>
                Chat
            </div>
        )
    } else {
        return (
            <div className={classes.notificaStyle}>Notifica</div>
        )
    }

}
