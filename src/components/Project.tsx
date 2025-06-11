import React from "react";
import mock05 from '../assets/images/mock05.webp';
import mock06 from '../assets/images/mock06.webp';
import mock07 from '../assets/images/mock07.webp';
import mock08 from '../assets/images/mock08.webp';
import mock09 from '../assets/images/mock09.webp';
import mock10 from '../assets/images/mock10.webp';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Nocturnal Enigma <br></br> (Final Major Project)</h2></a>
                <p>A couture-level women’s occasional/high-end casual wear collection for Spring/Summer 2023, inspired by enigmatic nocturnal aesthetics. Explored innovative silhouettes, luxury fabrics, and unique surface textures to create a bold, avant-garde fashion statement. Developed concept, illustrations, technical files, and garment samples from ideation to runway.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>EUPNEA – Breath Freely <br></br> (Contemporary Locomotion Collection)</h2></a>
                <p>Designed a contemporary womenswear collection centered on the theme of free movement and effortless style. Incorporated functional design elements with artistic details, balancing comfort and high fashion. Emphasized technical pattern making and creative textile selection for modern urban lifestyles. </p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>DILIGANZ 'IDOLS' <br></br> (Special Project)</h2></a>
                <p>Designed for a themed fashion event, this project showcased conceptual garments inspired by personal idols and artistic influences. Emphasized storytelling, creative direction, and presentation skills through visual and technical design work.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>RANSALU All-Island Textile Design Competition</h2></a>
                <p>Participated in a national textile design competition, presenting a creative textile collection to an expert panel. Explored traditional craftsmanship, surface manipulation, and innovative textile techniques for modern apparel applications.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2> Catharsis (Simulated Studio Practice)<br></br> </h2></a>
                <p>Created a capsule collection for studio practice, focusing on emotional expression and transformation through fashion. Blended bold color palettes, innovative draping techniques, and mixed media to explore the cathartic power of design. Developed mood boards, digital sketches, and sample garments.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Graduation Photoshoots – Creative Direction</h2></a>
                <p>Served as Director for graduation photoshoots at the University of Moratuwa, overseeing the styling, concept development, and creative coordination. Demonstrated leadership, teamwork, and project management skills in a high-energy, collaborative environment.</p>
            </div>            
        </div>
    </div>
    );
}

export default Project;