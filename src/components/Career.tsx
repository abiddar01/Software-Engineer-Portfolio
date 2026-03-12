import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Final Year Project Lead</h4>
                <h5>COMSATS Lahore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and building SmartAuto AI — an intelligent car
              recommendation platform using the MERN stack and Python AI/ML
              microservices, featuring NLP chatbot, cost prediction, and
              real-time booking with cloud deployment on Railway/Vercel.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer (Projects)</h4>
                <h5>Academic — BS Software Engineering</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built multiple full-stack applications including CarFlex (vehicle
              booking platform), SecureCollect (enterprise data validation), and
              Cartify (e-commerce system) using Node.js, Express.js, React.js,
              MongoDB, and Tailwind CSS.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Student</h4>
                <h5>COMSATS Lahore</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started BS Software Engineering, gaining hands-on experience in
              full-stack development, REST APIs, JWT authentication, Git/GitHub
              version control, and SDLC practices through collaborative
              academic projects.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;