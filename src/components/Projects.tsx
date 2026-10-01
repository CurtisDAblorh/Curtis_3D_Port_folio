import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { SectionWrapper } from '../hoc';
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import {github} from '../assets';
import {webpage} from '../assets';
import {projects} from '../constants'
import type {Project} from '../types';


type ProjectCardProps = Project & {
  index: number;
};

const ProjectCard= ({index, name, description, tags, image, source_code_link, webpage_link}: ProjectCardProps) => {
return (

 <motion.div 
 variants= {fadeIn("up", "spring", 0.5*index,0.75)}
 className=" bg-gradient-to-b from-blue-600 to-fuchsia-600 p-[1px] rounded-2xl"
 >
<Tilt 
options=
{
 { max:45, 
  scale:1, 
  speed:450}
}
className=" bg-tertiary rounded-2xl 
 p-3 sm:w-[350px] w-full"
>


<div className="relative w-full h-[230px]">

<img src={image} alt={name} 
className="w-full h-full object-cover rounded-2xl" />

<div className="absolute inset-0 flex justify-end m-1 card-img_hover">
  <div onClick={() => window.open (source_code_link, "_blank")}
  className="black-gradient rounded-2xl flex 
  justify-center w-20 h-10 items-center cursor-pointer ">
<img src={github}
alt="github"
className="w-1/2 h-1/2 object-contain" />
<div className=" absolute text-[10px] mt-6">code</div>

  </div>
</div>


<div className="absolute inset-0 flex justify-end m-1 mt-[50px] card-img_hover">
  <div onClick={() => window.open (webpage_link, "_blank")}
  className="bg-blue-500 rounded-2xl flex 
  justify-center w-20 h-10 items-center cursor-pointer ">
<img src={webpage}
alt="website"
className="w-1/2 h-1/2 mb-[8px] object-contain" />
<div className=" absolute text-[10px] mt-6">website</div>

  </div>
</div>
</div>

<div className="mt-5">
<h3 
className="text-white text-[20px] font-bold text-center">
{name}
<p className="mt-2 text-secondary text-[14px]">{description}</p>
</h3>
</div>

<div className="mt-3 gap-2 flex flex-wrap">
  {tags.map((tag)=>(
    <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
  ))}
</div>



</Tilt>
 </motion.div>
)

}
const Projects = () => {
  return (
   <>
   <motion.div variants={textVariant()} >
    <p className={styles.sectionSubText} >
      My Work...
    </p>
    <h2 className={styles.sectionHeadText}> 
   My Projects
    </h2>
    
   </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} 
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
During my journey as a front-end developer, I have successfully completed some notable personal projects
 that demonstrate my skills and expertise in creating interactive and visually appealing user interfaces.
  Here is a summary of my project showcase so far:
    </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((project, index)=> (
          <ProjectCard key={`project-${index}`}
           index={index}
            {...project} />



        ))}

      </div>

   </>
  )
}

export default SectionWrapper (Projects , "projects");