
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
        <Card className="soft-card mb-4 transition-all hover:-translate-y-1 hover:border-[var(--orange)]">
            <CardContent className=' flex gap-4 px-3'>
                <div className="flex-auto max-w-[50px] min-w-[50px] flex justify-center bg-[var(--sand)] text-[var(--orange)] items-center rounded-xl">
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
                        <DynamicIcon iconName={stackIcon} size={25}/>
                    )}
                </div>
                <div className="flex-auto">
                    <CardTitle className="mb-2">{stackName}</CardTitle>
                    <CardDescription className='gap-2'>
                        <div className='flex  items-center gap-2'>
                            {stackLevel && (
                                <Progress value={progressForLevel(stackLevel as LevelProps)} 
                                className={`
                                [&>div]:bg-[var(--orange)] bg-[var(--sand)]
                                `}/>
                            )}
                            {nameLevel}
                        </div>
                    </CardDescription>
                </div>
            </CardContent>
        </Card>
    );
};

export default CardStack;
