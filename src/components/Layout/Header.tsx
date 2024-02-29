import React from 'react';
import Button from '../atom/Button';
import Icon from '../atom/Icon';

const Header = () => {
  return (
    <header className="w-full flex items-center gap-4">
      <Button color="outline" format="square">
        <Icon name="arrow" />
      </Button>
      <h2 className="text-3xl text-success">Institucional</h2>
    </header>
  );
};

export default Header;
