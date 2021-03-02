import React from 'react'

const SidebarItem = ({ name, active, handleChange }) => {
  
  return (
    <button  className={`sidebar-item ${active ? 'active' : ''}`} 
    onClick={handleChange}
    >
      {name}
    </button>
    )
  
}

export default SidebarItem 