// BoilerplatePage.js

import React from 'react';
import {
  CodeSnippet,
  ExampleLink,
  ExampleLinkItem,
  ExampleLinkList,
  Instal,
  InstalPara,
  InstalTitle,
  MainTitle,
  PageContainer,
  Paragraph,
  Section,
  SubTitle
} from './structure';

interface LinkItemProps {
    label: string;
    url: string;
  }
  
  interface BoilerplatePageProps {
    props: {
      mainTitle: string;
      aboutText: string;
      installationTitle: string;
      installationText: string;
      npmCode: string;
      yarnCode: string;
      usageText: string;
      howItWorksTitle: string;
      howItWorksText: string;
      exampleLinksTitle: string;
      exampleLinks: LinkItemProps[];
    };
  }
  

const BoilerplatePage = ({ props }: BoilerplatePageProps) => {
  const {
    mainTitle,
    aboutText,
    installationTitle,
    installationText,
    npmCode,
    yarnCode,
    usageText,
    howItWorksTitle,
    howItWorksText,
    exampleLinksTitle,
    exampleLinks,
  } = props;

  return (
    <PageContainer>
      <MainTitle>{mainTitle}</MainTitle>

      <Section>
        <SubTitle>About</SubTitle>
        <Paragraph>{aboutText}</Paragraph>
      </Section>

      <Instal>
        <InstalTitle>{installationTitle}</InstalTitle>
        <InstalPara>{installationText}</InstalPara>
        <InstalPara>Using npm:</InstalPara>
        <CodeSnippet>
          <code>{npmCode}</code>
        </CodeSnippet>
        <InstalPara>Using yarn:</InstalPara>
        <CodeSnippet>
          <code>{yarnCode}</code>
        </CodeSnippet>
        <Paragraph>{usageText}</Paragraph>
      </Instal>

      <Section>
        <SubTitle>{howItWorksTitle}</SubTitle>
        <Paragraph>{howItWorksText}</Paragraph>
      </Section>

      <Section>
        <SubTitle>{exampleLinksTitle}</SubTitle>
        <Paragraph>Here are some example links or buttons that showcase the functionality of this page:</Paragraph>
        <ExampleLinkList>
          {exampleLinks.map((link, index) => (
            <ExampleLinkItem key={index}>
              <ExampleLink href={link.url}>{link.label}</ExampleLink>
            </ExampleLinkItem>
          ))}
        </ExampleLinkList>
      </Section>
    </PageContainer>
  );
};

export default BoilerplatePage;
