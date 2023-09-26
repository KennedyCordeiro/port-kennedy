import IconsCarousel from "../../components/iconsCarousel";
import * as C from "./Skills.styled";

const Skills = () => {
  return (
    <C.DivSkills>
      <C.DivTitle>
        <C.Title> Skills</C.Title>
      </C.DivTitle>
      <IconsCarousel></IconsCarousel>
    </C.DivSkills>
  );
};

export default Skills;
