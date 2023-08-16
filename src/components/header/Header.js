import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import {logo} from "../../assets/index"

const Header = () => {
  return (
    <div>
    <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
    {/* ================Image Start here ===============*/}
    <div className="headerHover">
    <img className="w-24 mt-2" src={logo} alt="logo" />
    </div>
    
    {/* ================Image End here =================*/}
    {/* ================Deliver Start here ===============*/}
    <div className="headerHover">
    <LocationOnIcon/>
    <p className='text-sm text-lightTxt font-light flex flex-col'>
     Deliver to{""} 
     <span className="text-sm font-semibold - mt-1 text-whiteText">
     Oman
     </span>
     </p>
    </div>
    {/* ================Deliver End here ===============*/}
    {/* ================Search Start here ===============*/}
   <div className='h-10 rounded-md flex flex-grow relative'>
   <span>All <span></span><ArrowDropDownOutlinedIcon/></span>
   <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
   type="text"/>
   </div>
    {/* ================Search End here ===============*/}
    {/* ================Signin Start here ===============*/}

    {/* ================Signin end here ===============*/}
    {/* ================Orders Start here ===============*/}

    {/* ================Orders End here ===============*/}
    {/* ================Cart Start here ===============*/}

    {/* ================Cart End here ===============*/}
    </div>
    </div>
  );
}

export default Header