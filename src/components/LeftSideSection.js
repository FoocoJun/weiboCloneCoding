import React from "react";
import styled from "styled-components";



const LeftSideSection = () => {
  return (

<div style={{ 
  height: "4500px"

}}>
<Box1>
<p>안녕</p>
</Box1>

<Box2>
<p>안녕</p>
</Box2>



</div>
  )
};




const Box1 = styled.div`
display: inline-block;
position: sticky;
top: 70px;
left: 0vw;


width: 10vw;
height: 100vh;
border: 2px solid lightgray;



`;

const Box2 = styled.div`
display: inline-block;
position: sticky;
top: 70px;
left: 100vx;

width: 10vw;
height: 100vh;
border: 2px solid lightgray;



`;

export default LeftSideSection;
