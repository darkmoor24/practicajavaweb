import { LordIconProps } from "@/@types";
import React from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);

const LordIcon: React.FC<LordIconProps> = (lordIconProps : LordIconProps) => {
    return React.createElement('lord-icon', { ...lordIconProps });
};

export default LordIcon;
