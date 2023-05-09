import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,*::before, *::after{
    box-sizing: border-box;
}
#__next > main{

display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

body{
  
    margin:0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: rgb(220,172,163);
background: radial-gradient(circle, rgba(220,172,163,1) 0%, rgba(255,220,193,1) 100%);
opacity: 0.8;
    color: rgb(122, 65, 23);
  }
  

.navbar{
  position: absolute;
  right: 0;
  left: 0;
  width: 319px;
  display: table;
  margin: 40px auto;
  transform: translateY(-50%);
  z-index: 2;
}
.navbar a{
  position: relative;
  width: 33.333%;
  display: table-cell;
  text-align: center;
  color:rgb(122, 65, 23);
  text-decoration: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  padding: 10px 20px;
}



.toogleInfoNone{
  display: none
}
.toogleInfo{
  border-radius: 8px;
  background: rgb(220,172,163);
  height: fit-content;
  padding: 25px;
  width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;

}

.orderscard{
    width: 300px;
   display:grid;
   justify-items: center;
  background-color: rgb(212, 205, 195) ;
  opacity: 0.9;
  border-radius: 8px;
  border: solid 2px rgb(134, 60, 13);
  margin-top: 90px;  
  box-shadow: 10px 10px 15px rgb(156, 89, 18)
}
.ordernumber{
    font-size: x-small;
    color: black;
    padding-left: 10px;
}
.ordertitle{
    margin-top: 90px;
    border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    background-color: rgb(212, 205, 195);
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(156, 89, 18)
    
}
.ordertitle2{
  margin-top: 90px;
  border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    margin-left: 35px;
    background-color: rgb(212, 205, 195);
    width: 120px;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(156, 89, 18)

}
.orderspan1{
    display: flex;
    align-items: center;
    
}
.orderspan2{
    display: flex;
    align-items: center;
}
.orderquantity{
    margin-left: 15px;
}

.swiper-button-next{
  color: rgb(122, 65, 23) !important;
}
.swiper-button-prev{
  color: rgb(122, 65, 23)!important;
    
}
.swiper-slide{
    display: flex;
    justify-content: center;

}
.formNewUser{
  margin-top: 90px;
  background-color: rgb(212, 205, 195) ;
  box-sizing: border-box;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  height: fit-content;
  padding: 5vw;
  position: relative;
  width: 300px;
  margin-left: 10%;
  box-shadow: 10px 10px 15px rgb(134, 60, 13)
}
.formNewUser input,textarea{
    margin: 10px;
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.formNewUser label{
    display: flex;
    justify-content: flex-start;
}
.createProfile{
    margin-top: 90px;
    color: rgb(134, 60, 13);
    margin-left: 40px;
    background-color: rgb(212, 205, 195);
    width: 250px;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(156, 89, 18);
    border: solid 2px rgb(134, 60, 13)

}
.createButton{
background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: larger;
  border-radius: 8px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.logOut{
height: 100%;
width: 100%;
display: grid;
justify-items: center;
margin-top: 10%
}

.logOut button{
  color:rgb(134, 60, 13) ;
  box-shadow: 5px 5px 5px rgb(156, 89, 18) ;
  border: 2px solid rgb(134, 60, 13);
  font-size: 20px;
  border-radius: 8px;
  background-color: rgb(212, 205, 195);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  height: fit-content;

}

.profileCard{
  margin-top: 90px;
  background-color: rgb(212, 205, 195) ;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  height: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: fit-content;
  box-shadow: 10px 10px 15px rgb(134, 60, 13);
}
.profileCard p{
    font-size: larger;
}
.yourDatas{
    margin-top: 90px;
    color: rgb(134, 60, 13);
    border: 1px solid rgb(134, 60, 13);
    background-color: rgb(212, 205, 195);
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(156, 89, 18)
}
.changeDatasTitle{
  border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    background-color: rgb(212, 205, 195);
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(156, 89, 18)

}
.changeDatas{
    background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.changeDatasForm{
    background-color: rgb(212, 205, 195) ;
  box-sizing: border-box;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  height: fit-content;
  padding: 5vw;
  position: relative;
  width: 300px;
  margin-left: 10%;
  box-shadow: 10px 10px 15px rgb(134, 60, 13)
}
.changeDatasForm input,textarea{
    margin: 10px;
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.changeDatasForm label{
    display: flex;
    justify-content: flex-start;
    font-size: large;
}
.saveDatasButton{  
background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
.yourOrder{
  margin-top: 90px;
    border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    
    background-color: rgb(212, 205, 195);
    width: 160px;
    border-radius: 8px;
    box-shadow:  5px 5px 17px -5px  rgb(134, 60, 13);
}
.total {
    background-color: rgb(212, 205, 195) ;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  height: fit-content;
  padding: 5vw;
  width: auto;
  box-shadow:  5px 5px 17px -5px  rgb(134, 60, 13);
  margin-top: 10px;
}
.total label{
    margin-right: 10px;
    font-size: large;
}
.total input{
    margin: 10px;
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
.total button{
background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.basketCard{ 
  background-color: rgb(212, 205, 195) ;
  margin-top: 50px;  
  display: flex;
  align-content: center;
  flex-direction: column;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  padding: 5vw;
  width: 250px;
  box-shadow:  5px 5px 17px -5px rgb(134, 60, 13)
}

.basketCard input{
  margin-top: 10px;
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.basketCard button{
  background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  margin-left: 10px;
  margin-top: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.menuButton{
  margin-top: 10px;
  border: none;
  width: fit-content;
  background-color: rgb(255,220,193);
  opacity: 0.5;
  border-radius: 8px;
}
.menuButton :hover{
  background-color: rgb(220,172,163);
  opacity: 0.7;
  width: fit-content;
  border-radius: 8px;
}
.ratingStar{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}


.soapdetails{
  border-radius: 8px;
  background: rgb(220,172,163);
background: radial-gradient(circle, rgba(220,172,163,1) 0%, rgba(255,220,193,1) 100%);
 height: fit-content;
  padding: 25px;
  width: 450px;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow:  5px 5px 17px -5px  #7a4117;
  margin-top: 90px;
  margin-bottom: 40px;
}

.soapdetails input{
  margin-top: 30px;
  margin-bottom: 30px;
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-left: 10px;
    font-size: medium;
}
.addBasket{
  background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  margin-left: 10px;
  margin-top: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
}
.soapdetails h4{
    margin-bottom: 2px;
}
.recipes{
    margin-top: 5px;
}

.singIn{
  margin-top: 30%;
  display:flex;
  justify-items:center;
}
.singIn button{
  color: rgb(134, 60, 13);
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  height: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background: #ffdcc1;
}
.profileimg{
    border-radius: 8px;
}

.footer{
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
   width: 100%;
   border: solid rgb(134, 60, 13) 2px;
  background-color: rgb(212, 205, 195);
  opacity: 0.8;
  margin-top: 5px;
  border-radius: 8px;
  box-shadow:  5px 5px 17px -5px rgb(156, 89, 18);
  height: 30px;
  z-index: 1;
  
}
.footerlink{
  text-decoration: none;
  color:rgb(134, 60, 13)
}
.admintitle{
  border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    margin-top: 90px;
    background-color: rgb(212, 205, 195);
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    box-shadow:  5px 5px 17px -5px rgb(156, 89, 18)
    
}
.admincard{
  margin-top: 90px;
  background-color: rgb(212, 205, 195) ;
    margin-top: 10px;  
 
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  padding: 5vw;
  
  width: 300px;
 
  box-shadow:  5px 5px 17px -5px  rgb(134, 60, 13)
}
.newProductTitle{
  margin-top: 90px;
  border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    background-color: rgb(212, 205, 195);
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    box-shadow:  5px 5px 17px -5px rgb(156, 89, 18)
}
.newProductcard{
  margin-top: 90px;
  background-color: rgb(212, 205, 195) ;
  box-sizing: border-box;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  height: fit-content;
  padding: 5vw;
  position: relative;
  width: 300px;
  box-shadow:  5px 5px 17px -5px rgb(134, 60, 13)

}
.newProductcard input,textarea{
    margin: 10px;
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.newProductcard label{
    display: flex;
    justify-content: flex-start;
}
.newProductcard button{
  background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  margin-top: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.contactTitle{
  margin-top: 90px;
  border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    
    background-color: rgb(212, 205, 195);
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    box-shadow:  5px 5px 17px -5px rgb(156, 89, 18)

}
.contactcard{
  margin-top: 90px;
  background-color: rgb(212, 205, 195) ;
  box-sizing: border-box;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  height: fit-content;
  padding: 5vw;
  position: relative;
  width: 300px;
  box-shadow:  5px 5px 17px -5px rgb(134, 60, 13);
  margin-bottom: 10px

}

`;
