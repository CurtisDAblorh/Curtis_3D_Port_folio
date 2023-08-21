import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { SectionWrapper } from '../hoc';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import Lottie from 'lottie-react';
import html from '../assets/html.json'
import react from '../assets/react.json'
import css from '../assets/css.json'
import javascript from '../assets/javascript.json'
import api from '../assets/api.json'
import github from '../assets/github.json'
import {ReactComponent as Threejs} from '../assets/threejs.svg'
import {ReactComponent as Git} from '../assets/git.svg'
import {ReactComponent as Commercejs} from '../assets/commercejs.svg'
import {ReactComponent as Vite} from '../assets/vite.svg'
// import {ReactComponent as HtmlIcon } from '../assets/icons8-html.svg';
// import Lottie from "lottie-react";

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
           className="flex flex-wrap my-auto justify-center">
          <div className= "w-[150PX]">
          <Lottie animationData={html}/>
          <p className='justify-center flex'>HTML</p>
          </div>

          <div className= "w-[150PX]">
          <Lottie animationData={css} className="pb-0"/>
          <p className='justify-center flex'>CSS</p>
          </div>

          <div className= "w-[150PX] ">
          <Lottie animationData={javascript} className="mt-7 mb-4"/>
          <p className='justify-center itme flex'>Javascript</p>
          </div>

          <div className= "w-[120PX]">
          <svg className="mt-12 mb-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="typescript"><path fill="#007acc" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"></path></svg>
          <p className='justify-center flex'>Typescript</p>
          </div>

          <div className= "w-[150PX] ">
          <Lottie animationData={react} className="mt-7 mb-4"/>
          <p className='justify-center flex'>React</p>
          </div>

          <div className= "w-[150PX] ">
          <Lottie animationData={api} className="mt-7 mb-4"/>
          <p className='justify-center flex'>REST API</p>
          </div>

          <div className= "w-[150PX] ">
          <svg className="mt-7 mb-4 px-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="150px" height="150px"><path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"/></svg>
          <p className='justify-center flex'>Tailwind Css</p>
          </div>

          <div className= "w-[150PX] ">
          <svg className="mt-7 mb-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="150px" height="150px"><path fill="#03A9F4" d="M41.765,38H6.235C4.439,38,3,36.63,3,34.848v-22.62C3,10.445,4.439,9,6.235,9h35.529C43.56,9,45,10.445,45,12.228v22.62C45,36.63,43.56,38,41.765,38z"/><path fill="#FFF" d="M36.847,23.277c0.069-1.101,0.354-1.613,0.926-1.613c0.548,0,0.848,0.527,0.886,1.613H36.847z M40.953,23.935c0-1.23-0.27-2.203-0.781-2.885c-0.54-0.697-1.346-1.05-2.359-1.05c-2.088,0-3.396,1.546-3.396,4.022c0,1.384,0.345,2.427,1.038,3.085C36.072,27.702,36.958,28,38.085,28c1.047,0,2.017-0.251,2.632-0.655l-0.268-1.688c-0.607,0.331-1.31,0.511-2.095,0.511c-0.47,0-0.806-0.103-1.044-0.308c-0.262-0.219-0.408-0.572-0.46-1.076h4.068C40.944,24.669,40.953,24.106,40.953,23.935z M31.057,25.533c-0.221,0.377-0.531,0.58-0.89,0.58c-0.241,0-0.472-0.053-0.669-0.147v-3.718c0.428-0.441,0.814-0.491,0.942-0.491c0.631,0,0.941,0.681,0.941,2.017C31.384,24.534,31.269,25.126,31.057,25.533z M33.113,20.709c-0.438-0.571-1.059-0.853-1.845-0.853c-0.712,0-1.343,0.302-1.934,0.936l-0.142-0.784H27V31l2.481-0.416l0.017-2.799c0.387,0.121,0.779,0.185,1.131,0.185c0.627,0,1.53-0.157,2.235-0.926c0.667-0.73,0.996-1.862,0.996-3.361C33.86,22.358,33.615,21.353,33.113,20.709z M23.527,20.008H26V28h-2.473V20.008z M24.784,19.233c0.718,0,1.3-0.594,1.3-1.313c0-0.733-0.584-1.32-1.3-1.32c-0.738,0-1.323,0.587-1.323,1.32C23.461,18.64,24.046,19.233,24.784,19.233z M22.463,19.9c-0.705,0-1.279,0.372-1.491,1.031l-0.15-0.921h-2.17V28h2.482v-5.25c0.312-0.382,0.749-0.52,1.362-0.52c0.127,0,0.256,0,0.438,0.026v-2.294C22.751,19.921,22.6,19.9,22.463,19.9z M17.68,21.855l0.308-1.848h-1.601v-2.245l-2.129,0.354l-0.309,1.891L13.2,20.13l-0.277,1.726h1.024v3.622c0,0.941,0.238,1.599,0.72,1.998c0.421,0.335,1.011,0.493,1.843,0.493c0.654,0,1.043-0.112,1.297-0.184v-1.959c-0.133,0.041-0.48,0.115-0.716,0.115c-0.48,0-0.705-0.25-0.705-0.825v-3.265h1.294V21.855z M10.531,23.05c-0.707-0.265-1.118-0.473-1.118-0.803c0-0.275,0.229-0.434,0.646-0.434c0.737,0,1.509,0.281,2.023,0.544l0.3-1.829C11.964,20.326,11.113,20,9.94,20c-0.84,0-1.535,0.22-2.014,0.621c-0.532,0.429-0.802,1.043-0.802,1.786c0,1.347,0.824,1.918,2.166,2.402c0.857,0.308,1.154,0.527,1.154,0.868c0,0.322-0.274,0.514-0.795,0.514c-0.624,0-1.641-0.31-2.327-0.703l-0.282,1.853C7.616,27.663,8.676,28,9.788,28c0.887,0,1.622-0.21,2.102-0.606c0.568-0.432,0.844-1.077,0.844-1.905C12.736,24.106,11.891,23.531,10.531,23.05L10.531,23.05z"/></svg>
          <p className='justify-center flex'>Stripe</p>
          </div>
          
          <div className= "w-[150PX] h-[193px] ">
          <Threejs className=""/>
          <p className='justify-center flex'>Three Js</p>
          </div>

          <div className= "w-[150PX] ">
          <Lottie animationData={github} className="mt-7 mb-4"/>
          <p className='justify-center flex'>Git Hub</p>
          </div>

          <div className= "w-[150PX] ">
          <Git className="mt-7 mb-4"/>
          <p className='justify-center flex'>Git</p>
          </div>

          <div className= "">
          <Commercejs className="mt-7 mb-4 px-3 w-[150px] h-[150px]"/>
          <p className='justify-center flex'>Commerce Js</p>
          </div>

          <div className= "">
          <Vite className="mt-7 mb-4 px-3 w-[150px] h-[150px]"/>
          <p className='justify-center flex'>Vite</p>
          </div>

         




          </motion.div>
          
</>
 )
}

export default SectionWrapper(Tech,'#tech');