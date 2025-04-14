interface AgeFilterPillsProps {
  selectedAge: string;
  onAgeSelect: (age: string) => void;
}

const AgeFilterPills = ({ selectedAge, onAgeSelect }: AgeFilterPillsProps) => {
  const ageGroups = [
    '4-6 yrs',
    '6-8 yrs',
    '8-10 yrs',
    '10+ yrs'
  ];

  return (
    <div className="flex gap-4 my-5">
      {ageGroups.map((age) => (
        <button
          key={age}
          onClick={() => onAgeSelect(age)}
          className={`px-6 py-2 rounded-full border transition-colors ${
            selectedAge === age
              ? 'bg-secondary text-white border-secondary'
              : 'border-gray-300 text-gray-700 hover:border-secondary'
          }`}
        >
          {age}
        </button>
      ))}
    </div>
  );
};

export default AgeFilterPills;