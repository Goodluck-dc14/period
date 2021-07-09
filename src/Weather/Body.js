import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "antd";
import axios from "axios";

const api = {
  key: "19bc063303d344ae061a992be6080d89",
  base: "https://api.openweathermap.org/data/2.5/",
};
const Body = () => {
  const [searchBox, setSearchBox] = useState("");
  const [fetch, setFetch] = useState("");

  const SearchN = async () => {
    const res = await axios;
  };

  const dataBuilder = (d) => {
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let days = day[d.getDay()];
    let months = month[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    console.log(days);
    console.log(months);
    console.log(date);
    console.log(year);

    return `${days} ${date} ${months} ${year}`;
  };

  return (
    <Container>
      <Input placeholder="Search" />
      <MainText>
        <Text1>Wed. july 7 2021</Text1>
        <Text2>Lagos Nigeria </Text2>
      </MainText>
      <Main>
        <Cen>0%c</Cen>
      </Main>
      <Description>Rainy</Description>
    </Container>
  );
};

export default Body;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  &:before {
    content: "";
    background: url("images/img.png") center center / cover fixed no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  Input {
    width: 320px;
    height: 50px;
    margin-top: 5px;
    border-radius: 5px;
    font-size: 20px;
  }
`;

// const Search = styled.div`
//   height: 50px;
//   width: 400px;
//   border-radius: 40px;
//   display: flex;
//   align-items: center;
//   background-color: lightblue;

//   img {
//     object-fit: contain;
//     height: 20px;

// `;

const MainText = styled.div`
  text-align: center;
  color: white;
`;

const Text1 = styled.div`
  font-size: 20px;
`;

const Text2 = styled.div`
font-size: 30px;-
font-weight: bold;
`;

const Cen = styled.div`
  height: 300px;
  width: 500px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bold;
  color: white;
`;
const Description = styled.div`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-iems: center;
`;
