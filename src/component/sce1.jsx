import { Main, } from "./hero"
import Image from "./images/book.png"
import Micro from "./images/microsoft.png"
import Google from "./images/google.png"
import Spotify from "./images/spotify.png"
import Tesla from "./images/tesla.png"
import Yass from "./images/yass.png"
import Tiktok from "./images/tiktok.png"
import Hand from "./images/hand.png"
import card1 from "./images/Rectangle 16.png"
import card2 from "./images/Rectangle 20.png"
import card3 from "./images/delex.png"
import arrow from "./images/arrow.png"
import chat from "./images/chat.png"

function Sec() {
    return (
        <Main>
            <div className="all">
                <div className="hang">
                    <p className="hel">Hello,</p>
                    <h2>We Foster Excellence in Tech Careers: Igniting Passion</h2>
                    <p className="hwe">Empowering Tech Talent to Reach New Heights and Ignite Innovation for a Future of Possibilities!</p>
                    <button className="btn1">Let’s Talk <img src={chat} alt="" /></button>
                    <button className="btn2"> Check our Services <img src={arrow} alt="" /></button>
                </div>
                <div className="hung">
                    <img src={Image} alt="" />
                </div>
            </div>
            <h3>Our Partners</h3>
            <div className="ims">
                <img src={Micro} alt="" />
                <img src={Google} alt="" />
                <img src={Spotify} alt="" />
                <img src={Tesla} alt="" />
                <img src={Yass} alt="" />
                <img src={Tiktok} alt="" />
            </div>

            <div className="new">
                <div className="word">
                    <p className="head">Who are We ?</p>
                    <h4>Unleashing Tech Talents</h4>
                    <p className="lg-word">GreyMatter goes beyond training and placement –
                        we're a dynamic ecosystem that connects aspiring tech professionals with industry
                        leaders. Our mission is two-fold: to empower individuals with the skills to excel in
                        today's competitive landscape, and to offer companies a curated selection of top tech
                        talent, from DevOps experts to software architects, frontend and backend gurus, QA engineers,
                        Scrum Masters, and more.</p>
                    <button className="btn3">Learn More<img src={arrow} alt="" /></button>
                </div>
                <div className="hand">
                    <img src={Hand} alt="" />
                </div>


            </div>

            <p className="word-pro">Our Process</p>
            <div className="process">
                <div className="proc">
                    <h1>
                        Turning Potential into Performance. Nurturing Excellence, Delivering Success
                    </h1>
                </div>               
                    <p className="pro">At GreyMatter, our process is meticulously crafted to ensure that both tech talent
                        and companies experience a seamless journey from skill development to successful
                        placements.</p>                
            </div>
            <div className="all-card">
                <div className="card">                    
                    <p className="card-title"><span>01</span>Discovery</p>
                    <p className="card-word">Our journey begins with Discovery. We delve deep into understanding unique strengths, passions, and aspirations.</p>
                </div>
                <div className="card">
                    <p className="card-title"><span>02</span>Immersion</p>
                    <p className="card-word">Our hands-on training approach immerses talents in the world of tech, equipping them with real-world skills that matter</p>
                </div>
                <div className="card">
                    <p className="card-title"><span>03</span>Mentorship</p>
                    <p className="card-word">Our Mentorship program pairs talents with seasoned industry experts who have walked the path they aspire to tread.</p>
                </div>
                <div className="card">
                    <p className="card-title"><span>04</span>Placement</p>
                    <p className="card-word">Our extensive network of forward-thinking companies eagerly awaits their skills, values, and aspirations.</p>
                </div>
            </div>
            <p className="student">Our student realities</p>
            <h2 className="stud-heading">The work they did that made our Client happy and satisfied</h2>
            <div className="allcards">
                <div className="cards">
                    <img src={card1} alt="" />
                    <p className="cards-title">Cloud  Solution</p>
                    <p className="cards-word">Delex Relay</p>
                </div>
                <div className="cards">
                    <img src={card2} alt="" />
                    <p className="cards-title">App Development</p>
                    <p className="cards-word">Homely</p>
                </div>
                <div className="cards">
                    <img src={card3} alt="" />
                    <p className="cards-title">DevOps Solution</p>
                    <p className="cards-word">ADOC</p>
                </div>

            </div>
            <div className="btn4">
            <button className="btn3">Explore All Projects<img src={arrow} alt="" /></button>
            </div>
            
        </Main>
        


    )

}
export default Sec;