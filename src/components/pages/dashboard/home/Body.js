import React from 'react'
import SearchImg from '../../../../assets/images/search.png';
import SettingsImg from "../../../../assets/images/settings.png";

const Body = () => {
  return (
    <div className='track-main'>
        <div className="d-flex flex-column">
            <div className='track-search d-flex align-items-center'>
                <img src={SearchImg} alt="" />
                <input type="text" placeholder='Search...' />
                <img src={SettingsImg} alt="" />
            </div>
            <p>tracking</p>
            <p>Ongoing Delivery</p>
        </div>
    </div>
  )
}

export default Body