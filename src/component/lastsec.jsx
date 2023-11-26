import group from "./images/Group 255.png"
import arr1 from "./images/Group 10.png"
import arr2 from "./images/Group 9.png"
import { Last } from "./hero";


function Lastsec(){
    return(
        <Last>
            <div className="section">
                <p className="testmonial">Testmonial</p>
                <h2 className="veil">Unveiling the Transformative <span>GreyMatter</span> Experience Through the Words of Our Success Stories</h2>
                <div className="crd">
                    <div className="cad">
                        <div>
                        <p className="cad-word">GreyMatter's personalized approach
                            to training allowed me to tailor my learning to my interests.
                            The mentorship was invaluable, providing
                            insights that went beyond textbooks.</p>
                        <div className="cad-img">
                            <img src={group} alt="" />
                            <div className="cad-img-word">  
                                 <h5>Smail yefsssah</h5>
                                <p>Software Engineer</p></div>
                        </div>
                        </div>
                    </div>
                    <div className="cad">
                        <div >
                        <p className="cad-word">Partnering with GreyMatter 
                        has been a game-changer for our company. Their 
                        selection of top-tier tech talent is unparalleled, and the
                         seamless placement process saved us time and resources.</p>
                        <div className="cad-img">
                            <img src={group} alt="" />
                            <div className="cad-img-word">
                            <h5>Smail yefsssah</h5>
                            <p>CTO, TechCorp Inc.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                    <div className="arrows">
                        <img src={arr1} alt="" />
                        <img src={arr2} alt="" />
                    </div>
            </div>
        
        </Last>    
    )
}
export default Lastsec;