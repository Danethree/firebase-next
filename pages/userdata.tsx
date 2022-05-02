import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Results from "../Components/Results";
import { Main } from "../styles/global";

export default function Userdata() {
    return(
      <>
       <Header/>
       <Main>
           <Results/>
       </Main>
       <Footer/>
      </>
       
    )
}