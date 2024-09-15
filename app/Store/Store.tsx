import React, { createContext, useContext, useState } from 'react';

// Create a context for the form data
const FormContext = createContext(null);

// Hook to use the form context (if you prefer)
export const useFormContext : any = () => {
    return useContext(FormContext);
};

// FormProvider component to wrap around your components
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        goalName: '',
        amount: '',
        monthlyAmount: '',
        isMonthlyDeposit: false,
        selectedDay: '1',
        step: 1,
        questionStep: 0,
        selectedOptions: [], 
    });

    const updateFormData = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
