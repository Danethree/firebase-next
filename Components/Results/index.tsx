import { Container,Topic,Subtopic,Name,Email, Title, Description } from "./styles"
import firebase from "../../firebaseConnection"
import {useEffect} from 'react'
import { useState } from 'react';

const Results = () =>{
   const[results,setResults] = useState([])
     useEffect(() =>{
         async function buscaPost(){
             await firebase.firestore().collection('user')
             .get()
             .then(snapshot =>{
                let lista:any = []
                snapshot.forEach((doc)=>{
                    lista.push({
                        id:doc.id,
                        Name:doc.data().Name,
                        Email: doc.data().Email
                    })
                })
                setResults(lista)
             })
             .catch(()=>{
                 alert('Não foi possível carregar os dados. Tente novamente mais tarde.')
             })
         }
         buscaPost();
     },[])
    return(
    <Container>

        <Title>
            User Register.com
        </Title>

        <Description>
            Resultados de nomes e emails:
        </Description>
        <Topic>
        {results.map((data)=>{
                return(
                    <Subtopic key = {data.id}>
                     <Name><b>Nome: </b> {data.Name}</Name>
                    <Email><b>E-mail:</b> {data.Email}</Email>
                    </Subtopic>
                )
            })}
        </Topic>
    
    </Container>
    )
}

export default Results