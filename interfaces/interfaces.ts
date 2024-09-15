import { NavigationProp } from '@react-navigation/native';

export interface RootStackParamList {
    home: string;               
    newGoal: string;                     
    investment: string;       
    questions : string;
    userResult : string 
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