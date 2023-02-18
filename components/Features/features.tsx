// icon imports
import { ReactElement } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { IconType } from "react-icons/lib";

// type
type Feature = {
    icon: ReactElement<IconType>;
    name: string;
    description: string;
};

// all features list
export const Features: Array<Feature> = [
    {
        icon: <BsMenuButtonWide />,
        name: "Role Menu",
        description: "The best of the world is this ok hmm but no role is ok.",
    },
    {
        icon: <BsMenuButtonWide />,
        name: "Role Menu",
        description: "The best of the world is this ok hmm but no role is ok.",
    },
    {
        icon: <BsMenuButtonWide />,
        name: "Role Menu",
        description:
            "The best of the world is this ok hmm but no role is ok so this is way ok.",
    },
    {
        icon: <BsMenuButtonWide />,
        name: "Role Menu",
        description: "The best of the world is this ok hmm but no role is ok.",
    },
    {
        icon: <BsMenuButtonWide />,
        name: "Role Menu",
        description: "The best of the world is this ok hmm but no role is ok.",
    },
    {
        icon: <BsMenuButtonWide />,
        name: "Role Menu",
        description: "The best of the world is this ok hmm but no role is ok.",
    },
];
