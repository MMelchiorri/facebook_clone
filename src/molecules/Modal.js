import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    overlay: {
        position: "fixed",
        background: "rgb(0,0,0,0.4)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        cursor: 'pointer'
    },
    modal: {
        backgroundColor: 'white',
        padding: 16,
        minWidth: '300px',
        minHeight: '300px',
        borderRadius: 16,
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        top: '50%'
    },
    close: {
        cursor: 'pointer'
    }
})

const Modal = ({ children, onClose }) => {
    const classes = useStyle();
    return <>
        <div className={classes.overlay}></div>
        <div className={classes.modal}>
            <span className={classes.close} onClick={onClose}>X</span>
            {children}
        </div>
    </>
}

export default Modal;
