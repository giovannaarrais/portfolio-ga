import * as Icons from 'react-icons/si';

interface DynamicIconProps {
    iconName: string | null;
    size: number;
}

const DynamicIcon = ({iconName,size}: DynamicIconProps) => {

    const IconComponent = Icons[`Si${iconName}` as keyof typeof Icons]

    if(!IconComponent){
        console.warn("Icone nao encontrado", iconName)
        return null
    }

    return <IconComponent className="p-0.5" size={size}/>
};

export default DynamicIcon;