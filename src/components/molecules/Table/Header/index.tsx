import React, { PropsWithChildren } from 'react';

const Header = ({ children }: PropsWithChildren) => {
  return (
    <thead className="w-full bg-moss-300">
      <tr>{children}</tr>
    </thead>
  );
};

export default Header;
