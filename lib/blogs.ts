import { connectToDB } from "@/lib/db";
import Blog from "@/model/blog";

interface CreateBlogProps {
    heading?: string;
    subHeading?:string; 
    content?:string; 
    adminId: any; 
    eventDate?:string
}

export const createBlog = async ({heading, subHeading, content, adminId, eventDate}: CreateBlogProps) => {
  await connectToDB();
  try {
    const blog = await Blog.create({
        heading,
        subHeading,
        content,
        adminId,
        eventDate
    })
    return blog;
  } catch(e) {
    console.log(e)
  }
};
