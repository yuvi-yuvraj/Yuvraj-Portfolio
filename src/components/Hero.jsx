import { styles } from "../styles"
import { uv } from '../assets'
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Yuvraj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user <br className="sm:block hidden"/> interface and web application
          </p>
        </div>
        <div className="absolute bottom-0 right-0">
         <img src={uv} alt="uv" className="w-[650px] h-[900px] lg:block md: hidden mx-auto pt-40 ml-28"/>
        </div>
        
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      <div className="flex flex-row relative pt-96 mx-auto">
        <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
          <li>
            <a
              href="https://www.linkedin.com/in/yuvraj-yuvi/"
              target="_blank"
            >
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://x.com/YuvrajS34374" target="_blank">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/invites/contact/?igsh=zmmo7x2nz1qd&utm_content=onrti78">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:singhyuvraj0717@gmail.com" target="_blank">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/yuvi-yuvraj">
            <svg className="w-9 hover:text-white" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor"><path className="cls-1" d="M500,121c-214.58,0-388.59,174-388.59,388.58,0,171.69,111.35,317.35,265.74,368.74,19.42,3.59,26.56-8.43,26.56-18.7,0-9.26-.37-39.88-.53-72.35-108.11,23.51-130.92-45.84-130.92-45.84-17.68-44.92-43.15-56.86-43.15-56.86-35.25-24.12,2.66-23.63,2.66-23.63,39,2.75,59.57,40,59.57,40,34.66,59.41,90.9,42.23,113.08,32.3,3.49-25.11,13.56-42.25,24.67-52-86.31-9.83-177-43.15-177-192,0-42.42,15.18-77.09,40-104.3-4-9.79-17.34-49.31,3.76-102.84,0,0,32.63-10.44,106.89,39.83a368.75,368.75,0,0,1,194.61,0c74.17-50.27,106.75-39.83,106.75-39.83,21.15,53.53,7.85,93,3.81,102.84,24.92,27.21,40,61.87,40,104.3C747.9,638.55,657,671.41,570.47,681c13.94,12.06,26.36,35.71,26.36,72,0,52-.45,93.84-.45,106.64,0,10.34,7,22.46,26.69,18.64,154.31-51.44,265.52-197,265.52-368.68C888.59,295,714.61,121,500,121"/></svg>
            </a>
          </li>
        </ul>
        </div>
    </section>

  )
}

export default Hero