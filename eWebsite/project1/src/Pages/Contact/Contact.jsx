import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
export default function Contact() {
  return (
    <Wrapper>
    <div className="contact-maindiv">
      <h2 className="common-heading">Feels Free Contact Us</h2>
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.3601133039917!2d72.51740976157362!3d23.07071641358639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cb30285d153%3A0x9d11ca83836c5529!2sCity%20Centre%202!5e0!3m2!1sen!2sin!4v1692697863305!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact-container ">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mgejkkbr"
            method="POST"
            className="contact-inputs"
          >
            <input
              className="input-in"
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              className="input-in"
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" className="input-btn" />
          </form>
        </div>
      </div>
    </div>
    <Footer/>
   </Wrapper>
  );
}
const Wrapper = styled.section`
.input-btn{
  width: 100px;
  height: 32px;
  color: white;
  background-color: rgb(102 102 239);
  border-style: none;
}
.contact-container {
  display: flex;
  margin-top: 60px;

  justify-content: center;
  align-items: center;
}
.contact-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
.contact-inputs .input-in {
  width: 25rem;
  height: 2rem;
}
.contact-inputs textarea {
  width: 25rem;
}
.contact-maindiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-maindiv h2 {
  font-size: 28px;
  font-weight: 400;
  margin: 44px 0px;
}

@media (max-width: 767px) {
.contact-inputs .input-in {
  width: 19rem;
  height: 2rem;
  padding: 10px 3px;
}
.contact-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
}
.contact-inputs textarea {
  width: 19rem;
}
}

`