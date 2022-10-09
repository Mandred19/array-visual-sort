import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { COLORS } from './utils/constants';
import AppArray from './components/AppArray';

const App: FC = (): ReactElement => {
  const {textThemeLight, textThemeDark, commonThemeLight, commonThemeDark} = COLORS;

  return (
    <div className={classNames(`w-full h-full overflow-hidden p-2 pb-0 text-${textThemeLight} dark:text-${textThemeDark} bg-${commonThemeLight} dark:bg-${commonThemeDark}`)}>
      <AppArray/>
    </div>
  );
};

export default App;
