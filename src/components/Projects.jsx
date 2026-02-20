import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://majoraudit.web.app/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('projects/y:cs.ico')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>MajorAudit</h3>
          <p>
            Developer on the MajorAudit team, building a full-stack degree audit
            platform for 6,500+ Yale students across 80+ majors, encoding 1,000+
            course requirement rules (Fall 2025 launch).
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Django</span>
            <span>PostgreSQL</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://www.arbol.io/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/arbol.jpeg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Insurance Program Dashboard </h3>
          <p>
            Full-stack internal Insurance Program Management Platform to
            automate structured data extraction from insurance documents (2025
            summer internship).
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>AWS Textract</span>
            <span>LangChain</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://yale-strength.vercel.app", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/bulldogs.png')",
              backgroundColor: "white",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Yale Strength Tracking Platform</h3>
          <p>
            A full-stack web platform for tracking and ranking strength lifts
            (bench press, squat, deadlift) among Yale students and faculty.
            Features secure Yale-email authentication, user profiles with lift
            history, and video uploads for verification.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Typescript</span>
            <span>Supabase</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
