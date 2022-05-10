
import {Routes,Route} from "react-router-dom";
import Nav from "./Component/Nav";
import ProductList from "./Component/ProductList";
import Todolist1 from "./Component/Todolist1";
import Calculator from "./Component/Calculator";


function App() {
  
  return(
    <div>
      {/* <Nav/>
      <Routes>
            <Route  exact path="/category/top-wear-kurtas" element={<ProductList key="top-wear-kurtas" name="top-wear-kurtas" /> }/>
            <Route  exact path="/category/bottom-wear" element={<ProductList key="bottom-wear" name="bottom-wear" /> }/>
            <Route  exact path="/category/footwear" element={<ProductList key="footwear" name="footwear" /> }/>
            <Route  exact path="/category/w-cosmetics" element={<ProductList key="w-cosmetics" name="w-cosmetics" /> }/>
            <Route  exact path="/category/drapes-wear" element={<ProductList key="drapes-wear" name="drapes-wear" /> }/>
      </Routes> */}
      
      <Todolist1/>
      {/* <Calculator/> */}
    </div>
  )
  
}

export default App;
