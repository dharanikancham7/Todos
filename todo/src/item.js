
import { useState } from "react"
import "./item.css"
const Item=(props)=>{

    // const [isEditing, setIsEding] = useState(false)
    // const [updatedText, setUpdatedText ] = useState(props.write)

    const {each,onDelete,onEdit}=props
    const {write,id}=each
    const onRemove=()=>{
        onDelete(id)
    } 
    const onEditing=()=>{
        onEdit(id)
        // if(!isEditing){
        //     setIsEding(true)
        // }else{
        //     setIsEding(false)
        //     onEdit(id,updatedText)

        // }
    }
    return(
        <div className="con">
            <h1>{write}</h1>

            {/* <input type='text' defaultValue={write} disabled={!isEditing} onChange={(e)=> setUpdatedText(e.target.value)}/> */}
            
           <button className="but"  type="button" onClick={onRemove}>delete</button> 
           <button type="button" onClick={onEditing}>{isEditing ? 'Save' : 'edit' }</button>
        
        </div>
    )



}
export default Item