"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createBlog } from "@/lib/blogs";

export default function CreateBlog() {
  const [heading, setHeading] = useState("Heading of the blog")
  const [subHeading, setSubHeading] = useState("Sub heading of the blog")
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const { userId } = useAuth();
  const Editor = useMemo(()=>dynamic(()=>import("@/components/shared/Editor"),{ssr:false}),[]);

  const create = () => { 
    try {
        setLoading(true);
      createBlog({heading: heading, subHeading: subHeading, content: content, adminId: userId}); 
    } catch(e) {
      console.log(e);
    } finally {
        setLoading(false)
    }
  }
  const onChange = (editorialContent: string) => {
    setContent(editorialContent)
  }

  return (
    <>
    <div className="min-h-screen">
    <div className="h-[80%] flex flex-col m-32 mt-12 gap-1">
        <TextareaAutosize
          onChange={(e)=>{
            setHeading(e.target.value);
          }}
          value={heading}
          className="text-5xl bg-transparent font-bold break-words outline-none text-[#3f3f3f] dark:text-[#cfcfcf] resize-none pl-12"
        />
        <TextareaAutosize
          onChange={(e)=> {
            setSubHeading(e.target.value);
          }}
          value={subHeading}
          className="text-3xl bg-transparent font-bold break-words outline-none text-[#3f3f3f] dark:text-[#cfcfcf] resize-none mt-3 mb-3 pl-12"
        />
        <Editor onChange={onChange} initialContent={content}/>
    </div>
    <Button disabled={loading} size="sm" className="ml-44" onClick={()=>{
        create();
    }}>
        {loading ? "Submitting" : "Submit"}
    </Button>
    </div>
    </>
  );
}