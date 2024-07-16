import React from 'react'
import Product from './Product'
function Productab() {
let styles={
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"centre",
  alignItems:"centre",
};
  return (
    
    <div style={styles} >
     
     <Product title="logitex mx 35" idx={0}/>
    <Product title="apple pencil" idx={1}/>
    <Product title="Zebronix"  idx={2}/>
    <Product title="petronix mouse" idx={3} />
    </div>
  ) 
}   

export default Productab