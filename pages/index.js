import styles from '../styles/Home.module.css'
import {Button} from "components";
import {useSelector, useDispatch} from "react-redux"
import {exampleAction} from "actions/exampleAction/";


export default function Home() {

    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state => state.exampleReducer);
    console.log(items);

    return (
        <div className={styles.container}>

            <Button text={"Short Form"} onClick={()=>{
                dispatch(exampleAction())
            }} loading={false}/>

            {
                items.map((item, index) => (<p key={index}>{item}</p>))
            }

        </div>
    )
}
