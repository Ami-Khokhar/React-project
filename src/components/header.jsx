import React from 'react';
const headerStyles = {
  position: 'fixed',
  top: 0,
 
  width: '100%',
  height: '80px', 
  backgroundColor: '#000', 
  color: '#fff', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px', 
  zIndex: 1000, 
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
  fontFamily: '"Protest Guerrilla", sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  textAlign : 'center',
  
};



const Header = () => (
  <header style={headerStyles}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' , textAlign:'center'}}>
      <h1 style={{ margin: '0', fontSize: '36px' ,textAlign: 'center' }}>Power Peak </h1>
     
      
    </div>
  </header>
);

export default Header;
