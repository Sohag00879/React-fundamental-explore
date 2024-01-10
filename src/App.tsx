import { useContext } from "react";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";

function App (){
  const {dark,setDark} = useContext(ThemeContext) as TThemeContext;
  return (
    <div className={`h-screen w-full flex justify-center items-center ${dark ?'bg-black':'bg-white'}`}>
      <button className="bg-green-500 border rounded-full p-3" onClick={()=> setDark(!dark)}>Toggle</button>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </div>
  );
}
export default App;