import { FC, useState } from 'react';

import iconMemory from './assets/images/icon-memory.svg';
import iconReaction from './assets/images/icon-reaction.svg';
import iconVerbal from './assets/images/icon-verbal.svg';
import iconVisual from './assets/images/icon-visual.svg';

interface Props {
  category: string;
  score: number;
}

const SummaryComponent: FC<Props> = ({ category, score }): JSX.Element => {
  // const [textColor, setTextColor] = useState<string>('');
  // const [bgItem, setBgItem] = useState<string>('');

  // if (category === 'Reaction') {
  //   setTextColor('text-primary-red-light');
  //   setBgItem('bg-primary-red-trans');
  // } else if (category === 'Memory') {
  //   setTextColor('text-primary-orangey-yellow');
  //   setBgItem('bg-primary-orangey-trans');
  // } else if (category === 'Verbal') {
  //   setTextColor('text-primary-green-teal');
  //   setBgItem('bg-primary-green-trans');
  // } else {
  //   setTextColor('text-primary-cobalt-blue');
  //   setBgItem('bg-primary-cobalt-trans');
  // }
  return (
    <div
      className={`${
        category === 'Reaction'
          ? 'bg-primary-red-trans'
          : category === 'Memory'
          ? 'bg-primary-orangey-trans'
          : category === 'Verbal'
          ? 'bg-primary-green-trans'
          : 'bg-primary-cobalt-trans'
      } px-3 h-12 rounded-md grid grid-cols-itemRight gap-x-3 items-center`}
    >
      <img
        src={
          category === 'Reaction'
            ? iconReaction
            : category === 'Memory'
            ? iconMemory
            : category === 'Verbal'
            ? iconVerbal
            : iconVisual
        }
        alt="reaction"
      />
      <h2
        className={`${
          category === 'Reaction'
            ? 'text-primary-red-light'
            : category === 'Memory'
            ? 'text-primary-orangey-yellow'
            : category === 'Verbal'
            ? 'text-primary-green-teal'
            : 'text-primary-cobalt-blue'
        } font-bold`}
      >
        {category}
      </h2>

      <div className="justify-self-end grid grid-cols-repeat-3-max gap-x-2">
        <p className="font-bold">{score}</p>
        <span>/</span>
        <p className="text-neutral-dark-grayblue">100</p>
      </div>
    </div>
  );
};

export default SummaryComponent;
