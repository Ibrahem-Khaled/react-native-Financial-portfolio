import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from '../Store/Store';
import NewGoal from '../Screens/NewGoal';

// Mocking necessary hooks and components
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../Store/Store', () => ({
  useFormContext: jest.fn(),
}));

describe('NewGoal Component', () => {
  const mockNavigate = jest.fn();
  const mockUpdateFormData = jest.fn();

  it('renders the NewGoal component and checks for the next button being disabled', () => {
    const { getByRole } = render(<NewGoal />);
    
    const forwardButton = getByRole('button');
    
    // The forward button should be disabled initially because the goal name is empty
    expect(forwardButton.props.disabled).toBe(true);
  });

  it('enables forward button when goalName is provided', () => {
    (useFormContext).mockReturnValue({
      formData: {
        step: 1,
        goalName: 'Test Goal',
        amount: '',
        monthlyAmount: '',
        selectedDay: '',
        isMonthlyDeposit: false,
      },
      updateFormData: mockUpdateFormData,
    });

    const { getByRole } = render(<NewGoal />);
    
    const forwardButton = getByRole('TouchableOpacity');
    
    // The forward button should be enabled when goalName is provided
    expect(forwardButton.props.disabled).toBe(false);
  });
});
