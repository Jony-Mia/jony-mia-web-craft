import Html from '@/assets/html-5.png'
import css from '@/assets/css-3.png'
import tailwind from '@/assets/apple-touch-icon.png'
import JavaScript from '@/assets/js.png'
import ReactJs from '@/assets/programing.png'
import PHP from '@/assets/php.png'
import mysql from '@/assets/mysql.png'
import wordpress from '@/assets/wordpress.png'
import elementor from '@/assets/5968699.png'
import woo from '@/assets/woocommerce-icon-svgrepo-com.svg'
import photoshop from '@/assets/photoshop.png'

import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  let skills = [
    { name: "HTML/CSS", level: 92, color: "#f97316", tech: 'src/assets/html-5.png' },
    { name: "CSS", level: 80, color: "#004ce8", tech: 'src/assets/css-3.png' },
    { name: "TailwindCSS", level: 90, color: "#35bef8", tech: 'src/assets/apple-touch-icon.png' },
    { name: "JavaScript", level: 88, color: "#ffdf00", tech: 'src/assets/js.png' },
    { name: "React.js", level: 85, color: "#60b3f6", tech: 'src/assets/programing.png' },
    { name: "PHP", level: 90, color: "#777bb3", tech: 'src/assets/php.png' },
    { name: "MySQL", level: 80, color: "#16a34a", tech: 'src/assets/mysql.png' },
    { name: "WordPress", level: 95, color: "#00769d", tech: 'src/assets/wordpress.png' },
    // { name: "Laravel", level: 65, color: "#db2777", tech:'src/assets/html-5.png' },
    { name: "Elementor", level: 92, color: "#ab003a",tech:'src/assets/5968699.png' },
    { name: "WooCommerce", level: 92, color: "#7f54b3",tech:'src/assets/woocommerce-icon-svgrepo-com.svg' },
    { name: "PhotoShop", level: 92, color: "#f97316",tech:'src/assets/photoshop.png' },
  ];
  let tools = [
    { name: "PhotoSho[", level: 92, color: "#f97316",tech:'src/assets/wordpress.png' },
    { name: "Figma", level: 88, color: "#ebb207" },
    { name: "Canva", level: 85, color: "#0891b2" },
    { name: "Elementor", level: 90, color: "#9333ea" },
    { name: "WooCommerce", level: 80, color: "#16a34a" },

  ];

  const technologies = [
    "WordPress",
    "PHP",
    "Laravel",
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "jQuery",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "REST API",
    "Theme Development"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </div>

          {/* <h3 className="text-3xl self-center block text-center font-semibold text-gray-900 mb-8">
                Technical Proficiency
              </h3> */}

          <div className="grid bg-white rounded-xl   lg:grid-cols-2 gap-12 mb-1">
            <div className="p-3">
              <div className="space-y-6  m-auto  ">
              

                <div
                  style={{
                    width: 1100,
                    position: "relative",
                    // height: 300,
                    display: "grid",
                    gridTemplateColumns: "repeat(6,auto)",
                    gap: " 10px",
                    margin: 'auto',

                  }}
                  className="container"
                >
                  {skills.map((circle) => {
                    return (
                      <div className="place-items-center p-1" key={circle}>
                        <CircularProgressbarWithChildren
                          strokeWidth={6}                          
                          maxValue={100}
                          minValue={1}
                          backgroundPadding={20}
                          styles={buildStyles({
                            pathColor: circle.color,
                            trailColor: `${circle.color}2f`,
                          })}
                          className="bg-white m-auto rounded-full"
                          value={circle.level}
                        >
                          <p style={{ fontSize: '14px' }} className="text-center ">
                            <span style={{ color: circle.color, fontWeight: 'bolder' }} >
                              <div style={{ width: '35px',display:'flex', placeContent:'center',margin:'auto'}}>
                                <img height={50} alt={circle.name} src={circle.tech} />
                              </div>
                            </span>
                              <span className="font-bold">
                              {circle.name}

                              </span>
                            <span style={{color:circle.color}} className={`font-extrabold text-center text-xl mt-1 block`}>{circle.level}%</span>
                          </p>
                        </CircularProgressbarWithChildren>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          
          </div>


              {/* Mobile Menu */}
          <div className="grid bg-red-400 md:hidden lg:grid-cols-2 gap-12 mb-1">
            <div className="">
              <div className="  m-auto  ">
              

                <div
                  style={{
                    //width: 400,
                    position: "relative",
                    // height: 300,
                    display: "grid",
                    gridTemplateColumns: "repeat(3,auto)",
                    gap: " 10px",
                    margin: 'auto',

                  }}
                  className=""
                >
                  {skills.map((circle) => {
                    return (
                      <div className="place-content-center" key={circle}>
                        <CircularProgressbarWithChildren
                          
                          strokeWidth={6}
                          
                          maxValue={100}
                          minValue={1}
                          backgroundPadding={20}
                          styles={buildStyles({
                            pathColor: circle.color,
                            trailColor: `${circle.color}2f`,
                          })}
                          className="bg-white rounded-full"
                          // text={`${circle.level}%  ${circle.name}`}
                          value={circle.level}
                        >
                          <p style={{ fontSize: '14px' }} className="text-center ">
                            <span style={{ color: circle.color, fontWeight: 'bolder' }} >
                              <div style={{ width: '25px',display:'flex', placeContent:'center',margin:'auto'}}>
                                <img height={50} src={circle.tech} />
                              </div>
                            </span>
                              {circle.name}
                            <span style={{color:circle.color}} className={`font-extrabold text-center text-md mt-1 block`}>{circle.level}%</span>
                          </p>
                        </CircularProgressbarWithChildren>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>






 
    </section>
  );
};

export default Skills;
