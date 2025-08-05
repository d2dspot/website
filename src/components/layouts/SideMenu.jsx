import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SIDE_MENU_DATA } from '@/lib/adminData'
import logo from '/assets/logo_icon.svg'
import { Grid4 } from 'iconsax-reactjs'

const SideMenu = ({ activeMenu, onClose }) => {
  const [menuItems, setMenuItems] = useState([])
  const navigate = useNavigate()

  useEffect(() => { setMenuItems(SIDE_MENU_DATA) }, [])

  return (
    <div className="
      w-full h-full bg-[#F5F5FF] border-r border-gray-200
      shadow-lg rounded-r-[40px] py-12 px-3
      flex flex-col items-center
    ">
      {/* Logo + close‑icon */}
      <div className="flex items-center justify-between w-full mb-12 px-4 ">
        <img src={logo} alt="Logo" className="h-8 object-contain" />
        <button onClick={onClose}>
          <Grid4
            size={24}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          />
        </button>
      </div>

      {/* Menu buttons */}
      <div className="flex-1 w-full space-y-3 px-4">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className={`
              flex items-center gap-3 w-full text-left p-3 rounded-lg
              ${
                activeMenu === item.label
                  ? 'bg-primary text-white'
                  : 'text-neutral-700 hover:bg-gray-100'
              }
            `}
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
