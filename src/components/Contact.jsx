import React from 'react';
import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {Funkomepng } from '../assets';
import {styles} from '../styles';
import { EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn, fadeIn} from '../utils/motion';

// /template_3a57i3n
//service_t4bh3d1
//cLTyLZXVMCnA020gf
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(
    {name: '', 
    email:'',
    message:'',


    }
  )
var  [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const {name, value} = e.target;
  setForm({...form, [name]: value})
}
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
emailjs.send(
  'service_t4bh3d1',
  'template_3a57i3n',
  {
    from_name: form.name,
    to_name: 'Curtis',
    from_email: form.email,
    to_email:'mensah.curtis@gmail.com',
    message: form.message,
  },
'cLTyLZXVMCnA020gf',
)
.then(()=>{
  setLoading=(false);
  alert('Thank you. I will respond as soon as I am available');

  setForm(
    {name: '', 
    email:'',
    message:'',

    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong, please email me at mensah.curtis@gmail.com or try again.')
    }



  )
})
}

  return (
  
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    
    <motion.div 
    variants={slideIn('left',"tween", 0.2,1)}
    className="flex-[0.75] bg-black-100 p-8 rounded-2xl mx-auto">
    
    
 <div className="absolute inset-0 flex justify-end m-1 card-img_hover">
 <div>
      
    </div>
 </div>
<p className={styles.sectionSubText}>Get
 in Touch!</p>
<h3 className={styles.sectionHeadText2}>Contact me.<div className="flex w-[20%] h-[20%] items-end"><img src={Funkomepng}
alt="Funkome"
className=" xl:ml-[160%] xs:ml-[60%]" /></div></h3>


<form
ref={formRef}
onSubmit={handleSubmit}
className="mt-12 flex flex-col gap-8"
>
<label 
className="flex flex-col">
  <span
className=" text-white font-medium mb-4" 
  >Name</span>

  <input
  type="text"
  name="name"
  value={form.name}
  onChange= {handleChange}
  placeholder="Whats your name?"
  className="bg-tertiary py-4 px-6 
  placeholder:text-secondary
  tex-white rounded-lg outline border-none font-medium">
 </input>
</label>


<label 
className="flex flex-col">
  <span
className=" text-white font-medium mb-4" 
  >Email</span>
  <input
  type="email"
  name="email"
  value={form.email}
  onChange= {handleChange}
  placeholder="Whats your email?"
  className="bg-tertiary py-4 px-6 
  placeholder:text-secondary
  tex-white rounded-lg outline border-none font-medium">
 </input>
</label>


<label 
className="flex flex-col">
  <span
className=" text-white font-medium mb-4" 
  >Message</span>

  <textarea
  rows="7"

  name="message"
  value={form.message}
  onChange= {handleChange}
  placeholder="What's your message to me"
  className="bg-tertiary py-4 px-6 
  placeholder:text-secondary
  tex-white rounded-lg outline border-none font-medium">
 </textarea>
</label>

<button
type="submit"
className='bg-tertiary outline-none  py-3 px-8 font-bold shadow-md rounded-xl shadow-primary '>

{loading ? 'Sending...' : 'Send'}
</button>

</form>

      

    </motion.div>
    
  
    
    </div>

  )
}

export default SectionWrapper(Contact, "contact");