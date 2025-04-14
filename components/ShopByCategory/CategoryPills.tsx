interface CategoryPillsProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryPills = ({ selectedCategory, onCategorySelect }: CategoryPillsProps) => {
  const categories = [
    'Problem solving',
    'Geography',
    'Coding',
    'STEM',
    'Packs and Combos',
    'Language and Numbers',
    'Animals and Dinsaurs',
    'Space and Music'
  ];

  return (
    <div className="flex flex-wrap gap-4 my-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-6 py-2 rounded-full border transition-colors ${
            selectedCategory === category
              ? 'bg-secondary text-white border-secondary'
              : 'border-gray-300 text-gray-700 hover:border-secondary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;