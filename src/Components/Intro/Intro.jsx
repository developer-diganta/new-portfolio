import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <div className='flex flex-col h-[100vh] w-full justify-center items-center text-primary gap-3'>
      <motion.div
        className='text-7xl font-sans'
        initial={{ y: -100, opacity: 0 }}  // Starts from above and invisible
        animate={{ y: 0, opacity: 1 }}    // Slides down to original position and becomes visible
        transition={{ duration: 1 }}
      >
        Hi! I<span className='text-accent'>'</span>m <span className='text-accent'>Diganta!</span>
      </motion.div>

      <motion.div
        className='text-3xl'
        initial={{ y: 100, opacity: 0 }}  // Starts from below and invisible
        animate={{ y: 0, opacity: 1 }}    // Slides up to original position and becomes visible
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        A <span className='text-accent'>FullStack</span> Developer
      </motion.div>
    </div>
  );
}
