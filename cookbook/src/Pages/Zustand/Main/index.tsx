import React from 'react'
import BoilerplatePage from '../../boilerplate';

function ZustandMain() {

  const zustandMainProps = {
    mainTitle: 'Zustand',
    aboutText: `It's a really good state-management lib, that makes global state management so much easier than other alternatives.`,
    installationTitle: 'Getting Started',
    installationText: 'Follow the steps below to get started with our custom library.',
    npmCode: 'npm install custom-library',
    yarnCode: 'yarn add custom-library',
    usageText: 'After installation, you can import and use the custom library in your components.',
    howItWorksTitle: 'How It Works',
    howItWorksText: 'An overview of the functionality and inner workings of our custom library.',
    exampleLinksTitle: 'Custom Example Links',
    exampleLinks: [
      { label: 'Custom Example Link 1', url: '#' },
      { label: 'Custom Example Link 2', url: '#' },
    ],
  };

  return (
    <BoilerplatePage props={zustandMainProps} />


  );
}

export default ZustandMain