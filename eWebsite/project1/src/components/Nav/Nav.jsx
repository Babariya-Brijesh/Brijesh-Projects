import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../../context/cart_context";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(true);
  const [showmenuIcon, setShowMenuIcon] = useState(false);
  const { setOpenCart } = useCartContext();

  const Nav = styled.nav`
    margin: 0;
    padding: 0;

    .navbar-link {
      text-decoration: none;

      font-size: 17px;
    }

    .navbar-lists {
      display: flex;
      gap: 73px;
      align-items: center;
      list-style: none;
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 22px;
      }

      .cart-total--item {
        width: -1px;
        height: 17px;
        position: absolute;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -18px;
        left: 15px;
        background-color: "#8490ff";
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: 767px) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: #212529;
      }

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: #212529;
      }

      .active .mobile-nav-icon {
        display: inline-block;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: #212529;
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
      }

      .active .navbar-lists {
        width: 100vw;
        height: 100vh;
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        margin-left: -30px;
      }
      .navbar-link {
        font-size: 2.2rem;
      }

      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 50px;
        }
      }
      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      .navbar-lists {
        display: flex;
        gap: 31px;
        align-items: center;
        list-style: none;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar "}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => {
                setShowMenuIcon(true);
                setMenuIcon(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => {
                setShowMenuIcon(true);
                setMenuIcon(false);
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => {
                setShowMenuIcon(true);
                setMenuIcon(false);
               
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => {
                setShowMenuIcon(true);
                setMenuIcon(false);
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              // to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => {
                setShowMenuIcon(true);
                setMenuIcon(false);
                setOpenCart();
              }}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          {showmenuIcon && (
            <CgMenu
              name="menu-outline"
              className={
                menuIcon ? "mobile-nav-icon" : "active  mobile-nav-icon"
              }
              onClick={() => {
                setShowMenuIcon(false);
                setMenuIcon(true);
              }}
            />
          )}

          {!showmenuIcon && (
            <CgClose
              name="close-outline"
              className={
                menuIcon
                  ? "active close-outline mobile-nav-icon"
                  : " mobile-nav-icon close-outline "
              }
              onClick={() => {
                setShowMenuIcon(true);
                setMenuIcon(false);
              }}
            />
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
