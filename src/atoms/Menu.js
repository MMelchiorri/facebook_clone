import { createUseStyles } from "react-jss"
import { Events, Feed, FriendIcon, GroupIcon, News, Pages } from "../assets/icons"
import Action from '../atoms/Action'

const array_div_u = [
    { icon: Events, title: "Eventi", paragraph: "Organizza o trova eventi e altro da fare online e nelle vicinanze" },
    { icon: FriendIcon, title: "Amici", paragraph: "Cerca Amici o persone che potresti conoscere" },
    { icon: GroupIcon, title: "Gruppi", paragraph: "Connettiti con persone che condividono i tuoi interessi" },
    { icon: News, title: "Sezione Notizie", paragraph: "Vedi i post pertinenti delle persone e delle pagine che segui" },
    { icon: Feed, title: "Feed", paragraph: "Vedi i post più recenti degli amici, gruppi, Pagine e altro ancora" },
    { icon: Pages, title: "Pagine", paragraph: "Scopri le aziende e connettiti con loro su Facebook" }
]

const useStyles = createUseStyles({

    wrapper:{
        display:'flex',
        gap:10,
    },
    content:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        gap:24 ,
        borderRadius:8,
        minWidth:100,
        minHeight:100
    }

})

export const Menu = () => {
    const classes = useStyles()
  return (
       <div>
        <h1>Menu</h1>
        <div className={classes.wrapper}>
            <div className={classes.content}>
                {array_div_u.map((element,index)=>{
                    return <Action icon={<element.icon />} text={element.title} subtitle={element.paragraph} />
                })}
            </div>
            <div className={classes.content}></div>
        </div>
        {}
       </div>
    )

}
