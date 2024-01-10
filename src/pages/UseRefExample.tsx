import {useEffect, useRef} from "react";
import CustomInput from "../components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=> {
     myRef?.current?.focus();
  },[])

  return (
    <div>
      <h1>useRef</h1>
  <form>
    <CustomInput ref={myRef} className="border border-blue-500"/>
      <button type="submit">Submit</button>
  </form>
    </div>
  );
};
export default UseRefExample;
