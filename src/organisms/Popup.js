import { createUseStyles } from "react-jss"
import { useForm } from "react-hook-form"
import { Events,Feed,FriendIcon,GroupIcon, News,Pages } from "../assets/icons"

const array = [
    { icon: Events, title: "Eventi", paragraph: "Organizza o trova eventi e altro da fare online e nelle vicinanze" },
    { icon: FriendIcon, title: "Amici",  paragraph: "Cerca Amici o persone che potresti conoscere" },
    { icon: GroupIcon, title: "Gruppi", paragraph: "Connettiti con persone che condividono i tuoi interessi" },
    { icon: News, title: "Sezione Notizie", paragraph: "Vedi i post pertinenti delle persone e delle pagine che segui" },
    { icon: Feed, title: "Feed", paragraph: "Vedi i post più recenti degli amici, gruppi, Pagine e altro ancora" },
    { icon: Pages, title: "Pagine", paragraph: "Scopri le aziende e connettiti con loro su Facebook" }
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
        justifyContent: 'space-evenly'
    },
    div_u: {
        width: 300,
        height: 400,
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
    wrapper_popup:{
        display:'flex'
    },
    div_d: {
        width: 200,
        height: 400,
        backgroundColor: '#FFFFFF',

    }
})



export const Popup = ({ index, styles, callBack }) => {
    const classes = useStyles()
    console.log(callBack)
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
                        {array.map((element,index)=>{
                            
                        })}
                    </div>
                        </div>
   
                    <div className={classes.div_d}>
                        sono nel secondo div
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
