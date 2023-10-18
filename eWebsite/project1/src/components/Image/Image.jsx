import React, { useState } from "react";
import styled from "styled-components";

export default function Image({ image=[{url:""}] }) {
  const [selectimage, setSelectimage] = useState(image[0].url);

  return (
    <Wrapper>
    <div className="sinleproduct-image-maindiv">
        <div   className="sinleproduct-image-small-div">
      {image?.map((item) => {
        return (
          <div
            className="sinleproduct-image-small"
            onClick={() => setSelectimage(item.url)}
          >
            <img src={item.url} alt="name" />
          </div>
        );
      })}
      </div>
      <div className="sinleproduct-image-big">
        <img src={selectimage} alt="name" />
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.sinleproduct-image-maindiv {
  display: flex;
  align-items: center;

  gap: 10px;
  
}
.sinleproduct-image-small img {
  height: 86px;
  width: 105px;
}
.sinleproduct-image-big img {
  height: 164px;
  width: 264px;
}
@media (max-width: 767px) {
  .sinleproduct-image-maindiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.sinleproduct-image-small-div{
  gap: 5px;
  display: flex;
}
.sinleproduct-image-small img {
  height: 86px;
  width: 73px;
}
.sinleproduct-image-big img {
  height: 164px;
  width: 304px;
}
}

`