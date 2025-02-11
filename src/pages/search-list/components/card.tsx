import { ColorMoodItem } from '../types';
import { tm } from '@/utils/tw-merge';

interface CardProps {
  item: ColorMoodItem;
}

function Card({ item }: CardProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(slug);
  };

  const slug = `/color-mood/${item.id}`;

  return (
    <li className="flex flex-col items-center">
      <figure
        role="presentation"
        className={tm('size-32 rounded-full')}
        style={{ background: 'blue' }}
      ></figure>
      <a
        href={slug}
        className={tm('flex flex-col items-center')}
        onClick={handleLink}
      >
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </a>
    </li>
  );
}

export default Card;
