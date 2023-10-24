import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    overlay: {
        position: "absolute",
        background: "rgb(0,0,0,0.4)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        cursor: 'pointer',
    },
    modal: {
        backgroundColor: 'white',
        padding: 16,
        minWidth: '400px',
        minHeight: '400px',
        borderRadius: 16,
        position: 'absolute',
        zIndex: 2,
        left: '50%',
        transform: 'translate(-50%,-50%)',
        top: '50%',

    },

    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderLeftColor: 'black',
    },
    close: {
        cursor: 'pointer',
        backgroundColor: '#E4E6EB',
        width: 36,
        height: 36,
        textAlign: 'center',
        lineHeight: 2,
        borderRadius: 18,
        position: 'absolute',
        top: 30
    }
})

const Modal = ({ children, onClose, title }) => {
    const classes = useStyle();
    return <>
        <div className={classes.overlay}></div>
        <div className={classes.modal}>
            <div className={classes.title}>
                <h3>{title}</h3>
            </div>
            <div className={classes.button}>
                <span className={classes.close} onClick={onClose}>X</span>
            </div>
            <hr />
            {children}
        </div >
    </>
}

export default Modal;
