import React from "react";
import Aboutme from "../../public/assets/aboutMe/abouticon.png";
import "./CSS/AboutMe/AboutMe.css";

// ProgressBar კომპონენტი
const ProgressBar = ({ now, variant }) => {
  const getBarColor = (variant) => {
    switch (variant) {
      default:
        return "#000";
    }
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        height: "6px",
      }}
    >
      <div
        style={{
          width: `${now}%`,
          backgroundColor: getBarColor(variant),
          height: "100%",
          borderRadius: "5px",
        }}
      ></div>
    </div>
  );
};

const AboutMe = () => {
  const experienceData = [
    { title: "Web Design", description: "UI/UX design" },
    { title: "Web Design", description: "UI/UX design" },
    { title: "Web Design", description: "UI/UX design" },
  ];

  const educationData = [
    { title: "Web Design", description: "UI/UX design" },
    { title: "Web Design", description: "UI/UX design" },
    { title: "Web Design", description: "UI/UX design" },
  ];

  return (
    <section className="about-me-container">
      <article className="about-cont">
        <div className="about-me">
          <h1 className="about-me-head">About me</h1>
          <p className="about-me-info">
            Figma ipsum component variant main layer. Vertical duplicate auto
            rectangle undo line scrolling vertical layer. Selection style
            variant ipsum hand select thumbnail link object distribute. Ellipse
            fill blur align polygon opacity shadow. Comment frame frame effect
            pixel pixel link rotate blur undo.
          </p>
        </div>
        <div className="about-me-icon">
          <img src={Aboutme} alt="" />
        </div>
      </article>
      <article className="resume-container">
        <h2 className="resume">Resume</h2>
        <p className="resume-info">Figma ipsum component variant main</p>
        <div className="experiens-and-educate">
          <div className="experiens">
            <h2 className="experiens-head">Experiens</h2>
            {experienceData.map((item, index) => (
              <div key={index}>
                <h2 className="web-design">{item.title}</h2>
                <p className="ui-ux-design">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="educate">
            <h2 className="educate-head">Educate</h2>
            {educationData.map((item, index) => (
              <div key={index}>
                <h2 className="web-design">{item.title}</h2>
                <p className="ui-ux-design">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skils">
          <p className="skils-info-text">
            Figma ipsum component variant main layer. Project thumbnail list
            comment arrow. Figma ipsum component variant main layer. Project
            thumbnail list comment arrow Figma ipsum component variant main
            layer. Project thumbnail list comment arrow. Figma ipsum component
            variant main layer. Project thumbnail list comment arrow. Figma
            ipsum component variant main layer. Project thumbnail list comment
            arrow. Figma ipsum component variant main layer.
          </p>
          <div className="skills-info">
            <div className="skill">
              <p className="skill-head">Adobe Photoshop</p>
              <ProgressBar now={85} variant="success" />
            </div>
            <div className="skill">
              <p className="skill-head">HTML & CSS</p>
              <ProgressBar now={90} variant="info" />
            </div>
            <div className="skill">
              <p className="skill-head">Digital Marketing</p>
              <ProgressBar now={75} variant="warning" />
            </div>
            <div className="skill">
              <p className="skill-head">Video Editing</p>
              <ProgressBar now={80} variant="danger" />
            </div>
            <div className="skill">
              <p className="skill-head">Social Media</p>
              <ProgressBar now={70} variant="danger" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
