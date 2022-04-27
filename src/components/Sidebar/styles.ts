import styled from "styled-components";

export const SidebarStyles = styled.div`
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 80%;
  }
    .search input{
    width: 10rem;
    height: 2rem;
    border-style: none;
    border-radius: 50px;
  }

  .aside {
    display: flex;
    flex-direction: column;
    background-color: tomato;
    width:100%;
    color: white;
    height: 100%;
    width: 180px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20px;
    z-index: 1;
    }
  
  .logo {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .text p {
    width: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 5px;
  }
  .main{
  background-color: #00bfff;
  width: 100%;
  height: 100%;
  position: absolute;
  }

  .part1 h1 {
    margin: 30px;
  }

  .card {
    background-color: white;
    width: 400px;
    margin: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card img {
    width: 350px;
    height: 350px;
  }

  .type {
    background-color: white;
    width: 400px;
    height: 40px;
    margin: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .type p {
    color: black;
  }

  .type button {
    border: none;
    background-color: #3cb371;
    width: 80px;
    height: 25px;
    border-radius: 10px;
  }

  .type button:last-child {
    border: none;
    background-color: #9400d3;
    width: 80px;
    height: 25px;
    border-radius: 10px;
  }

  .heightAndWeight {
    width: 400px;
    display: flex;
    margin: 30px;
    justify-content: space-between;
    align-items: center;
  }

  .height {
    background-color: white;
    width: 190px;
    height: 35px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .height p {
    color: black;
  }

  .weight {
    background-color: white;
    width: 190px;
    height: 35px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weight p {
    color: black;
  }

  .attributes {
    background-color: white;
    width: 400px;
    height: 120px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin: 30px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .attributes p {
    color: black;
  }

  .attributes button {
    color: white;
    width: 90px;
    height: 20px;
    border: none;
    border-radius: 10px;
  }

  .up {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .up button:nth-child(1) {
    background-color: tomato;
  }

  .up button:nth-child(2) {
    background-color: #db7093;
  }

  .up button:nth-child(3) {
    background-color: #ff8c00;
  }

  .down {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .down button:nth-child(1) {
    background-color: #ffff00;
  }

  .down button:nth-child(2) {
    background-color: #0000ff;
  }

  .down button:nth-child(3) {
    background-color: #ffa500;
  }

  .main {
    display: flex;
    justify-content: space-around;
  }

  .evolution {
    width: 800px;
    height: 150px;
    background-color: white;
    margin-top: 100px;
    border-radius: 10px;
    padding: 10px;
  }

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .images img:first-child {
    margin-right: 30px;
  }

  .evolution p {
    font-size: 24px;
    padding-bottom: 5px;
    color: black;
  }

  .evolution img {
    width: 100px;
    height: 100px;
  }

  .text2 {
    background-color: white;
    width: 800px;
    height: 450px;
    margin-top: 30px;
    border-radius: 10px;
    padding: 10px;
  }

  .text2 p {
    color: black;
    text-align: justify;
    font-size: 20px;
    width: 100%;
  }
`;
