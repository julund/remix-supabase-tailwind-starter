import * as icon from "react-icons/tb";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    xmlns?: string;
    size?: string | number;
    color?: string;
    title?: string;
    strokeWidth?: string | number;
    viewBox?: string;
}

const defaultIconProps: IconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    size: 20, stroke: "currentColor", fill: "none", strokeWidth: 1.75, viewBox: "0 0 24 24", strokeLinecap: "round", strokeLinejoin: "round"
};

export const IconArrowBack = ({ ...props }: IconProps) => icon.TbArrowBack({ ...defaultIconProps, ...props });