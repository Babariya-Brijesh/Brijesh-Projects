import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <Wrapper>
    <div className="footer-main-div">
      <section className="footer-1-div">
        <div className="footer-1-div-subdiv">
          <div className="footer-1-div-subdiv-1">
            <p>Ready to get started?</p>
            <p>Talk to us today</p>
          </div>

          <div>
            <button className="footer-1-div-btn">
              <NavLink className="footer-1-div-btn-link" to="/"> Get Started </NavLink>
            </button>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-information">
          <div className="footer-about ">
            <h3 className="footer-h3">Thapa Technical</h3>
            <p className="footer-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="footer-subscribe ">
            <h3 className="footer-h3">Subscribe to get important updates</h3>
            <form action="#" className="footer-subscribe-form ">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />

              <button >subscribe</button>
            </form>
          </div>
          <div className="footer-social ">
            <h3 className="footer-h3">Follow Us</h3>
            <div className="footer-social-icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact ">
            <h3 className="footer-h3">Call Us</h3>
            <h3 className="footer-h3">+91 12345678978</h3>
          </div>
        </div>
      </footer>
      <div className="footer-bottom-section">
<hr />
<div className="footer-bottom-section-term">
  <p className="footer-bottom-section-term-p">
    @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
  </p>
  <div>
    <p className="footer-bottom-section-term-p">PRIVACY POLICY</p>
    <p className="footer-bottom-section-term-p">TERMS & CONDITIONS</p>
  </div>
</div>
</div> 
    </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`


.footer-1-div-btn
{
  background-color: rgb(102 102 239);
  border-style: none;
  height: 34px;
}
.footer-1-div-btn-link{
  color: #f6f8fa;
text-decoration: none;
padding: 10px;
}
.footer-bottom-section-term-p{
font-size: 10px;
}
.footer-bottom-section-term{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 633px;
}
.footer-bottom-section hr{
width: 100%;
border: none;
  height: 1px;
  background-color: rgb(240, 236, 236);
}
.footer-bottom-section{
  color: #f6f8fa;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 62px;
}
.footer-social-icons {
  display: flex;
  gap: 17px;
}
.icons {
  height: 24px;
  width: 23px;
  border: 1px solid white;
  padding: 7px;
  border-radius: 22px;
}
.footer-subscribe-form input {
  width: 125px;
  height: 30px;
}
.footer-subscribe-form button {
  width: 105px;
  border-style: none;
  height: 34px;
  color: #f6f8fa;
  background-color: rgb(102 102 239);
}
.footer-subscribe-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 217px;
  align-items: flex-start;
}
.footer-h3 {
  font-size: 12px;
}
.footer-p {
  font-size: 11px;
}
/* .footer-subscribe{

} */
.footer-information {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 85px;
  color: #f6f8fa;
  margin-top: 22px;
  width: 100%;
}
.footer-main-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to top,
    rgb(32, 32, 46) 0%,
    rgb(32, 32, 46) 88%,
    white 88%,
     white 100%
  );
  /* background-color: rgb(32, 32, 46); */
  margin-top: 90px;
}
.footer-1-div-subdiv {
  display: flex;
  width: 900px;
  height: 90px;
  border-radius: 9px;
  background-color: #f6f8fa;
  justify-content: center;
  align-items: center;
  gap: 550px;
}
.footer-1-div-subdiv-1 p {
  font-size: 12px;
}
@media (max-width: 767px) {
.footer-1-div-subdiv {
  display: flex;
  flex-direction: column;
  width: 11rem;
 
  border-radius: 9px;
  background-color: #f6f8fa;
  justify-content: flex-start;
  align-items: center;
  gap: 0rem;
  padding: 25px 51px;
}
.footer-information {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  color: #f6f8fa;
  margin-top: 21px;

  flex-direction: column;
}
.footer-bottom-section-term {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0rem;
  flex-direction: column;
}
.footer-1-div-subdiv-1{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:0px;
}
.footer-1-div-subdiv-1 p {
  font-size: 12px;
  margin-top: 6px;
}
 .footer-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.footer-h3 {
    font-size: 15px;
}
}
@media (min-width: 768px) and (max-width: 1024px){
  .footer-1-div-subdiv {
    display: flex;
    width: 637px;
    height: 90px;
    border-radius: 9px;
    background-color: #f6f8fa;
    justify-content: center;
    align-items: center;
    gap: 317px;
}
.footer-information {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  color: #f6f8fa;
  margin-top: 22px;
  width: 100%;
}
.footer-bottom-section-term {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 426px;
}
}

`