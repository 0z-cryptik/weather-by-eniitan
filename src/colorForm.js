import { useColors } from "./components/ColorProvider"
import { useInput } from "./components/myHooks"

export const Colorform = ({pHolder='', bContent='ADD', formStyle='', buttonStyle='', textBstyle=''}) =>  {
   const {colors, addColor} = useColors()
   let [titleObj, resetTitle] = useInput('')
   let [colorObj, resetColor] = useInput('#1AA7EC')
   let submit = e => {
      e.preventDefault()
      addColor(titleObj.value, colorObj.value)
      resetTitle()
      resetColor()
   }
 
   return <form className={formStyle} onSubmit={submit}>
      <input {...titleObj} type='text' className={textBstyle} placeholder={pHolder} required />
      <input {...colorObj} type='color' required />
      <button type='submit' className={buttonStyle}>{bContent}</button>
   </form>
}


