import React from 'react'
// import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';
import { styles } from '../utils/styles';
import { Tilt } from 'react-tilt';

const ServiceCard=({index,title,icon})=>{
  return(
<Tilt className="xs:w-[250px] w-[250px]">
<motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className=' w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
<div options={{max:45,scale:1, speed:450}} className=' bg-teal-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
<img src={icon} alt={title} className=' w-16 h-16 object-contain'/>
</div>
</motion.div>
</Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className=" text-white sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className=' mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px]'>
    As a tech enthusiast, I am always on the lookout for the latest tools and technologies to help me create innovative solutions. My tech stack includes React.js, Next.js, and Tailwind.css, which I use to develop dynamic and responsive user interfaces. I am also well-versed in Solidity, Hardhat, Ethers.js, and Wagmi, which are essential tools for building decentralized applications on the Ethereum blockchain. In addition, I am experienced in working with the Graph Protocol, which enables me to build scalable and efficient decentralized data applications. 
    </motion.p>

    <div className="mt-4 flex flex-wrap gap-10">
    {services.map((service,index)=>(
      <ServiceCard key={service.title} index={index} icon={service.icon}/>
   ) )}
    </div>
    </>
  )
}

export default About