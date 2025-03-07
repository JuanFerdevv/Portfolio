import { useEffect, createContext, useState,useContext } from "react";
import useMousePosition from "@/hooks/useMousePosition";
const SomeContext = createContext(null);

export const MouseProvider=({children}:never)=>{
    const {x,y}=useMousePosition();
    const [hovered,isHovered]=useState(false);

    useEffect(()=>{
        const handleMouseMove=(e:MouseEvent):void=>{
            setMousePosition({x:e.clientX,y:e.clientY});
        };
    })

}