import Globe from 'react-globe.gl'
import { grid1 , grid3, mern, grid4, tick, copy } from '../assets'
import Button from './Button'
import { useState } from 'react'

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' singhyuvraj0717@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
  <section className="c-space my-20">
    <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
      <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
          <img src={grid1} alt="gird-1" className="w-full sm:h-[276px] h-fit object-contain" />
          <div>
            <p className='grid-headtext'>Hi, I'm Yuvraj</p>
            <p className='grid-subtext'>T have honed my skills in frontend and backend development, with a focus on Morden inferface websits,</p>
          </div>
        </div>
      </div>

      <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
          <img src={mern} alt='grid2' className='w-full sm:w-[276px] h-fit object-contain'/>
          <div>
            <p className='grid-headtext'>Tech Stack</p>
            <p className='grid-subtext'>I specialize in Tailwindcss, JavaScript with a focus on React and Next.js ecosystems.</p>
          </div>
        </div>
      </div>

      <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
          <div className='rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center'>
            <Globe 
            height={326}
            width={326}
            backgroundColor='rgba(0, 0, 0, 0)'
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[{ lat: 40, lng: -100, text: 'Hii, I,m Yuvraj', color: 'white', size: 15 }]}
            />
          </div>
          <div>
            <p className='grid-headtext'>Tech Stack</p>
            <p className='grid-subtext'>I am based in India.</p>
            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
          </div>
        </div>
      </div>
      <div className='xl:col-span-2 xl:row-span-3'>
        <div className='grid-container'>
          <img src={grid3} alt="grid3" className='w-full sm:h-[266px] h-fit object-contain' />
          <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
        </div>
      </div>
      <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">singhyuvraj0717</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default About