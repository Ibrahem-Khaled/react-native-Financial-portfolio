
# Fintech App

## Table of Contents
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
   - [Component-Based Architecture](#component-based-architecture)
4. [Folder Structure](#folder-structure)
5. [Features](#features)
6. [Installation](#installation)
7. [Usage](#usage)

---

## Overview

This is a **Fintech** app built with **React Native** using a **Component-Based Architecture**. The app provides users with a seamless experience for investment management, tracking financial goals, and viewing personalized portfolios. The app leverages modular design principles, allowing easy maintenance, scalability, and reusability of components. 

This app handles core Fintech functionalities like:
- Managing financial goals.
- Selecting personalized investment portfolios.
- Viewing financial metrics and insights.
- Creating, updating, and managing user-specific investment goals.

---

## Tech Stack

- **React Native**: Cross-platform mobile development framework.
- **TypeScript**: Type-safe language for JavaScript.
- **Segment Analytics**: To track user behavior and events.
- **Expo**: For building, running, and debugging the app.
- **State Management**: Simple context-based state management for storing form data.
- **Styled Components**: Custom styles for a consistent UI/UX experience.
  
---

## Architecture

This app follows a **Component-Based Architecture**. This approach allows for breaking down the UI into reusable components. Each component encapsulates its own logic and behavior, making it reusable, testable, and easier to maintain.

### Component-Based Architecture

- **Components**: The app is divided into smaller, reusable components such as cards, headers, and buttons.
- **Screens**: Larger components or pages, which make up the core UI for each section of the app.
- **State Management**: Context API is used for managing the global state, especially for form data across the app.
- **Modularity**: The app is highly modular, with a separation of concerns across `Components`, `Screens`, and `Store`.
  
This architecture ensures:
- High reusability of UI components.
- Clear separation of concerns.
- Ease of maintenance and scalability.

---

## Folder Structure

```bash
app/
  ├── Components/               # UI Components like cards, buttons, and form elements
  │   ├── AcademyCard.tsx
  │   ├── AgreementSectionPortoflio.tsx
  │   ├── ButtonSectionPortoflio.tsx
  │   ├── Congrats.tsx
  │   ├── CreateGoal.tsx
  │   ├── FinancialAcademy.tsx
  │   ├── Header.tsx
  │   ├── PortoflioHeader.tsx
  │   ├── PortoflioIMageSection.tsx
  │   ├── PortoflioInfoBox.tsx
  │   ├── ServiceCard.tsx
  │   ├── TopUp.tsx
  │   ├── UrIntialAmount.tsx
  │
  ├── Screens/                  # Screen components (pages)
  │   ├── taps/                 # Tabbed screens
  │   │   ├── HomeScreen.tsx
  │   │   ├── MyTaps.tsx
  │   ├── Investment.tsx        # Main investment page
  │   ├── NewGoal.tsx           # Goal creation page
  │   ├── Portfolio.tsx         # Portfolio summary page
  │   ├── Questions.tsx         # Questionnaires for personalized portfolio
  │   ├── UserResult.tsx        # User's result based on financial goals
  │   ├── IndexNav.tsx          # Root navigator for the app
  │
  ├── Store/                    # State management using Context API
  │   ├── Store.tsx
  │
  ├── assets/                   # Static assets like images and icons
  │   ├── icons/
  │   │   ├── acadmy1.png
  │   │   ├── acadmy2.png
  │   │   ├── acadmy3.png
  │   │   ├── bank.png
  │   │   ├── car.png
  │   │   ├── meter.png
  │   │   ├── Rectangle.png
  │
  ├── interfaces/               # TypeScript types and interfaces for type safety
  │   ├── interfaces.ts
  │   ├── StaticData.ts
  │   ├── Urls.ts
  │
  ├── App.tsx                   # Entry point of the app
  ├── package.json
  ├── tsconfig.json             # TypeScript configuration
  └── yarn.lock
```

### Explanation of Folders:

1. **Components**:
   - Small, reusable UI components such as cards (`AcademyCard.tsx`), forms (`CreateGoal.tsx`), and other reusable elements that make up the user interface.

2. **Screens**:
   - Entire screens (or pages) that define the main sections of the app, like `Investment.tsx`, `NewGoal.tsx`, and `Portfolio.tsx`. These screens are composed of smaller components.

3. **Store**:
   - State management using **React Context API** for handling the global form state, especially for user-created financial goals.

4. **assets**:
   - Contains static assets like icons and images.

5. **interfaces**:
   - Contains all the TypeScript interfaces for props and global types used across the app, improving type safety.

---

## Features

- **Investment Management**: Users can create financial goals and invest in customized portfolios based on their risk appetite and investment duration.
- **Personalized Portfolio**: Users can answer a series of questions to find the most suitable portfolio for their needs.
- **Real-Time Analytics**: The app tracks user behavior and events (e.g., goal creation) using **Segment Analytics**.
- **Interactive UI**: A seamless and interactive user experience with visually engaging components such as cards and sliders.
- **Context-Based State Management**: Centralized form data storage with context makes it easy to manage the user's financial input throughout different screens.

---

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/fintech-app.git
   cd fintech-app
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   yarn install
   \`\`\`

3. **Start the app**:
   - Yarn start

---

## Usage

1. **Creating a Goal**:
   - Navigate to the "New Goal" screen.
   - Fill out the form with details like goal name, initial amount, and monthly top-up.
   - Select a suitable portfolio based on the provided options.

2. **Viewing Portfolio**:
   - After creating a goal, the user is taken to the portfolio screen where they can see the breakdown of their investment plan.

3. **Tracking Progress**:
   - The app uses Segment Analytics to track user progress and investments, providing insights on goal creation and updates.
