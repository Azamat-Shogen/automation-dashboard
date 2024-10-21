"use client";
import clsx from "clsx";


export const Header = () => {

    return (
        <div className={clsx("sticky top-0 z-50 w-full h-20 bg-gradient-to-r from-blue-200 to-blue-500  flex items-center justify-center")}>
            <h1 className="text-4xl font-extrabold text-slate-600 drop-shadow-lg">
                Automation Dashboard
            </h1>
        </div>
    
    )
}