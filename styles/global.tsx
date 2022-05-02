import { createGlobalStyle } from 'styled-components'
import tw from 'tailwind-styled-components'

export default createGlobalStyle `
    *{
        font-family: sans-serif;
        box-sizing: border-box;
    }

`

export const Main = tw.main`
    flex 
    
    justify-center
    align:center
    mt-10

    

`

export const FormContent = tw.div`
    m-10
    
`