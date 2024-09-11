import React from 'react';
import { Button } from 'react-native';

const ThemeToggleButton = ({ toggleTheme }) => {
  return <Button title="Toggle Theme" onPress={toggleTheme} />;
};

export default ThemeToggleButton;