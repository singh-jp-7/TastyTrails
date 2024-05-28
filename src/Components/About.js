import { DEVS } from "../utils/constants";
import TeamCard from "./TeamCard";
const About = () => {
  return (
    <div className="m-8">
      <h1 className="font-bold text-center text-pretty my-6 text-5xl">
        Meet the Crazy Wizards
      </h1>
      {DEVS.map((dev, index) => {
        return <TeamCard className="" key={dev} member={dev} id={index} />;
      })}
    </div>
  );
};

export default About;
