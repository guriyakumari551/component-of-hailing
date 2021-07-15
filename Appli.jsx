import React from 'react';

function Appli()
{
    let currtime=new Date();
    currtime=currtime.getHours();
    const cssStyle=
    {
    
    
    
    
    };
    let string='';
    if(currtime>=1&&currtime<12)
    {
        string='Good Morning';
        cssStyle.color ='green';
    }
    else if(currtime>=12&&currtime<7)
    {
        string='Good Afternoon';
        cssStyle.color= 'orange';
    }
    else 
    {
        string='Good Night';
        cssStyle.color ='orange';
    }
    return (
    <>
    <div>

<h1>Hello Everyone,<span style={cssStyle}>{string}</span></h1>

</div>
</>
    )

}
export default Appli;