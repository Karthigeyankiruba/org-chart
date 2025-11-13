import { Skeleton } from "../common/Skeleton";
import {
  DetailsContainer,
  Header,
  HeaderTop,
  HeaderContent,
  AvatarSection,
  InfoSection,
  ContactGrid,
  SocialLinks,
  ContentGrid,
  Section,
} from "./EmployeeDetails.styles";

const EmployeeDetailsSkeleton = () => {
  return (
    <DetailsContainer>
      <Header>
        <HeaderTop>
          <HeaderContent>
            <AvatarSection>
              <Skeleton width="100px" height="100px" borderRadius="full" />
            </AvatarSection>
            <InfoSection>
              <Skeleton width="250px" height="36px" borderRadius="small" />
              <Skeleton width="200px" height="24px" borderRadius="small" />
              <Skeleton width="120px" height="28px" borderRadius="medium" />
            </InfoSection>
          </HeaderContent>
          <Skeleton width="36px" height="36px" borderRadius="medium" />
        </HeaderTop>

        <ContactGrid>
          <Skeleton width="100%" height="20px" borderRadius="small" />
          <Skeleton width="100%" height="20px" borderRadius="small" />
          <Skeleton width="100%" height="20px" borderRadius="small" />
          <Skeleton width="100%" height="20px" borderRadius="small" />
        </ContactGrid>

        <SocialLinks>
          <Skeleton width="36px" height="36px" borderRadius="medium" />
          <Skeleton width="36px" height="36px" borderRadius="medium" />
          <Skeleton width="36px" height="36px" borderRadius="medium" />
          <Skeleton width="36px" height="36px" borderRadius="medium" />
        </SocialLinks>
      </Header>

      <ContentGrid>
        <Section>
          <Skeleton width="80px" height="28px" borderRadius="small" />
          <div style={{ marginTop: "var(--spacing-md)" }}>
            <Skeleton width="100%" height="80px" borderRadius="small" />
          </div>
        </Section>

        <Section>
          <Skeleton width="60px" height="28px" borderRadius="small" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--spacing-md)",
              marginTop: "var(--spacing-md)",
            }}
          >
            <Skeleton width="100px" height="32px" borderRadius="medium" />
            <Skeleton width="120px" height="32px" borderRadius="medium" />
            <Skeleton width="90px" height="32px" borderRadius="medium" />
            <Skeleton width="110px" height="32px" borderRadius="medium" />
          </div>
        </Section>

        <Section>
          <Skeleton width="100px" height="28px" borderRadius="small" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-lg)",
              marginTop: "var(--spacing-md)",
            }}
          >
            <Skeleton width="100%" height="100px" borderRadius="medium" />
            <Skeleton width="100%" height="100px" borderRadius="medium" />
          </div>
        </Section>

        <Section>
          <Skeleton width="90px" height="28px" borderRadius="small" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-lg)",
              marginTop: "var(--spacing-md)",
            }}
          >
            <Skeleton width="100%" height="100px" borderRadius="medium" />
            <Skeleton width="100%" height="100px" borderRadius="medium" />
          </div>
        </Section>

        <Section>
          <Skeleton width="120px" height="28px" borderRadius="small" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-lg)",
              marginTop: "var(--spacing-md)",
            }}
          >
            <Skeleton width="100%" height="60px" borderRadius="medium" />
            <Skeleton width="100%" height="60px" borderRadius="medium" />
            <Skeleton width="100%" height="60px" borderRadius="medium" />
          </div>
        </Section>
      </ContentGrid>
    </DetailsContainer>
  );
};

export default EmployeeDetailsSkeleton;
