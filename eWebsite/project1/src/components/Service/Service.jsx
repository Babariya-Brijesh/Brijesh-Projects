import React from 'react'
 import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Service() {
    return (
       <Wrapper>
          <div className="container">
            <div className="services-maindiv">
              <div className="services1 services-flix">
                <div className="services1-subdiv">
                  <TbTruckDelivery className="reacticon" />
                  <h3>Super Fast and Free Delivery</h3>
                </div>
              </div>
    
              <div className="services2">
                <div className="services-colum2">
                  <div  className="services2-subdiv">
                    <MdSecurity className="reacticon" />
                    <h3>Non-contact Shipping</h3>
                  </div>
                </div>
                <div className="services-middle1">
                  <div  className="services2-subdiv">
                    <GiReceiveMoney className="reacticon" />
                    <h3>Money-back Guaranteed</h3>
                  </div>
                </div>
              </div>
    
              <div className="services3 services-flix">
                <div  className="services1-subdiv">
                  <RiSecurePaymentLine className="reacticon" />
                  <h3>Super Secure Payment System</h3>
                </div>
              </div>
            </div>
          </div>
          </Wrapper>
      );
    };
    const Wrapper = styled.section`
    .services-colum2 {
        background-color: #f6f8fa;
        border-radius: 23px;
        width: 274px;
        height: 100px;
      }
      .services-middle1 {
        background-color: #f6f8fa;
        border-radius: 23px;
        width: 274px;
        height: 100px;
      }
      .services2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
        gap: 20px;
        width: 274px;
      }
      .services2 h3 {
        font-size: 14px;
        font-weight: 400;
      }
      .reacticon {
        height: 36px;
        width: 40px;
        color: blueviolet;
        background-color: white;
        border-radius: 32px;
        padding: 17px;
      }
      .services1-subdiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .services2-subdiv {
        display: flex;
       margin-top: 16px;
        align-items: center;
        justify-content: center;
      }
      .services-flix {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f6f8fa;
        border-radius: 23px;
        margin: 0px 22px;
        width: 274px;
        height: 214px;
      }
      .services-flix h3 {
        font-size: 14px;
        font-weight: 400;
      }
      .container {
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }
      .services-maindiv {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
      }
      @media (max-width: 768px) {
    

      }
      
      `