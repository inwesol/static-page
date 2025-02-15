import React from 'react'

interface Props {
    title: string;
    color?:string
}

const MagicBadge = ({ title, color = '#3fa1d8' }: Props) => {
    return (
        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[2.5px] focus:outline-none select-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00B24B_0%,#3FA1D8_50%,#00B24B_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                {title}
            </span>
        </div>
    )
};

export default MagicBadge


/**
 * 
 * 6d28d9 - hsl(263 70% 50.4%)
 * d8b4fe - hsl(269 97.4% 85.1%)
 */