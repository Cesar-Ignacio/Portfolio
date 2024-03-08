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
        quote: string;
        name: string;
        title: string;
        url: string;
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
                    <li className=" relative rounded-2xl flex-shrink-0 w-[450px] p-4 bg-firefly-700 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]" key={item.name}>
                        <a href="">
                            <blockquote>
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                ></div>
                                <div className="flex gap-2 items-start  justify-center">
                                    <div className="w-[5rem] rounded-[50%] overflow-hidden mt-2">
                                        <img src={item.url} alt="imgIcon" className="w-[100%] h-[100%] object-cover" />
                                    </div>
                                    <div className="flex flex-col text-silver-100 dark:text-silver-200">
                                        <strong >NombreApp</strong>
                                        <span className=" relative z-20 text-sm ">
                                            {item.quote}
                                            {/* <img src={item.url} alt="img" className="" /> */}
                                        </span>
                                    </div>
                                    {/* <div className="relative z-20 mt-6 flex flex-row items-center">
                                    <span className="flex flex-col gap-1">
                                        <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                                            {item.name}
                                        </span>
                                        <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                                            {item.title}
                                        </span>
                                    </span>
                                </div> */}
                                </div>
                            </blockquote>
                        </a>

                    </li>
                ))}
            </ul>
        </div>
    );
};
