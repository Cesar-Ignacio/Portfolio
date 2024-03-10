"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        id: string;
        nombre:string;
        descripcion: string;
        url: string;
        link:string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li className=" relative rounded-2xl flex-shrink-0 w-[450px] p-4 bg-firefly-700 bg-opacity-30 shadow-[0px_0px_10px_0px] shadow-silver-50 backdrop-filter backdrop-blur-[0px]" key={item.id}>
                        <a href={item.link} target="_blank">
                            <blockquote>
                                <div aria-hidden="true"className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]">
                                </div>
                                <div className="flex gap-2 items-center  justify-center">
                                    <div className="w-[15%]">
                                        <img src={item.url} alt="imgIcon" className="w-[100%] h-[100%] object-fill" />
                                    </div>
                                    <div className=" w-[85%] flex flex-col text-silver-100 dark:text-silver-200">
                                        <strong >{item.nombre}</strong>
                                        <p className=" relative z-20 text-sm  line-clamp-2 " >
                                            {item.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </blockquote>
                        </a>

                    </li>
                ))}
            </ul>
        </div>
    );
};
