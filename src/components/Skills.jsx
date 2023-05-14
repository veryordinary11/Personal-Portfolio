import { motion } from "framer-motion";

const SkillAvatar = ({ src, alt }) => {
  return (
    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
      <div className="w-32 rounded">
        <img src={src} alt={alt} />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-7xl mt-64 w-full text-center xl:!text-6xl lg:!text-6xl md:!text-5xl sm:text-3xl">
        Skills
      </h2>
      <div className="flex flex-wrap justify-between mt-16">
        <SkillAvatar
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425"
          alt="html5"
        />

        <SkillAvatar
          src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
          alt="tailwindCss"
        />

        <SkillAvatar
          src="https://www.svgrepo.com/show/452045/js.svg"
          alt="js"
        />

        <SkillAvatar
          src="https://www.svgrepo.com/show/374146/typescript-official.svg"
          alt="ts"
        />

        <SkillAvatar
          src="https://www.svgrepo.com/show/452092/react.svg"
          alt="react"
        />

        <SkillAvatar
          src="https://www.svgrepo.com/show/452093/redux.svg"
          alt="redux"
        />

        <SkillAvatar
          src="https://www.svgrepo.com/show/373595/firebase.svg"
          alt="Firebase"
        />

        <SkillAvatar
          src="https://www.svgrepo.com/show/354552/webpack.svg"
          alt="webpack"
        />
      </div>
    </div>
  );
};

export default Skills;
