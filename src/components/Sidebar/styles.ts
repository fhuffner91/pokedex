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
`;