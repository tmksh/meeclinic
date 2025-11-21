
/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import 
 
  PropTypes 

 

from
"prop-types"
import 
 
  React 

 

from
"react"

export const ReasonTextPc = ({
  prop
    
      = "01"
    ,
  prop1
    
      = "医師による診療"
    ,
  2
    
      = "産婦人科・皮膚科の専門医が在籍。悩みに丁寧に寄り添います。"
    ,
  className
    ,
  frameClassName
    ,
  divClassName
    ,
  
}) => {
  

  return (
    <div
  
    className={ `flex flex-col w-[587px] items-start gap-6 relative top-[1377px] left-[811px] ${className}` 
}
  

  

  

  


>
<div
  
    className= "relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#6b6b6b4c] text-[100px] tracking-[5.00px] leading-[100px]" 

  

  

  

  


>
{prop}
</div>
<div
  
    className={ `flex flex-col w-[587px] items-start gap-4 relative flex-[0_0_auto] ${frameClassName}` 
}
  

  

  

  


>
<div
  
    className={ `relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[var(--)] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap ${divClassName}` 
}
  

  

  

  


>
{prop1}
</div>
<div
  
    className= "relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[var(--)] text-base tracking-[0] leading-[25.6px]" 

  

  

  

  


>
{2}
</div>
</div>
</div>
)
}




ReasonTextPc.propTypes = {
  prop: PropTypes.string,
prop1: PropTypes.string,
2: PropTypes.string,

};
