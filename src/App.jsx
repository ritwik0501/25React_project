import Bmicalculator from "./component/Bmicalculator"
import Accrodiam from "./component/accrodiam"
import Accrodiam2 from "./component/Accordiam2"
import Randomcolor from "./component/Randomcolor"
import Star from "./component/Star"
import Imageslider from "./Image_slider"
function App() {

  return (
    <>
  {/* <Bmicalculator/> */}   
   {/* <Accrodiam/> */}
   {/* project1 */}
   {/* <Accrodiam2/> */}
   {/* <Randomcolor/> */}
   {/* <Star/> */}
   <Imageslider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>
    </>
  )
}

export default App
