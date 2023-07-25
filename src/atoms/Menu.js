import { createUseStyles } from "react-jss"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Events, Feed, FriendIcon, GroupIcon, ImportantEvent, News, Pages, Publish, Reel, Story } from "../assets/icons"

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
    {icon:Reel,title:'Reel'},
    {icon:ImportantEvent,title:'Avvenimento \n Importante'}

]

const useStyles = createUseStyles({
    menuStyle: {
        position: 'fixed',
        backgroundColor: '#F7F8FA',
        top:58,
        right: 2,
        width: 700,
        height: '85%',
        borderRadius: 20,
    },
    title: {
        position: 'relative',
        left: 30,
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'relative',
        height:'85%'

    },

    div_u: {
        width: 400,
        height: 'auto',
        backgroundColor: '#FFFFFF',


    },

    search_menu: {
        backgroundColor: '#F7F8FA',
        border: 'none',
        position: 'relative',
        top: 8,
        left: 20,
        width: '85%',
        height: 30,
        borderRadius: 10,
        paddingLeft: 10
    },
    social: {
        fontWeight: 'bold',
        position: 'relative',
        top: 20,
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
        top: 40,
        '&:hover': {
            backgroundColor: '#F2F2F2',
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
        width: 250,
        backgroundColor: '#FFFFFF',

    },
    crea: {
        position: 'relative',
        left: 10
    },
    wrapper_div_d: {
        position: 'relative',
        top: 10,
        left: 20,
        '& p': {
            margin: 0,
            position: 'relative',
            top:5,
            left: 10,
            fontSize:14
        }
    },

    inner_div_d: {
        display: 'flex',
        position: 'relative',
        width:180,
        padding:20,
        '&:hover':{
            cursor:'pointer',
            backgroundColor: '#F2F2F2',
            height:'auto',
            width:180,
            borderRadius:10,
        }
 
    }


})

export const Menu = () => {
    const classes = useStyles()
    const { register, handleSubmit } = useForm({
        defaultValues: {

        }
    })
  return (
        <div className={classes.menuStyle} >
            <h2 className={classes.title}>Menu</h2>
            <div className={classes.wrapper}>
                <div className={classes.div_u}>
                    <form>
                        <input className={classes.search_menu} {...register("search")} placeholder="Cerca Menu" />
                    </form>
                    <span className={classes.social}>Social</span>
            
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
