import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animations";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function Home() {
  return (
    
      <Section id="home">
        <Navbar />
        <motion.div
          variants={homeAnimation}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
          className="home"
        >
          <div className="content">
            <div className="title">
              <h1>Events</h1>
            </div>
      
            <img src={play} alt="Play Button" />
          </div>
        </motion.div>
      
       <Portfolio/>
       <Testimonials/>
       <Footer/>
      </Section>
    
  );
}

const Section = styled.section`
  // background-image: url(${home});
  // background-size: cover;
  // min-height: 100vh;
  // background-repeat: no-repeat;
  // background-position: center;
     background-color: blueviolet;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;
