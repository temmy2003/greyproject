import { Foot, } from "./hero"
import facebook from "./images/feather_facebook.png"
import instagram from "./images/feather_instagram.png"
import twitter from "./images/feather_twitter.png"
function Footer() {
   return (
      <div className="foot">
         <Foot>
            <div className="land">
               <div className="word">
                  <h1><span>Grey</span>Matter</h1>
                  <p>We specialize in nurturing tech talents through
                     immersive training, personalized mentorship, and
                     strategic placements.</p>
               </div>
               <div className="item">
                  <div>
                     <ul>
                        <p>About</p>
                        <li>About Us</li>
                        <li>Blogs</li>
                        <li>careers</li>
                        <li>Contact Us</li>
                     </ul>
                  </div>
                  <div className="logo">
                     <p>Follow Us </p>
                    <div className="cont-logo">
                    <img src={facebook} alt="" />
                     <img src={instagram} alt="" />
                     <img src={twitter} alt="" />
                    </div>
                  </div>
               </div>
            </div>
               <div className="landing-foot">
                  <div>
                  <p>GreyMatter Inc. 2023 Devcare</p>

                  </div>
               </div>
         </Foot>
      </div>
   )
}

export default Footer