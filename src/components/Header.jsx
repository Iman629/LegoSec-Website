
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

// const Header = () => {
//   const [isLightMode, setIsLightMode] = React.useState(false);

//   // Initialize theme from localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'light') {
//       document.body.classList.add('light-mode');
//       setIsLightMode(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isLightMode) {
//       document.body.classList.remove('light-mode');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.body.classList.add('light-mode');
//       localStorage.setItem('theme', 'light');
//     }
//     setIsLightMode(!isLightMode);
//   };

//   //Search
  
//   return (
//     <header className="header">
//       {/* Logo */}
//       <a href="home">
//         <img src="/logo.png" alt="LegoSec Logo" className="logo" />
//       </a>
      
//       {/* Search Bar */}
//       <div className="search-bar">
//         <input type="text" placeholder="Search..." id="myInput" onkeyup="myFunction()" />
//       </div>

//       {/* Theme Toggle Button */}
//       <div>
//         <button onClick={toggleTheme} className="mode">
//           {isLightMode ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
//         </button>
//       </div>
//     </header>
//   );
// };
// export default Header;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Example page data (replace with dynamic data if needed)
  const pages = [
    { title: 'Home', path: '/home' },
    { title: 'What\'s Legosec', path: '/intro' },
    { title: 'Why Legosec', path: '/intro1' },
    { title: 'Requirements & Downloads', path: '/requirements' },
    { title: 'Installation and setup', path: '/installation' },
    { title: 'Documentation', path: '/documentation' },
    { title: 'Usage Instructions', path: '/sdkref' },
    { title: 'API Inyegration Examples', path: '/sdkref1' },
    { title: 'Error Handling and Exceptions', path: '/sdkref2' },
    { title: 'Detailed API Functions', path: '/sdkref3' },
    { title: 'Support', path: '/support' },
    { title: 'Feedback', path: '/feedback' },
    { title: 'FAQ', path: '/faq' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
    setIsLightMode(!isLightMode);
  };

  // Update results when searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
    } else {
      const filtered = pages.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    }
  }, [searchTerm]);

  return (
    <header className="header">
      {/* Logo */}
      <a href="/home">
        <img src="/logo.png" alt="LegoSec Logo" className="logo" />
      </a>

      {/* Search Bar */}
      <div className="search-bar" style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {results.length > 0 && (
          <ul className="search-results" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            width: '100%',
            zIndex: 10,
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {results.map((page, index) => (
              <li key={index} style={{ padding: '8px' }}>
                <Link to={page.path} onClick={() => setSearchTerm('')}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Theme Toggle Button */}
      <div>
        <button onClick={toggleTheme} className="mode">
          {isLightMode ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
