import styled from "styled-components";

export const TopBar = styled.header`
  background: var(--color-background-white);
  border-bottom: 1px solid var(--color-gray-200);
  padding: var(--spacing-xl) var(--spacing-2xl);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all var(--transition-normal);
  backdrop-filter: blur(8px);
`;

export const TopBarContent = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xl);
  position: relative;
  z-index: 1;
`;

export const TopBarLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  flex: 1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

export const TopBarTitle = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
  margin: 0;
  line-height: var(--line-height-tight);
  font-family: var(--font-family-sans);
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

export const TopBarSubtitle = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  margin: 0;
  line-height: var(--line-height-normal);
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-normal);
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-shrink: 0;
`;

export const EmployeeStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-xs);
`;

export const StatsNumber = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: var(--spacing-xs);
`;

export const StatsLabel = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StatsIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-md);
  background: var(--color-primary-100);
  color: var(--color-primary-600);
  font-size: var(--font-size-sm);
  margin-left: var(--spacing-xs);
`;
