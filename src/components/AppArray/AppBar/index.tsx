import React, { FC, ReactElement } from 'react';
import { COLORS } from '../../../utils/constants';

const AppBar: FC<Props> = ({ height, width }): ReactElement => {
  const {commonThemeLight, commonThemeDark} = COLORS;

  const barStyles = {
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <div className={`bg-teal-700 dark:bg-yellow-300 border-${commonThemeLight} dark:border-${commonThemeDark} border-2 border-b-0 rounded-t-md`} style={barStyles}/>
  );
};

export default AppBar;

interface Props {
  height: number;
  width: number;
}