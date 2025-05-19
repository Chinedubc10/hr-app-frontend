import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About This HR Platform</h2>
        <p>
          This HR system is designed to simplify how organizations manage their team information.
          It offers a user-friendly interface for viewing, editing, and organizing employee records.
        </p>
        <p>
          Developed using <strong>React</strong>, the app features responsive design, smart logic for milestones,
          and efficient navigation through routing and dynamic content.
        </p>
        <p>
          Whether you're running a small business or managing a large workforce, this platform 
          is built to help you stay organized and focused on people, not paperwork.
        </p>
        <div className="tech-stack">
          <h3>🛠️ Built With</h3>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Vite</li>
            <li>Modern JavaScript (ES6+)</li>
            <li>Custom CSS Styling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;