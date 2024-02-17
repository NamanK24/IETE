import { ScrollArea } from "../ui/scroll-area";
import BlogLink from "./BlogLink";

interface NoticeBoardProps {
    adminId?: string;
    classes?: string;
}

export default function NoticeBoard({adminId, classes}: NoticeBoardProps) {
    return (
        <ScrollArea className={`h-[200px] w-[95%] rounded-md border ${classes}`}>
          <div className="p-5">
            <BlogLink />
            
          </div>
        </ScrollArea>
    )
}