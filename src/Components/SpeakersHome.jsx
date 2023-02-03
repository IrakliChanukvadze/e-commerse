import React from "react";
import Zx9SpeakerHome from "./Zx9SpeakerHome";
import { responsiveContainer } from "../Styles";
import Zx7SpeakerHome from "./Zx7SpeakerHome";
import Yx1Earphone from "./Yx1Earphone";

const SpeakersHome = () => {
  return (
    <div
      className={`${responsiveContainer} flex flex-col gap-10 sm:gap-14 xl:gap-20 mb-5 sm:mb-10 xl:mb-16`}
    >
      <Zx9SpeakerHome />
      <Zx7SpeakerHome />
      <Yx1Earphone />
    </div>
  );
};

export default SpeakersHome;
