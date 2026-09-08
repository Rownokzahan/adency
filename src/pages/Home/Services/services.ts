import type { IconType } from "react-icons/lib";
import { FiVideo, FiTarget, FiShare2, FiPenTool } from "react-icons/fi";

export interface ServiceType {
  title: string;
  description: string;
  Icon: IconType;
}

export const services: ServiceType[] = [
  {
    title: "CONTENT AGENCY",
    description:
      "Our in-house content team delivers high-quality video and audio to bring your brand's vision to life.",
    Icon: FiVideo,
  },
  {
    title: "STRATEGY & CONSULTATION",
    description:
      "We create custom digital strategies to perfectly position your brand and engage your audience effectively.",
    Icon: FiTarget,
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    description:
      "Our approach makes your brand a standout conversational leader through advanced social media tactics.",
    Icon: FiShare2,
  },
  {
    title: "Branding",
    description:
      "Our creative team harmonizes visual and experiential elements, refining your brand for exceptional user experiences.",
    Icon: FiPenTool,
  },
];
