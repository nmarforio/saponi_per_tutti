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

}
`;
