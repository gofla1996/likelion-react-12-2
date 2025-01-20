import './chip.css';
import { ChipType } from '@/types/chip';

interface ChipProps {
  item: ChipType;
}

function Chip({ item }: ChipProps) {
  const handleToggle = () => {
    console.log('toggle chip');
  };

  return (
    <span
      role="button"
      className="Chip"
      tabIndex={0}
      aria-pressed={true}
      aria-disabled={true}
      onClick={handleToggle}
    >
      {item.label}
    </span>
  );
}

export default Chip;
