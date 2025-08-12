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
    <div className="group bg-white/50 flex gap-4 rounded-[6px] sm:rounded-xl p-4 border border-slate-200 shadow-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div>
        <div className="text-white font-bold bg-gradient-to-br from-primary-green-100 to-blue-100 p-2 sm:p-3 rounded-[6px] sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="size-5 sm:size-6 text-primary-green-600" />
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
