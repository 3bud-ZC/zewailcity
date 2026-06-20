interface SummaryValue {
  label: string;
  value: string;
}

interface SummaryCardProps {
  title: string;
  values: SummaryValue[];
}

export default function SummaryCard({ title, values }: SummaryCardProps) {
  return (
    <div className="bg-white rounded shadow border border-gray-200 p-4 sm:p-5">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex gap-8">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-normal text-gray-900 tabular-nums">{v.value}</span>
            <span className="text-xs text-gray-500 mt-1">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
