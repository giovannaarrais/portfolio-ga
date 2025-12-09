import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import DynamicIcon from "../../DynamicIcon/component";
import Link from "next/link";

interface SocialComponentProps {
    linkId: string;
    linkIsActive: boolean;
    linkUrl: string;
    linkIcon: string | null;
    linkPlatform: string | null;
}
const SocialComponent = ({
    linkUrl,
    linkIcon,
    linkPlatform,
    linkId,
    linkIsActive
}: SocialComponentProps) => {
    return (
        <>
            {linkIsActive && (
                <Link href={linkUrl} target="_blank">
                    <Card className="py-4 shadow-lg transition-all hover:scale-101 hover:border-sky-400 hover:shadow-sky-500/25">
                        <CardContent className="flex sm:gap-4 gap-2 sm:px-3 px-2">
                            <div className="flex max-w-[50px] min-w-[50px] flex-auto items-center justify-center rounded-md bg-sky-600/25 text-sky-500">
                                <DynamicIcon iconName={linkIcon} />
                            </div>
                            <div className="flex-auto">
                                <CardTitle className="mb-1 text-sm">
                                    {linkPlatform}
                                </CardTitle>
                                <CardDescription className="text-xs inline-block" style={{ wordBreak: "break-word" }}>
                                    {linkUrl}
                                </CardDescription>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            )}
        </>
    );
};

export default SocialComponent;
