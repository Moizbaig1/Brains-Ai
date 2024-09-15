import figma from "../../../public/images/figma.png";
import Ps from "../../../public/images/PS.png";
import Illustrator from "../../../public/images/ai.png";
import AdobeXd from "../../../public/images/Adobexd.png";
import customSubService from "../../../public/images/mApp/customSubService.png";
import flutterSubService from "../../../public/images/mApp/flutterSubService.png";
export const UIUXServices = [
  {
    id: 1,
    icon: figma,
    title: "Figma",
  },
  {
    id: 2,
    icon: Ps,
    title: "Photoshop",
  },
  {
    id: 3,
    icon: Illustrator,
    title: "Illustrator",
  },
  {
    id: 4,
    icon: AdobeXd,
    title: "Adobe XD",
  },
];
export const UIUXSubServices = [
  {
    id: 1,
    title: "Custom App Development",
    description:
      "Our custom app development crafts tailored solutions, optimizing functionality and user experience for seamless integration and efficient operations.",
    image: customSubService,
    click: "/generativeai",
  },
  {
    id: 2,
    title: "Flutter App Development",
    description:
      "Flutter app development offers cross-platform solutions with high performance and native-like user experiences. Reach wider audiences efficiently with Flutter.",
    image: flutterSubService,
    click: "/fullstackdevelopment",
  },
];
export const TechDescription = [
  "We ensure a competitive advantage in an ever-changing technological environment by providing exceptional solutions consistently and by proficiently utilizing cutting-edge technologies.",
];

export const ServiceDescription = [
  "Our UI/UX services focus on designing intuitive and engaging user interfaces. We enhance user satisfaction by blending aesthetics with functionality, creating seamless and enjoyable digital experiences.",
];
