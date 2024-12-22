import { styles } from "../styles"
import { uv } from '../assets'



const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Yuvraj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user <br className="sm:block hidden"/> interface and web application
          </p>
        </div>
        <div>
         <img src={uv} alt="uv" className="w-300 h-600 lg:block md: hidden mx-auto pt-48 ml-28"/>
        </div>
      </div>
      
    </section>

  )
}

export default Hero