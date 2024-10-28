import Navbar from "./Component/Navbar/Navbar";
import FirstLayout from "./Component/Layout/FirstLayout";
import Flipbio from "./Component/Flipbio/Flipbio";
import ProfessionalSkills from "./Component/ProfessionalSkills/ProfessionalSkills";
import ContactLayout from "./Component/ContactLayout/ContactLayout";
import Footer from "./Component/Footer/Footer";




function App(){
    return(
        <div className="App">
            <Navbar />
            <FirstLayout/>
            <Flipbio />
            <ProfessionalSkills />
            <ContactLayout />
            <Footer/>
            
          

        </div>
    );
}

export default App;