import { forwardRef } from "react"
type TCustomInputTypeProps = {
    className: string;
}
const CustomInput = forwardRef<HTMLInputElement,TCustomInputTypeProps >(({className},inputRef) => {
  return (
    <input
        ref={inputRef}
        className={className}
        type="text"
        name="name"
        id="name"
      />
  )
});

export default CustomInput