import React from 'react'

const Footer = () => {
    const links = [
        "About", "Help", "Press", "API", "Jobs",
        "Privacy", "Terms", "Locations", "Language", "Meta Verified"
      ];
  return (
    <div className='space-y-6 pt-4'>
            <div className="flex flex-wrap items-center text-xs text-gray-300 font-normal">
        {links.map((link, index) => (
        <React.Fragment key={index}>
            <span>{link}</span>
            {index < links.length - 1 && <span>&nbsp;·&nbsp;</span>}
        </React.Fragment>
        ))}
    </div>
    <p className='text-sm text-gray-300 font-normal'>
    © 2025 Instagram from Meta
    </p>
    </div>
    
  )
}

export default Footer
