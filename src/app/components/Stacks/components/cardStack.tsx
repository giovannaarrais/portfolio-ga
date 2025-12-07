
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from '@/components/ui/progress';
import DynamicIcon from "../../DynamicIcon/component";
import Image from "next/image";

type LevelProps = "basico" | "medio" | "intermediario" | "avancado" | null;

interface CardStackProps {
    stackId: string;
    stackIcon: string | null;
    stackImageIcon: string | null;
    stackName: string;
    stackLevel: string | null;
}

const CardStack = ({stackId, stackIcon, stackImageIcon, stackName, stackLevel}:CardStackProps) => {

    let nameLevel = ''
    const progressForLevel = (level: LevelProps) => {
        switch (level){
            case 'basico':
                nameLevel = 'Básico'
                return 30;
            case 'medio':
                nameLevel = 'Médio'
                return 50;
            case 'intermediario':
                nameLevel = 'Intermediário'
                return 75;
            case 'avancado':
                nameLevel = 'Avançado'
                return 90;
            default:
                return 0
        }
    }


    return (
        <Card className="mb-4 hover:border-sky-400 hover:shadow-sky-500/25 shadow-lg transition-all hover:scale-101">
            <CardContent className=' flex gap-4 px-3'>
            <div className="flex-auto max-w-[50px] min-w-[50px] flex justify-center bg-gray-600/25 items-center rounded-md">
                {stackImageIcon !== null ? (
                    <Image
                        src={stackImageIcon}
                        alt={stackName}
                        sizes="100vw"
                        width={0}
                        height={0}
                        className="h-auto w-auto max-h-[27px] "
                    />
                ): (
                    <DynamicIcon iconName={stackIcon}/>
                )}
            </div>
            <div className="flex-auto">
                <CardTitle className="mb-2">{stackName}</CardTitle>
                <CardDescription className='gap-2'>
                    <div className='flex  items-center gap-2'>
                        <Progress value={progressForLevel(stackLevel as LevelProps)} 
                            className={`
                            [&>div]:bg-gradient-to-r 
                            bg-gray-500/25
                            ${stackLevel === "basico" && "[&>div]:from-green-400 [&>div]:to-green-800"}
                            ${stackLevel === "medio" && "[&>div]:from-purple-400 [&>div]:to-purple-800"}
                            ${stackLevel === "intermediario" && "[&>div]:from-orange-400 [&>div]:to-orange-800"}
                            ${stackLevel === "avancado" && "[&>div]:from-red-400 [&>div]:to-red-800"}
                            `}/>
                        {nameLevel}
                    </div>
                </CardDescription>
            </div>
            </CardContent>
        </Card>
    );
};

export default CardStack;