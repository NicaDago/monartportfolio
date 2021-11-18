import React from 'react'
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import SmallTitle from '../../Components/Education/SmallTitle';
import Title from '../Title';

function Education() {
    const school = <SchoolIcon />
    return (
        <EducationStyled>
           <div className="small-title ">
                    <SmallTitle icon={school} />
                    <Title title={'Education'} />
                </div>
          <ul class="timeline">

           {/* Item 1  */}
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">MA Digital Media Design</span>
				<span class="time-wrapper"><span class="time">2021</span></span>
			</div>
			<div class="desc">During the course of this Master Degree I have worked on the creation of small projects involving both Web Design and Graphic Design. I have gained skills in HTML/CSS; JS; REACT; Photoshop; Illustrator; InDesign; XD.</div>
		</div>
	</li>

    {/* Item 2  */}
	<li>
		<div class="direction-l">
			<div class="flag-wrapper">
				<span class="flag">HNC Fine Art with Photography</span>
				<span class="time-wrapper"><span class="time">2008</span></span>
			</div>
			<div class="desc">I started this Fine Art degree because I love painting and thought I would learn more. Unfortunately I did not learn what I wanted to learn and left gaining an HNC.</div>
		</div>
	</li>

    {/* Item 3  */}
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">BSc(HONS) Computing</span>
				<span class="time-wrapper"><span class="time">2005</span></span>
			</div>
			<div class="desc">Subjects sudied: Project Management; Oracle 9.i; SQL*PLUS; PL/SQL; Java; Software Methods (Formal Logic); Relational Algebra; Mathematics for Computing; Analysis and Design; Relational Databases; Database Design; Web Design; Visual Basic 6.0; UML Notations; UNIX. </div>
		</div>
	</li>
          </ul>
          <div className="flower">
          </div>
        </EducationStyled>
    )
}

const EducationStyled = styled.div`
  height: 150vh;
  margin: 0;
  padding-bottom: 10px;
  color: rgb(50,50,50);//text
  font-family: 'Oswald', sans-serif;
  font-size: 112.5%;

  .small-title{
    display: flex;
    flex-direction: row;
    padding-top: 5rem;
    padding-left: 7rem;
        font-family: 'Oswald', sans-serif;
        text-shadow: var(--main-title-shadow);
        color: #2c0b24d4;
    }

/* ================ The Timeline ================ */

.timeline {
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 6px;
  height: 100%;
  margin-left: -3px;
  background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, #347c25 8%, #6e8863 92%, rgba(80,80,80,0) 100%); 
  z-index: 5;
}

.timeline li {
  padding: 1em 0;
}

.timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.direction-l {
  position: relative;
  width: 300px;
  float: left;
  text-align: right;
}

.direction-r {
  position: relative;
  width: 300px;
  float: right;
}

.flag-wrapper {
  position: relative;
  display: inline-block;
  text-align: center;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(248,248,248);
  padding: 6px 10px;
  border-radius: 5px;
  font-weight: 600;
  text-align: left;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: 50%;
  right: -40px;
  content: ' ';
  display: block;
  width: 12px;
  height: 12px;
  margin-top: -10px;
  background: #fff;
  border-radius: 10px;
  border: 4px solid green;
  z-index: 10;
}

.direction-r .flag:before {
  left: -40px;
}

.direction-l .flag:after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-left-color: rgb(248,248,248);
  border-width: 8px;
  pointer-events: none;
}

.direction-r .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-right-color: rgb(248,248,248);
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: inline;
  line-height: 1em;
  font-size: 0.66666em;
  color: green;
  vertical-align: middle;
}

.direction-l .time-wrapper {
  float: left;
}

.direction-r .time-wrapper {
  float: right;
}

.time {
  display: inline-block;
  padding: 4px 6px;
  background: rgb(248,248,248);
}

.desc {
  margin: 1em 0.75em 0 0;
  
  font-size: 0.77777em;
  font-style: italic;
  line-height: 1.5em;
}

.direction-r .desc {
  margin: 1em 0 0 0.75em;
}

/* ================ Education Media Queries ================ */

@media screen and (max-width: 660px) {
  /* height: 135vh; */
  padding-bottom: -10px;

  .small-title{
    padding-top: 0;
    padding-left: 2rem;
    }

.timeline {
 	width: 100%;
	padding: 4em 0 1em 0;
}

.timeline li {
	padding: 2em 0;
}

.direction-l,
.direction-r {
	float: none;
	width: 100%;

	text-align: center;
}

.flag-wrapper {
	text-align: center;
}

.flag {
	background: rgb(255,255,255);
	z-index: 15;
}

.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: -30px;
	left: 50%;
	content: ' ';
	display: block;
	width: 12px;
	height: 12px;
	margin-left: -9px;
	background: #fff;
	border-radius: 10px;
  color: green;
	z-index: 10;
}

.direction-l .flag:after,
.direction-r .flag:after {
	content: "";
	position: absolute;
	left: 50%;
	top: -8px;
	height: 0;
	width: 0;
	margin-left: -8px;
	border: solid transparent;
	border-bottom-color: rgb(255,255,255);
	border-width: 8px;
	pointer-events: none;
}

.time-wrapper {
	display: block;
	position: relative;
	margin: 4px 0 0 0;
	z-index: 14;
}

.direction-l .time-wrapper {
	float: none;
}

.direction-r .time-wrapper {
	float: none;
}

.desc {
	position: relative;
	margin: 1em 0 0 0;
	padding: 1em;
	background: rgb(245,245,245);
	-webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
	-moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
	box-shadow: 0 0 1px rgba(0,0,0,0.20);
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
	position: relative;
	margin: 1em 1em 0 1em;
	padding: 1em;
  z-index: 15;
}

}

@media screen and (max-width: 800px) {
  /* height: 90vh; */
  /* padding-bottom: -10px; */
}

`;

export default Education;
