import React, { FC, ReactElement } from 'react';
import AppBar from './AppBar';
import { createArray } from '../../utils/createArray';
import classNames from 'classnames';

const SCREEN_WIDTH = window.screen.width;
const ARRAY = createArray(30);
const BAR_WIDTH = SCREEN_WIDTH / ARRAY.length;

const AppArray: FC = (): ReactElement => {
  return (
    <div className={classNames(`w-full h-full flex items-end justify-center`)}>
      {
        ARRAY.map((height: number, index: number) => (<AppBar key={`${index}`} width={BAR_WIDTH} height={height}/>))
      }
    </div>
  );
};

export default AppArray;