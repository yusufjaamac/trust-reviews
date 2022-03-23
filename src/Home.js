import { useState } from "react";
import productlist from "./productlist";

const Home = () => {
    const [products,setProducts] = useState([
        { title: 'Product1' , body: 'Product1 Review', author: 'User1 reviewed', id:1},
        { title: 'Product2' , body: 'Product2 Review', author: 'User2 reviewed', id:2},
        { title: 'Product3' , body: 'Product3 Review', author: 'User3 reviewed', id:3},
        { title: 'Product4' , body: 'Product4 Review', author: 'User4 reviewed', id:4}


    ]);



  return (
      //output list 
    <div className="home">
      <productlist products = {products} title = "all products"/>
    </div>
  );
}
 
export default Home;