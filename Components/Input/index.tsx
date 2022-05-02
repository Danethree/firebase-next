import { InputContainer, Inputs, Label, LabelContainer } from "./styles"


type InputProps = {
    typeInput: String,
    placeHolderInput: String,
    changed : (e: React.ChangeEvent<HTMLInputElement>) => void
    valueInput: String,
    labelName :String
}
const Input = (props:InputProps) =>{
   return(
<>
<LabelContainer>
      <Label>{props.labelName}</Label>
</LabelContainer>

<InputContainer>
    <Inputs type= {props.typeInput}
    placeHolder = { props.placeHolderInput }
    onChange = {props.changed}
    value = {props.valueInput}
    
    />
</InputContainer>


</>


  
  
   )
    
}


export default Input;