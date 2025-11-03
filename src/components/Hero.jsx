import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Welcome to my Portfolio!! </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Daniel Lee
          </motion.h1>
          <motion.p className="hero-description" variants={fadeInUp}>
            Computer Science major at Yale and Varsity Fencing Team member.
            Former SWE & PM intern at Arbol, aspiring web and backend developer
            passionate about building impactful digital products.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/danielylee2006" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/daniel-lee-2b1474326/"
              target="_blank"
            >
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/daniel_ylee/"
              target="_blank"
            >
              <i className="fab fa-instagram"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`//About Me!!

const DeveloperProfile = {
  name: "Daniel Lee",
  school: "🏫 Yale University"
  origin: "📍 Oakton,VA",
  role: "Web & Backend Developer",
  Stack: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C/C++"],
    frameworks: ["React", "TailwindCSS", "FastAPI", "LangChain"],
  },
  Interests: [
    "Fitness",
    "Content Creation",
    "Bouldering",
    "Poker",
  ],
  MissionStatement:
    "Building fast, thoughtful systems that prioritizes performance and reliability",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                code compiling...
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
