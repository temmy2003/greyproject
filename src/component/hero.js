import styled from "styled-components";

export const Title = styled.section`
  width:90%;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
 
    ul{
    display:flex;
    gap: 20px;
    // justify-content:space-between;
    // height: 50px;
    // background-color:green;
    color:#0E0E2C99;
    list-style:none;
      
  }
  h1 > span{
    color:#3B71FE;
  }
`;


export const Main = styled.section`
  width:90%;
  margin:auto;
  // background-color:green;
  .all{
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
  // gap:100px;
  }
  
  .hang{
    width:45%;
    // background-color:red;
  }
  p.hel{
    font-size:18px;
    color:blue;
  }
  h2{
    // width:70%;
    font-size:50px
  }
  button.btn1{
    padding:10px 16px;
    border:none;
    outline:none;
    color:white;
    background-color:#3B71FE;
  }
  button.btn1 img{
    width:15px;
    height:15px; 
  }
  button.btn2{
    padding:8px 16px;
    border:none;
    // font-size:13px;
    // border:1px solid black;
    margin-left:20px;
    background-color:#fff;
  }
  button.btn2 img{
    width:10px;
    height:10px;
    margin-left:7px;
  }
  button.btn3{
    padding:8px 16px;
    border:none;
    // font-size:13px;
    border:1px solid #3B71FE;
    color: #3B71FE;
    background-color:#fff;
  }
  button.btn3 img{
    width:10px;
    height:10px;
    margin-left:7px;
  }
  .btn4{
    display:flex;
    justify-content:center;
    margin-top:7rem;
    margin-bottom:10rem;
  }
  p.hwe{
    font-size:18px;
    color:#0E0E2C99;
  }
  .hung{
    // width:100%;
  }
  .hung img{
    height: 30rem;
    width:39rem ;
    // background-color:blue;
  }
  .ims{
    margin-top:4rem;
    display:flex;
    justify-content:space-between;
  }
  .ims img{
    height:40px;
    width:100px;
  }

  .new{
    margin-top:10rem;
    margin-bottom:8rem;
    display:flex;
    gap:10px;
  }
  .word .head{
    color:#3B71FE;
    font-weight:bold;
    font-size:19px;
  }
  .word h4{
    font-size:30px;
  }
  .lg-word{
    font-size:20px;
    width:76%;
    color:#0E0E2C99;

  }
  .hand img{
    // height:40rem;
  }
  .word-pro{
    font-size:20px;
    font-weight:bold;
    color:#3B71FE;

  }
  .process{
    display:flex; 
    // background-color:blue;
    justify-content:space-between;
  }
  .proc{
    font-size:1.7rem;
    width:40%
  }
  .pro {
    font-size:25px;
    color:#0E0E2C99;
    width:45%;

  }
  .all-card{
    display:flex;
    margin-top:10rem;
    margin-bottom:8rem;

  }
  
.card-title {
  font-size:20px;
  display:flex;  
  font-weight:bold;

  align-items:center;
  gap:12px;
}
.card-title span{
  font-size:25px;
  color:#3B71FE;
  font-weight:bold;
}
.card-word{
  font-size:18px;
  color:#0E0E2C99;
  width:80%;
}
.allcards{
  display:flex;
  gap:20px;
}
.cards img{
  width:23rem;
  height:20rem
}
.student{
  font-size:20px;
  font-weight:bold;
  color:#3B71FE;
}
.stud-heading{
  width:44%;
  font-size:37px;
}

.cards-title{
  font-size:16px;
  font-weight:bold;
  color:#3B71FE; 
  margin-top:-1px;
}
.cards-word{
  margin-top:-12px;
}
`;
export const Last = styled.div`
margin-bottom:8rem;
padding-top:20px;
padding-bottom:40px;
background-color:#A0A4AB1A;

.section{
  width:90%;
  margin:auto;
}
.testmonial{
  font-size:20px;
  font-weight:bold;
  color:#3B71FE;
}
.veil{
  width:60%;
  font-size:33px;
}
.veil span{
  color:#3B71FE; 

}
.crd{
  display:flex;
  gap:25px;
  align-items:center;
  justify-content:center;


  }
.cad{
  width:100%;
  display:flex;

  // align-items:center;

  justify-content:center;
  background-color:rgb(251, 252, 252);
  padding-bottom:18px;
}
.cad > div{
  width:85%;
  // background-color:red;

}
.cad-img img {
  height:60px;
    width:60px;
}
.cad-img{
  display:flex;
  align-items:center
  // gap:10px;
}
.cad-img-word{
  line-height: 5px; 
}
.cad-word{
  font-size:18px;
  width:87%;
}
.arrows{
  margin-top:40px;
  display:flex;
  // background-color:red;

  justify-content:center;
  gap: 25px;
}
.arrows img {
  height:30px;
  width:30px;
  al
}

`;
export const Foot = styled.div` 
  background-color:#A0A4AB1A;
  padding-bottom:10px;
  .land{
    width:90%;
    margin:auto;
    display:flex;
    justify-content:space-between;

  }
  .item{
    margin-top:20px;

    width:60%;
    display:flex;
    // background-color:red;

    justify-content:space-around;
    // gap:30rem;

  }
  .item div ul{
    list-style:none;
    line-height:1.9rem;
    // text-align:right;

  }
  .item div ul p{
    font-size:18px;
    font-weight:bold;
  }
  .word p{
    width:16rem;
  }
  .logo p{
    font-size:18px;
    font-weight:bold;
  }
  .cont-logo {
    display:flex;
    width:1.3rem;
    gap:20px;
  }
  .cont-logo img{
    width:1.3rem;

  }

  .landing-foot{
    margin-top:30px;
    padding:10px 0 10px 0;
    background-color:black;
  }
  .landing-foot div p{
    width:90%;
    margin:auto;
    color:white;
  }
`;



