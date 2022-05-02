import { Btn, ContainerBtn } from "./styles";


type ButtonProps = {
    name: string;
    clicked: (event: React.MouseEvent<HTMLButtonElement>)=>void
}
const Button = (props: ButtonProps) => {
    return (
       <ContainerBtn>
            <Btn onClick = {props.clicked}>{props.name}</Btn>
       </ContainerBtn>
    )
}

export default Button