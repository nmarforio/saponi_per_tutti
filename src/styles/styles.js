import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,*::before, *::after{
    box-sizing: border-box;
}

body{
    margin:0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url('background_blur_12.jpg');
    background-size: cover;
    background-attachment:fixed ;
    color: rgb(134, 60, 13)
    }

.navbar{

  display: flex;
  
  justify-content: space-around;
  border: solid rgb(134, 60, 13) 2px;
  background-color: rgb(212, 205, 195);
  opacity: 0.8;
  margin-top: 5px;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgb(156, 89, 18);;
}

#__next > div:nth-child(1){
    display: flex;
    justify-content: center;
}


.soapcard{
    display: flex;
    justify-content: center;
  background-color: rgb(212, 205, 195) ;
  opacity: 0.9;
  border: solid rgb(134, 60, 13) 2px;
  border-radius: 8px;
  margin-top: 10px;  
  flex-wrap:wrap;
  box-shadow: 5px 5px 5px rgb(156, 89, 18);

  
}
.orderscard{
    width: 300px;
   display:grid;
   justify-items: center;
  background-color: rgb(212, 205, 195) ;
  opacity: 0.9;
  border-radius: 8px;
  border: solid 2px rgb(134, 60, 13);
  margin-top: 10px;  
  flex-wrap:wrap;
  margin-left: 35px;
  box-shadow: 10px 10px 15px rgb(156, 89, 18)
}
.ordernumber{
    font-size: x-small;
    color: black;
    padding-left: 10px;
}
.ordertitle{
    border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    margin-left: 35px;
    background-color: rgb(212, 205, 195);
    width: 250px;
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

.swiper-button-next,
.swiper-button-prev{
    color:white !important;
    
}
.swiper-slide{
    display: flex;
    justify-content: center;

}
.formNewUser{
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
    margin-top: 25px;
    margin-left: 40px;
  color:rgb(134, 60, 13) ;
  box-shadow: 5px 5px 5px rgb(156, 89, 18) ;
  border: 2px solid rgb(134, 60, 13);
  font-size: 20px;
  border-radius: 8px;
  background-color: rgb(212, 205, 195);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.profileCard{
    background-color: rgb(212, 205, 195) ;
  box-sizing: border-box;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  height: fit-content;
  padding: 5vw;
  padding-top: 0;
  position: relative;
  width: 300px;
  margin-left: 10%;
  box-shadow: 10px 10px 15px rgb(134, 60, 13);
  
}
.profileCard p{
    font-size: larger;
}
.yourDatas{
    color: rgb(134, 60, 13);
    margin-left: 40px;
    border: 2px solid rgb(134, 60, 13);
    background-color: rgb(212, 205, 195);
    width: fit-content;
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
    border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    margin-left: 35px;
    background-color: rgb(212, 205, 195);
    width: 160px;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(156, 89, 18)
}
.total {
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
  box-shadow: 10px 10px 15px rgb(134, 60, 13);
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
    margin-top: 10px;  
  box-sizing: border-box;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  padding: 5vw;
  position: relative;
  width: 300px;
  margin-left: 10%;
  box-shadow: 10px 10px 15px rgb(134, 60, 13)
}
.basketCard input{
    margin-left: 10px;
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.basketCard h3{
    margin-top: 5px;
}
.soapdetails{
background-color: rgb(212, 205, 195) ;
  box-sizing: border-box;
  height: fit-content;
  padding: 5vw;
  position: relative;
  width: 300px;
}
.soapdetails input{
    border-radius: 8px;
    border-color: rgb(134, 60, 13);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-left: 10px;
    font-size: medium;
}
.soapdetails button{
    background-color: white;
  color: black;
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  margin-left:30%;
  margin-top: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.soapdetails h4{
    margin-bottom: 2px;
}
.recipes{
    margin-top: 5px;
}

.singIn button{
background-color: white;
  color: rgb(134, 60, 13);
  border: 2px solid rgb(134, 60, 13);
  font-size: medium;
  border-radius: 8px;
  margin-left:30%;
  margin-top: 150px;
  height: 60px;
  background-color: rgb(212, 205, 195);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
.profileimg{
    border-radius: 8px;
}

.footer{
  position: fixed;
  text-align:center;

  bottom: 0;
   width: 100%;
   border: solid rgb(134, 60, 13) 2px;
  background-color: rgb(212, 205, 195);
  opacity: 0.8;
  margin-top: 5px;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgb(156, 89, 18);
  height: 30px;
  
}
.footerlink{
  text-decoration: none;
  color:rgb(134, 60, 13)
}
.admintitle{
  border: solid 2px rgb(134, 60, 13);
    color: rgb(134, 60, 13);
    margin-left: 35px;
    background-color: rgb(212, 205, 195);
    width: fit-content;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(156, 89, 18)
    
}
.admincard{
  background-color: rgb(212, 205, 195) ;
    margin-top: 10px;  
  box-sizing: border-box;
  opacity: 0.9;
  border-radius: 8px;
  border: 1px solid rgb(134, 60, 13);
  padding: 5vw;
  position: relative;
  width: 300px;
  margin-left: 10%;
  box-shadow: 10px 10px 15px rgb(134, 60, 13)
}


`;
