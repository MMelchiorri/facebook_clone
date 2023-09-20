import { createUseStyles } from "react-jss"
import cx from 'classnames'

const useStyle = createUseStyles({

    popup: {
        position: 'fixed',
        top: 60,
        right: 32,
        zIndex: 10,
        minHeight:300,
        borderRadius:20,
        backgroundColor: '#F7F8FA',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
        padding:16,
    }

})


export const Popup = ({ component,className }) => {
    const classes = useStyle()

    return (<div className={cx(classes.popup,className)}>
        {component}
    </div>)
}
