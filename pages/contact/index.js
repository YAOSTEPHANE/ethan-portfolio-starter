import Circles from "../../components/Circles";

//icon 
import {BsArrowRight} from 'react-icons/bs';



//framer 
import { motion } from "framer-motion";

//variants
import {fadeIn} from '../../variants';

const Contact = () => {
  return(
   <div className="h-full bg-primary/30">
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center
    justify-center h-full">
      {/* text & form */}
      <div  className="flex flex-col w-full max-w-[700px]">
{/* text */}
<motion.h2 
variants={fadeIn('up, 0.2')} initial="hidden" animate="show" exit="hidden"
className="h2 text-center mb-12">Contactez-
<span className='text-accent'>vous !</span></motion.h2>
{/* form */}
<motion.form variants={fadeIn('up, 0.4')} initial="hidden" animate="show" exit="hidden" className="flex-1 flex flex-col gap-6 w-full mx-auto" >
  {/* input group */}
  <div className="flex gap-x-6 w-full">
    <input type="text" placeholder="Nom" className="input "/>
    <input type="text" placeholder="Email" className="input "/>
  </div>
  <input type="text" placeholder="Sujet" className="input "/>
  <textarea placeholder="message" className="textarea"></textarea>
<button  className="btn rounded-full border border-white/50 
  max-w-[170px] transition-all 
  px-8 duration-300 flex items-center justify-center hover:border-accent group">
  <span className="group-hover:-translate-y-[120%] group-hover:oppacity-0
  transition-all duration-500">Discutez</span>
  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
  group-hover:-translate-y-0 group-hiover:opacity-100 transition-all duration-300 absolute text-[22px]" />
</button>
</motion.form>
      </div>
    </div>
   </div>
   );
};

export default Contact;
