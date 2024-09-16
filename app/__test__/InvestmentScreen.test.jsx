import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { useAnalytics } from '@segment/analytics-react-native';
import InvestmentScreen from '../Screens/Investment';


jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@segment/analytics-react-native', () => ({
  useAnalytics: jest.fn(),
}));

describe('InvestmentScreen', () => {
  const mockNavigate = jest.fn();
  const mockTrack = jest.fn();

  beforeEach(() => {
    (useNavigation).mockReturnValue({ navigate: mockNavigate, goBack: jest.fn() });
    (useAnalytics).mockReturnValue({ track: mockTrack });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });



  it('navigates to new goal screen when the button is pressed', () => {
    const { getByText } = render(<InvestmentScreen />);
    const button = getByText('Start Now');
    
    fireEvent.press(button);
    
  
    expect(mockNavigate).toHaveBeenCalledWith('newGoal'); 
 
    expect(mockTrack).toHaveBeenCalledWith('start invest');
  });


});
