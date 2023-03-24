import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,*::before, *::after{
    box-sizing: border-box;
}

body{
    margin:0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url('background.jpg');
    background-size: cover;
    background-attachment:fixed ;
    color:rgb(134, 60, 13); 
    
    }

.navbar{

  display: flex;
  justify-content: space-between;
  border-bottom: solid black 2px;
  background-color: rgb(212, 205, 195);
  opacity: 0.8;
  color: balck;
  margin-top: 5px;
}

#__next > div:nth-child(1){
    display: flex;
    justify-content: center;
}
#__next > main > main > div > h1{
    font-size: medium;
}

.soapcard{
    display: flex;
    justify-content: center;
  background-color: rgb(212, 205, 195) ;
  opacity: 0.9;
  border: solid black 2px;
  border-radius: 5%;
  margin-top: 10px;  
  flex-wrap:wrap;
  
}
.orderscard{
    width: 300px;
    display: flex;
    justify-content: space-around;
    justify-items: center;

  background-color: rgb(212, 205, 195) ;
  opacity: 0.9;
  border-radius: 5%;
  border: solid 2px white;
  margin-top: 10px;  
  flex-wrap:wrap;
  margin-left: 35px;
  box-shadow: 10px 10px 15px white
}
.ordernumber{
    display: contents;
    font-size: x-small;
}
.swiper-button-next,
.swiper-button-prev{
    color:white !important;
    
}
.swiper-slide{
    display: flex;
    justify-content: center;

}

`;
