import { createUseStyles } from "react-jss";
import { Arrows, ThreeDots, Publish, SearchIcon } from "../assets/icons";
import { useForm } from "react-hook-form";
import { useState } from "react"
import PostaChat from "./PostaChat";
import CommunityChat from "./CommunityChat";

const useStyles = createUseStyles({
  //post part
  chatStyle: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 360,
    maxHeight: 600,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-around",
    minWidth: 100,
  },
  icon: {
    width: 30,
    height: 30,
    paddingTop: 8,
    paddingLeft: 8,
    "&:hover": {
      backgroundColor: "#D9D9D9",
      borderRadius: 20,
    },
  },
  chatContainer: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    maxWidth: 200,
    display: 'flex',
    justifyContent: 'space-around',
    padding: 14
  },
  buttonSelected: {
    border: 'none',
    padding: 8,
    color: '#005FC6',
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 20,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  buttonNotSelected: {
    border: 'none',
    padding: 8,
    color: '#050505',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#F2F2F2',
      borderRadius: 20,
    }
  }
});

const arrayIcon = [{ icon: ThreeDots }, { icon: Arrows }, { icon: Publish }];

export const Chat = () => {
  const classes = useStyles();
  const { register } = useForm();
  const [buttonSelected, setButtonSelected] = useState([true, false])
  const changeStateButton = () => {
    setButtonSelected([!buttonSelected[0], !buttonSelected[1]]);
  };


  return (
    <div className={classes.chatStyle}>
      <div className={classes.header}>
        <h1 style={{ fontSize: 24 }}>Chat</h1>
        <div className={classes.iconContainer}>
          {arrayIcon.map((elem, index) => {
            return (
              <div className={classes.icon} key={index}>
                <elem.icon />
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.chatContainer}>
        <div>
          <span style={{ position: "relative", left: 20 }}>
            <SearchIcon />
          </span>
        </div>
        <input
          style={{
            border: "none",
            width: "80%",
            padding: "10px 0px 10px 30px",
            borderRadius: 20,
            color: "black",
            backgroundColor: "#F0F2F5",
          }}
          type="text"
          {...register("text chat")}
          defaultValue={"Cerca su messegner"}
        />
      </div>
      <div className={classes.buttonContainer}>
        <button className={buttonSelected[0] ? classes.buttonSelected : classes.buttonNotSelected} onClick={changeStateButton}>Posta</button>
        <button className={buttonSelected[1] ? classes.buttonSelected : classes.buttonNotSelected} onClick={changeStateButton}>Community</button>
      </div>
      {buttonSelected[0] ? (
        <PostaChat />
      ) :
        <CommunityChat />
      }
      <div style={{ borderTop: '1px solid #E0E0E0', marginTop: 5 }}>
        <p style={{ textAlign: 'center', color: '#0861F2', cursor: 'pointer' }}>Vedi tutti su Messenger</p>
      </div>
    </div>

  );
};
