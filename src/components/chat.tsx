"use client";

import { ChatBubble } from "./chat-bubble";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Message, useChat} from "ai/react";
import { getSources, initialMessages, scrollToEnd } from "@/lib/utils";
import { Spinner } from "./ui/spinner";
import { useEffect, useRef } from "react";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit, isLoading, data } = 
    useChat({ 
        initialMessages,
    });

    const containerRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        setTimeout(() => scrollToEnd(containerRef), 100);
      }, [messages]);
    

    return (
        <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
            <div className="p-6 overflow-auto" ref={containerRef}>
                {messages.map(({id, role,content }: Message, index) => (
                    <ChatBubble
                        key={id}
                        role={role}
                        content={content}
                        sources={data?.length ? getSources(data, role, index) : []}
                    />
                ))}
            </div>
        <form onSubmit={handleSubmit} className="p-4 flex clear-both">
            <Input 
                placeholder={"Chatea conmigo..."} 
                value={input}
                onChange={handleInputChange}
                className="mr-2" 
            />

            <Button type="submit" className="w-24">
                {isLoading ? <Spinner /> : "Ask"}
            </Button>
        </form>
        </div>
    )
}


