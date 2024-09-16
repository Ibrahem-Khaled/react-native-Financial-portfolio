import React, { createContext, useContext, useState, ReactNode } from 'react';
import {FormData , FormContextType , FormProviderProps} from '../../interfaces/interfaces'


const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = (): FormContextType => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};


export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({
        goalName: '',
        amount: '',
        monthlyAmount: '',
        isMonthlyDeposit: false,
        selectedDay: '1',
        step: 1,
        questionStep: 0,
        selectedOptions: [], 
        portfolioChoice : '',
        agreement : false
    });

    const updateFormData = (field: keyof FormData, value: any) => {
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
