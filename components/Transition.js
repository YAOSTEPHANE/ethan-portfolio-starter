//framer motion
import { motion } from 'framer-motion'
//variants
const transitionVariants = {
  init: {x: '100%', width: '100%'},
  anim: {x: '0%',width: '0%'},
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  },
}
const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30
       bg-[#2e2257]' variants={transitionVariants} initial="initial" animate="animate"
       exit="exit" transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
        
        </motion.div>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30
       bg-[#2e2257]' variants={transitionVariants} initial="initial" animate="animate"
       exit="exit" transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
        
        </motion.div>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30
       bg-[#4b3792]' variants={transitionVariants} initial="initial" animate="animate"
       exit="exit" transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
        
        </motion.div>
      
    </>
  );
};

export default Transition;
