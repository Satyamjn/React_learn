import "./Product.css"
import Price from "./Price"
function Product({title,idx}) {

  let oldPrice=["12,125","45.852","2,125","1,225"]
  let newPrice=["8,999","9,999","125","225"]
  let Deacrption=[
    ["8000 DPI","5 program button"],["intitutive surface","design for iapadpro" ],["design for iapadpro","intitutive surface"],["wireless","optical"]]
  return (
   
    <div className='Product'>

       <h4>{title}</h4>
       <p>{Deacrption [idx][0]}</p>
       <p>{Deacrption [idx][1]}</p>
      <Price oldPrice={oldPrice[idx]}  newPrice={newPrice[idx]} />

    </div>
  )
} 

export default Product