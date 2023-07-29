import { TypeAnimation } from "react-type-animation";

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "JavaScript",
        1000,
        "JavaScript Developer and",
        1500,
        "JavaScript Developer and Cloud Newbie",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      style={{ display: "inline-block" }}
    />
  );
};

export default TypeAnimationComponent;
