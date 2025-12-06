import * as Icons from "lucide-react";

interface DynamicIconProps {
    iconName: string | null;
}

const DynamicIcon = ({iconName}: DynamicIconProps) => {

    const IconComponent = Icons[iconName as keyof typeof Icons]
    const FinalIcon =  IconComponent ?? Icons.Code

    return <FinalIcon className="p-0.5"/>
};

export default DynamicIcon;