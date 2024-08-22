import FeatureBox from "./FeatureBox";
import { useState } from "react";
function Features() {
  const [items, ] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anywhere",
      desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, neque.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, neque.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, neque.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can  trust",
      desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, neque.",
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
