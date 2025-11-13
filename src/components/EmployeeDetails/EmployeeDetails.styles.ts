import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--color-background-gray);
  padding: var(--spacing-2xl);
`;

export const Header = styled.div`
  background-color: var(--color-background-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-gray-200);
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--spacing-xl);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xl);
  flex: 1;
`;

export const AvatarSection = styled.div`
  flex-shrink: 0;
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const Name = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
  margin: 0;
  line-height: var(--line-height-tight);
`;

export const Designation = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-600);
  margin: 0;
  line-height: var(--line-height-tight);
`;

export const TeamBadge = styled.span`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: var(--color-primary-100);
  color: var(--color-primary-800);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  width: fit-content;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  color: var(--color-gray-500);
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  width: 36px;
  height: 36px;

  &:hover {
    background-color: var(--color-gray-100);
    color: var(--color-gray-900);
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-gray-200);
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--color-gray-700);
  font-size: var(--font-size-sm);
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--color-gray-700);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-normal);

  &:hover {
    color: var(--color-primary-600);
  }

  svg {
    color: var(--color-gray-500);
    font-size: var(--font-size-base);
    flex-shrink: 0;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-gray-200);
  margin-top: var(--spacing-lg);
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background-color: var(--color-gray-100);
  color: var(--color-gray-600);
  text-decoration: none;
  transition: all var(--transition-normal);
  border: 1px solid var(--color-gray-200);

  &:hover {
    background-color: var(--color-primary-100);
    color: var(--color-primary-600);
    border-color: var(--color-primary-300);
  }

  svg {
    font-size: var(--font-size-base);
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
`;

export const Section = styled.section`
  background-color: var(--color-background-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-gray-200);
`;

export const SectionTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
  margin: 0 0 var(--spacing-lg) 0;
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-gray-200);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

export const Bio = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-gray-700);
  line-height: var(--line-height-relaxed);
  margin: 0;
  padding-top: var(--spacing-md);
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  padding-top: var(--spacing-md);
`;

export const SkillTag = styled.span`
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-gray-200);
  transition: all var(--transition-normal);

  &:hover {
    background-color: var(--color-primary-50);
    border-color: var(--color-primary-200);
    color: var(--color-primary-700);
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-md);
`;

export const ListItem = styled.li`
  padding: var(--spacing-xl);
  background-color: var(--color-gray-50);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-primary-500);
  transition: all var(--transition-normal);

  &:hover {
    background-color: var(--color-primary-50);
    border-left-color: var(--color-primary-600);
  }
`;

export const ItemTitle = styled.h4`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin: 0 0 var(--spacing-sm) 0;
`;

export const ItemSubtitle = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  margin: 0 0 var(--spacing-sm) 0;
  font-weight: var(--font-weight-medium);
`;

export const ItemMeta = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  margin: 0;
  padding-top: var(--spacing-xs);
`;

export const AchievementItem = styled.li`
  padding: var(--spacing-lg) var(--spacing-xl);
  background-color: var(--color-gray-50);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-success-500);
  position: relative;

  transition: all var(--transition-normal);
  line-height: var(--line-height-relaxed);

  &:hover {
    background-color: var(--color-success-50);
  }
`;
