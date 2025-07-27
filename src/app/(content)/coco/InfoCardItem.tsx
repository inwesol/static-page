import { LucideIcon } from "lucide-react";

interface InfoCardItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function InfoCardItem({
  icon: Icon,
  title,
  description,
}: InfoCardItemProps) {
  return (
    <div className="bg-white flex gap-4 rounded-[6px] sm:rounded-xl p-4 border border-slate-200 shadow-md">
      <div>
        <div className="text-white font-bold bg-gradient-to-r from-primary-green-600 to-primary-blue-600 p-2 rounded-[6px]">
          <Icon className="size-5" />
        </div>
      </div>
      <div>
        <h2 className="text-primary-blue-600 font-bold text-base sm:text-lg">
          {title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}
