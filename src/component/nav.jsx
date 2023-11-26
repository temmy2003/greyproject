import { Title, } from "./hero"

function Nav() {
   return (
      <div className="nav">
         <Title>
            <h1><span>Grey</span>Matter</h1>

            <ul>
               <li>Home</li>
               <li>Who are we?</li>
               <li>Our process</li>
               <li>Testimonials</li>
            </ul>

         </Title>
      </div>
   )
}

export default Nav