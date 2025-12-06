import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from '@/components/ui/progress';

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
    let colorFrom = ''
    let colorTo = ''
    const progressForLevel = (level: LevelProps) => {
        switch (level){
            case 'basico':
                nameLevel = 'Básico'
                colorFrom = 'from-blue-500'
                colorTo = 'to-purple-600'
                return 30;
            case 'medio':
                nameLevel = 'Médio'
                colorFrom = 'from-blue-500'
                colorTo = 'to-purple-600'
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
        <Card className="w-full max-w-sm flex flex-row gap-3 mb-3">
            <CardHeader>
                <span className="p-2 rounded-md bg-gray-400/25">{stackIcon || stackImageIcon}</span>
            </CardHeader>

            <CardContent className='w-full'>
            <CardTitle className="mb-2">{stackName}</CardTitle>
            <CardDescription className='gap-2'>
                <div className='flex  items-center gap-2'>
                    <Progress value={progressForLevel(stackLevel as LevelProps)} 
                        className={`
                        [&>div]:bg-gradient-to-r 
                        [&>div]:${colorFrom} 
                        [&>div]:${colorTo}`}/>
                    {nameLevel}
                </div>
            </CardDescription>
            </CardContent>
        </Card>
    );
};

export default CardStack;