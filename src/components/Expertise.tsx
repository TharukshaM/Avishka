import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faTshirt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Fashion Illustration",
    "Pattern Making",
    "Technical File Preparation",
    "Collection Coordination",
    "Creative Direction",
    "Trend Research",
    "Garment Construction",
    "Adobe Illustrator",
    "Adobe Photoshop"
];

const labelsSecond = [
    "Textile Design",
    "Apparel Engineering",
    "Industrial Sewing Machines",
    "Technical Documentation",
    "Product Development",
    "Lounge Wear Design",
    "Academic Research",
    "MS Office"
];

const labelsThird = [
    "Concept Development",
    "Teamwork",
    "Decision Making",
    "Problem Solving",
    "Adaptability",
    "Critical Thinking",
    "Project Management",
    "Leadership",
    "Communication"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1 style={{marginBottom: "10vh"}}>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPaintBrush} size="3x"/>
                    <h3>Fashion Design & Creative Direction</h3>
                    <p>I bring a diverse background in fashion design, combining academic training with hands-on industry experience. My journey spans from crafting couture-level collections for designer brands to coordinating high-end ready-to-wear and premium casual wear. I am skilled in concept development, technical design, and creative leadership, excelling at taking ideas from inspiration to runway-ready garments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skill set:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTshirt} size="3x"/>
                    <h3>Textile & Apparel Development</h3>
                    <p>With a strong foundation in textile and apparel engineering, I understand the technical and creative sides of garment production. I have collaborated on industry projects with major brands, gaining hands-on experience with industrial sewing machines, technical documentation, and product development cycles. My approach bridges innovation and practicality, ensuring both aesthetic appeal and manufacturability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skill set:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLightbulb} size="3x"/>
                    <h3>Innovation & Collaboration</h3>
                    <p>As a self-motivated and adaptable designer, I thrive in collaborative and fast-paced environments. My experience spans backstage crew work, directing graduation photoshoots, and participating in all-island textile competitions. I’m passionate about exploring new ideas, fostering teamwork, and pushing creative boundaries while maintaining strong decision-making and critical thinking skills.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skill set:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;