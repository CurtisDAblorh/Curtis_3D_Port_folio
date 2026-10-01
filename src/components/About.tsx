import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { SectionWrapper } from '../hoc';
import {styles} from '../styles';
import {services} from '../constants';
import type {Service} from '../types';
import {fadeIn, textVariant} from '../utils/motion';


type ServiceCardProps = Service & {
  index: number;
};

const ServiceCard= ({index, title, icon}: ServiceCardProps) => {
return (
 <Tilt className="xs:w-[250px] w-full">
 <motion.div 
 variants= {fadeIn("right", "spring", 0.5*index,0.75)}
 className="w-full bg-gradient-to-b from-blue-600 to-fuchsia-600 p-[1px] rounded-[20px] shadow-card"
 >
<div
className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">

<img src={icon} alt={title} 
className="w-16 h-16 object-contain" />

<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>



</div>
 </motion.div>
 {title}
</Tilt> )

}
const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
      Introduction
    </p>
    <h2 className={styles.sectionHeadText}> 
    Overview
    </h2>
    
   </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} 
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
Hi, my name is <a className="text-purple-700"> Curtis</a> a
<a className="text-purple-700"> Front End React Developer</a> based in London,

I have in-depth knowledge and hands-on experience in
 creating engaging and responsive user interfaces 
 using the React framework as well as it&apos;s many dependencies. 
 
 With a strong foundation in HTML, CSS, and JavaScript,
  combined with expertise in React and its ecosystem, I am proficient in developing modern, interactive web applications.

  <p className="mt-4">In my spare time I love to create and animate 3D characters, 2 of which have been used in this portfolio.
   Lets see if you can 
   <a className="text-purple-700"> spot them!</a></p>

    </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=> (
          <ServiceCard key={service.title} index={index} {...service} />



        ))}

      </div>

   </>
  )
}

export default SectionWrapper (About , "about");