import React, { PropsWithChildren } from 'react';

const Column = ({ children }: PropsWithChildren) => {
  return <th className="text-base text-left text-moss-500 px-4 py-3 font-normal">{children}</th>;
};

export default Column;
