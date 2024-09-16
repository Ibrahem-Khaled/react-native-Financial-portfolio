import { ReactNode } from "react";
import { paths } from "./Urls";


export interface RootStackParamList extends Record<keyof typeof paths, string> {
  home: string;
  newGoal: string;
  investment: string;
  questions: string;
  userResult: string;
}

  export interface AcademyCardProps {
    item: {
        id: string;
        image: any;
        title: string;
        actionText: string;
    };
    nav: any; 
}

export interface ServiceCardProps {
    item: {
        id: string;
        icon?: string;
        image?: any;
        title: string;
        description?: string;
        buttonText?: string;
        backgroundColor?: string;
        border?: boolean;
    };
}

export interface FinancialAcademyProps {
    item: {
        id: string;
        image: any;
    };
}

export interface AgreementSectionPortoflioProps {
    styles: {
      agreementContainer: any;
      agreementText: any;
      linkText: any;
    };
    handleAgreementChange: (value: boolean) => void;
    agreement: boolean;
  }

  export interface ButtonSectionPortoflioProps {
    styles: {
      buttonContainer: any;
      backButton: any;
      backButtonText: any;
      createGoalButton: any;
      createGoalButtonText: any;
    };
    navigation: {
      goBack: () => void;
    };
    agreement: boolean;
    handleCreateGoal: () => void;
  }

  export interface CreateGoalProps {
    styles: {
      title: any;
      subtitle: any;
      imageContainer: any;
      editIcon: any;
      input: any;
    };
  }

  export interface PortoflioHeaderProps {
    styles: {
      header: any;
    };
    navigation: {
      goBack: () => void;
    }
  }

  export interface PortoflioIMageSectionProps {
    styles: {
      imageContainer: any;
      image: any;
      imageTextContainer: any;
      imageTitle: any;
    };
    goalName: string;
  }

  export interface PortoflioInfoBoxProps {
    styles: {
      infoBox: any;
      infoLabel: any;
      infoBoxContent: any;
      infoValue: any;
    };
    label: string;
    value: string;
  }

  export interface TopUpProps {
    styles: {
      title: any;
      subtitle: any;
      input: any;
      dropdownContainer: any;
      dropdownInput: any;
    };
  }

  export interface UrInitialAmountProps {
    styles: {
      title: any;
      subtitle: any;
      input: any;
      switchContainer: any;
      switchLabel: any;
      noticeContainer: any;
      noticeText: any;
    };
  }

  export interface Service {
    id: string;
    icon?: string;
    image?: any; 
    title: string;
    description?: string;
    buttonText?: string;
    border?: boolean;
  }
  
  export interface AcademyItem {
    id: string;
    image: any;
    title: string;
    actionText: string;
  }

  export interface Question {
    question: string;
    subText: string;
    options: string[];
  }
  
  export interface FormData {
    goalName: string;
    amount: string;
    monthlyAmount: string;
    isMonthlyDeposit: boolean;
    selectedDay: string;
    step: number;
    questionStep: number;
    selectedOptions: string[];
    portfolioChoice : string;
    agreement : boolean;
}


export interface FormContextType {
    formData: FormData;
    updateFormData: (field: keyof FormData, value: any) => void; 
}

export interface FormProviderProps {
  children: ReactNode;
}