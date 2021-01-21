import React from "react";
import { Container } from "components/common";
import htmlimg from "assets/illustrations/html.png";
import cssimg from "assets/illustrations/css.png";
import jsimg from "assets/illustrations/javascript.png";
import cimg from "assets/illustrations/c.png";
import cpluslimg from "assets/illustrations/c++.png";
import javaimg from "assets/illustrations/java.jpg";
import reactimg from "assets/illustrations/react.jpg";
import sqlimg from "assets/illustrations/sql.jpg";
import linuximg from "assets/illustrations/linux.jpg";
import dsa from "assets/illustrations/datastru.png";

import bootstrapimg from "assets/illustrations/bootstrap.png";

import { Wrapper, Details } from "./styles";

export const Skills = () => {
  return (
    <div>
      <Wrapper as={Container} id='skills'>
        <h1>Skills</h1>
        <Details as={Container} id='skill_bos'>
          <div className='containers'>
            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    width='45'
                    src={htmlimg}
                    alt='Html'
                    className='skill_icon'
                  />
                </div>
                <h4>HTML 5</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>

            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={cssimg}
                    alt='Css'
                  />
                </div>
                <h4>CSS 5</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>

            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={reactimg}
                    alt='react'
                  />
                </div>
                <h4>React JS</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>
            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={bootstrapimg}
                    alt='Bootstrap'
                  />
                </div>
                <h4>Bootstrap</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>
            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={jsimg}
                    alt='JavaScript'
                  />
                </div>
                <h4>JavaScript</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>
            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img className='skill_icon' width='45' src={cimg} alt='C' />
                </div>
                <h4>C Language</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>

            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={cpluslimg}
                    alt='C++'
                  />
                </div>
                <h3>C++</h3>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>
            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={javaimg}
                    alt='Java'
                  />
                </div>
                <h4>Java</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>
            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img className='skill_icon' width='45' src={dsa} alt='C' />
                </div>
                <h4>Data Structures & Algorithms</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>

            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={sqlimg}
                    alt='react'
                  />
                </div>
                <h4>SQL</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>
            <div className='skill_box'>
              <div className='skill_title'>
                <div className='img'>
                  <img
                    className='skill_icon'
                    width='45'
                    src={linuximg}
                    alt='linux'
                  />
                </div>
                <h4>Linux</h4>
              </div>
              {/* <p>Lorem ispum</p> */}
            </div>
          </div>
        </Details>
      </Wrapper>
    </div>
  );
};
