import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";


const Shop = () => {
  return (
    <h1>This is the shop</h1>
  )
}

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Route>
    </Routes>

  )
}

export default App;
