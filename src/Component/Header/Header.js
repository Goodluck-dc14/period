// import React from "react";
// import styled from "styled-components";

// const Header = () => {
//   return (
//     <Container>
//       <Logo src="/images/logo.svg" />
//       <Wrapper>
//         <a>
//           <img src="/images/home-icon.svg" />
//           <span>home</span>
//         </a>
//         <a>
//           <img src="/images/series-icon.svg" />
//           <span>series</span>
//         </a>
//         <a>
//           <img src="/images/movie-icon.svg" />
//           <span>Movies</span>
//         </a>
//         <a>
//           <img src="/images/search-icon.svg" />
//           <span>search</span>
//         </a>
//         <a>
//           <img src="/images/original-icon.svg" />
//           <span>Original</span>
//         </a>
//         <a>
//           <img src="/images/watchlist-icon.svg" />
//           <span>Watchlist</span>
//         </a>
//       </Wrapper>
//       <Profile>
//         <img src="/images/img.png.jpg" />
//         <span>log out</span>
//       </Profile>
//     </Container>
//   );
// };

// export default Header;

// const Container = styled.div`
//   background-color: black;
//   height: 80px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   position: fixed;
// `;

// const Logo = styled.img`
//   width: 100px;
//   height: 50px;
//   object-fit: contain;
//   margin: 0 30px;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   flex: 1;
//   a {
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     margin: 0 10px;

//     img {
//       width: 20px;
//       object-fit: contain;
//       opacity: 0.6;
//       height: 20px;
//     }
//     span {
//       font-size: 11px;
//       font-weight: bold;
//       text-transform: uppercase;
//       margin: 0 5px;
//       position: relative;
//       opacity: 0.6;

//       :after {
//         content: "";
//         height: 2px;
//         position: absolute;
//         top: 15px;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: white;
//         transition: all 350ms;
//         transform: scaleX(1);
//         text-origin: center left;
//         opacity: 0;
//       }
//     }
//     :hover {
//       cursor: pointer;

//       img {
//         opacity: 1;
//       }
//       span {
//         opacity: 1;
//       }
//       span: after {
//         opacity: 1;
//         scaleX(1);
//       }
//     }
//   }
// `;

// const Profile = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   margin-right: 20px;
//   cursor: pointer;
//   img {
//     height: 50px;
//     width: 50px;
//     border-radius: 25px;
//   }

//   span {
//     display: flex;
//     align-items: center;
//     text-transform: uppercase;
//     height: 10px;
//     font-size: 11px;
//   }
// `;

import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { cgNotes } from "react-icons/cg";
import { BiNotepad } from "react-icons/bi";

const [change, setChange] = useState("");

const Header = ({ clr }) => {
  return (
    <Container
      style={{
        backgroundColor: clr,
      }}
    >
      <Wrapper>
        <span>BLK</span>
        <div>Design system PRO React</div>
      </Wrapper>
      <Wrapper2>
        <a>
          <span>Get Started</span>
          <MdArrowDropDown />
        </a>
        <a>
          <cgNotes />
          <span>Section</span>
          <MdArrowDropDown />
        </a>
        <a>
          <BiNotepad />
          <span>Examples</span>
          <MdArrowDropDown />
        </a>
        <Button>Buy Now</Button>
      </Wrapper2>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 100vw;
  position: fixed;
  color: white;
  displsy: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 350ms;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 17px;
  a {
    background-color: white;
  }
`;

const Wrapper2 = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  font-size: 17px;
  a {
    margin: 20px;
  }
`;

const Button = styled.div`
  background-color: #303f66;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
