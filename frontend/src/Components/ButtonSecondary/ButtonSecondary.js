import { useDispatch } from "react-redux";
import { verbAdded, verbDeleted, submitClicked } from "../../Store/databaseSlice";
import { useEffect, useRef} from "react";
import "./ButtonSecondary.scss"



export default function ButtonSecondary(props)  {

    const dispatch = useDispatch()

    const button = useRef([])

    useEffect(() => {
      if (props.actionType === 'add'){
        button.current.classList.add('buttonSecondary__button--add')
      } else {
        button.current.classList.add('buttonSecondary__button--remove')
      }
    }, [])
    

    const buttonHandler = () => {
      dispatch(submitClicked({message: ''}))
      if(props.actionType === 'add'){
        dispatch(
          verbAdded({
            value: props.value,
            label: props.label,
            id: props.id,
            verbGroup: props.verbGroup,
            verbID: props.verbID,
            primaryVerb: props.primaryVerb,
            specialVerb: props.specialVerb,
            auxiliaryVerb: props.auxiliaryVerb,
            key: props.id,
            initialVerb: props.initialVerb,
            verbSearchList: props.verbSearchList,
          })
        );
      } else {
        dispatch(
          verbDeleted({
            value: props.value,
            label: props.label,
            id: props.id,
            verbGroup: props.verbGroup,
            verbID: props.verbID,
            primaryVerb: props.primaryVerb,
            specialVerb: props.specialVerb,
            auxiliaryVerb: props.auxiliaryVerb,
            key: props.id,
            initialVerb: props.initialVerb,
            userSearchList: props.verbSearchList,
          })
        );
      }
    }

    return (
      <div className="buttonSecondary">
        <button className="buttonSecondary__button" ref={button} onClick={buttonHandler}>{props.actionType}</button>
      </div>
    );
}
