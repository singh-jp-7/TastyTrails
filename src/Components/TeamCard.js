import { useEffect, useState } from "react";
import { DEV_TAGLINE, GIT_BASE_URL } from "../utils/constants";
import { DEV_ROLE } from "../utils/constants";

const TeamCard = ({ member, id }) => {
  const [memberDetails, setMemberDetails] = useState(null);
  useEffect(() => {
    getMemberDetails();
  }, []);

  const getMemberDetails = async () => {
    const data = await fetch(GIT_BASE_URL + member);
    const json = await data.json();
    setMemberDetails(json);
  };

  return (
    <div className="flex flex-row m-auto w-6/12 p-6">
      <img
        className=" rounded-full w-44 h-44 "
        src={memberDetails?.avatar_url}
      ></img>
      <div className="flex flex-col ml-6 py-8 bg-gray-100">
        <h2>{memberDetails?.name}</h2>
        <h2>{DEV_ROLE[id]}</h2>
        <h2>"{DEV_TAGLINE[id]}" </h2>
      </div>
    </div>
  );
};

export default TeamCard;
