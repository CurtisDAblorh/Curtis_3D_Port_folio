import {motion} from 'framer-motion';
import { SectionWrapper } from '../hoc';
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import {techStack} from '../constants/techStack';
import {TechCard} from './molecules/TechCard';

const Tech = () => {
  return (
<>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
              Skills & Experience...
            </p>
            <h2 className={styles.sectionHeadText}>
              Tech Stack
            </h2>
          </motion.div> 

          <motion.div variants= {fadeIn("up", "spring", 0.5,0.75)}
           className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10">
            {techStack.map((tech, index) => (
              <TechCard key={tech.name} index={index} {...tech} />
            ))}
          </motion.div>
</>
 )
}

export default SectionWrapper(Tech,'#tech');
