import React from "react"
import style from "./Modal.module.css"
import Modal from 'react-modal';



interface ModalProps {
    show:boolean
    close:()=>void,
    children?:React.ReactNode
}

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'

    }
};


const ModalContainer = (props: ModalProps) => {

    return (
        <div className={`${style.modal__container} ${props.show ? style.show : style.hide}`}>

            <div className={style.item__wrapper}>
                <div >
                   <span onClick={props.close}>
                        {/*<ion-icon name="close-outline" style={{color:"red", fontSize: 30}}/>*/}
                   </span>
                </div>
                {
                    props.children
                }
            </div>

        </div>
  )
};

export default ModalContainer