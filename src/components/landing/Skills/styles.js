import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  ${
    "" /* p {
    margin-bottom: .2rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  } */
  }
  ${"" /* img {
    width: 50%;
  } */}
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
  }

  .containers {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-gap: .5rem;
    padding: 3rem 0px;
    ${'' /* font-size: 1.2rem; */}
  }
  .skill_box {
    padding: .5rem;
    cursor: pointer;
  }
  .skill-box:hover > .skill_title:after,
  .skill_box:hover > .skill_title:before {
    width: 35px;
  }
  .skill_box:hover .img {
    transform: translateY(-10px);
  }
  .skill_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    position: relative;
  }
  .skill_title:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 0px;
    height: 4px;
    border-radius: 2px 0 0 2px;
    background-color: #2ecc71;
    transition: 0.5s;
  }
  
  .skill_title:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 38%;
    width: 0px;
    height: 4px;
    border-radius: 0 2px 2px 0;
    background-color: #2ecc71;
    transition: 0.5s;
  }

  img {
    width: 50px;
    ${'' /* height: px; */}
    position: relative;
    border-radius: 45px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    margin-bottom: 1rem;
  }
  img:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 90px;
    background: rgba(100, 100, 100, 0.5);
    border-radius: 45px 0 0 45px;
    transition: 0.5s;
  }
  .skill_title h4 {
    margin-top: 1px;
    margin-bottom: 2px;
  }
  .skill_icon {
    width: 50px;
    z-index: 2;
  }
  @media (max-width: 990px) {
    .containers {
      grid-template-columns: repeat(3, 1fr);
      padding: 2rem 0px;
    }
  }
  @media (max-width: 650px) {
    .containers {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 50%;
  }
`;
