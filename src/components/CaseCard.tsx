interface CaseProps {
  title: string;
  background: string;
  solution: string;
  result: string;
}

export default function CaseCard({ title, background, solution, result }: CaseProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-3 text-sm text-gray-600">
        <div>
          <span className="font-medium text-gray-700">背景：</span>
          <span>{background}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">方案：</span>
          <span>{solution}</span>
        </div>
        <div>
          <span className="font-medium text-green-700">成果：</span>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}
