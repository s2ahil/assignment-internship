import { useState } from 'react'

import { Appbar } from "./components/ManagePages.js"
import Logo from "./asserts/logo.png"
import Award from "./asserts/award.png"
import GroupPhoto from "./asserts/grpPhoto.png"
import MetalItems from "./asserts/metalItems.png"

function App() {



  return (
    <>
      <div className='flex justify-center items-center  p-4'>
        <img src={Logo} className='h-[8rem]'></img></div>

      <div className='grid md:grid-cols-[25rem,1fr]  gap-2 p-4'>
        <img src={Award} className='h-[45rem]'></img>

        <div className='flex flex-col gap-4'>

          <h1 className='font-bold'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
          <ul className='list-disc ml-[2rem] font-medium'>
            <li>   C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
            </li>
          </ul>
          <img src={GroupPhoto}></img>

          <div className='font-medium'>
            Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </div>
        </div>

      </div>

      <div className='flex flex-col justify-center items-center gap-4 p-4 font-medium'>
        <div>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
        <img src={MetalItems} className='w-[70rem]'></img>
        <div>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </div>

      </div>

      <hr className="h-[2px] my-4 bg-red-500 border-0  "></hr>

      <div className='flex flex-col items-center gap-4 justify-center p-4 '>

        <div className='font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </div>

        <div className='font-medium'>
        {/* <span className='border-r border-solid border-red-500 pr-4 mr-4'>CHEMICALS & PROCESS</span>
  <span className='border-r border-solid  border-red-500  pr-4 mr-4'>POWER</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>WATER & WASTE WATER</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>OILS & GAS</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>PHARMA</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>SUGARS & DISTILLERIES</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>PAPER & PULP</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>MARINE & DEFENCE</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>METAL & MINING</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>FOOD & BEVERAGE</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>PETROCHEMICAL & REFINERIES</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>SOLAR</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>BUILDING HVAC</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>FIRE FIGHTING</span>
  <span className='border-r border-solid  border-red-500 pr-4 mr-4'>AGRICULTURE & RESIDENTIAL</span> */}
        </div>

      </div>

      {/* <div className='flex  justify-between gap-2 bg-red-500 h-[5rem] pl-4 pr-4 w-full'>
        <div className='flex gap-3 items-center text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
          <div>Toll free 1800 200 1234</div>
        </div>
        <div className='flex gap-3 items-center text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
          <div>www.facebook.com/cripumps</div>
        </div>


        <div className='flex gap-3 items-center text-white  '>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>



          <div>www.crigroups.com</div>

        </div>

      </div> */}

    </>
  )
}

export default App
