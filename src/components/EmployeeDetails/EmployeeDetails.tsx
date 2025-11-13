import { useParams, useNavigate } from "react-router-dom";
import { Avatar } from "../common/Avatar";
import EmployeeDetailsSkeleton from "./EmployeeDetailsSkeleton";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiX,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiInstagram,
  FiCodepen,
  FiBriefcase,
  FiAward,
  FiBook,
} from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import {
  DetailsContainer,
  Header,
  HeaderTop,
  HeaderContent,
  AvatarSection,
  InfoSection,
  Name,
  Designation,
  TeamBadge,
  CloseButton,
  ContactGrid,
  ContactItem,
  ContactLink,
  SocialLinks,
  SocialLink,
  ContentGrid,
  Section,
  SectionTitle,
  Bio,
  SkillsGrid,
  SkillTag,
  List,
  ListItem,
  ItemTitle,
  ItemSubtitle,
  ItemMeta,
  AchievementItem,
} from "./EmployeeDetails.styles";
import { useGetEmployee } from "../../api";

const EmployeeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: employee, isFetching } = useGetEmployee(id || "");

  if (isFetching) {
    return <EmployeeDetailsSkeleton />;
  }

  if (!employee) {
    return (
      <DetailsContainer>
        <div>Employee not found</div>
      </DetailsContainer>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <DetailsContainer>
      <Header>
        <HeaderTop>
          <HeaderContent>
            <AvatarSection>
              <Avatar
                imageUrl={employee.avatar}
                name={employee.name}
                size="100px"
              />
            </AvatarSection>
            <InfoSection>
              <Name>{employee.name}</Name>
              <Designation>{employee.designation}</Designation>
              <TeamBadge>{employee.team}</TeamBadge>
            </InfoSection>
          </HeaderContent>
          <CloseButton onClick={() => navigate("/")} title="Close">
            <FiX />
          </CloseButton>
        </HeaderTop>

        <ContactGrid>
          <ContactLink href={`mailto:${employee.email}`}>
            <FiMail />
            {employee.email}
          </ContactLink>
          <ContactLink href={`tel:${employee.phone}`}>
            <FiPhone />
            {employee.phone}
          </ContactLink>
          <ContactItem>
            <FiMapPin />
            {employee.location}
          </ContactItem>
          <ContactItem>
            <FiCalendar />
            Started {formatDate(employee.startDate)}
          </ContactItem>
        </ContactGrid>

        {employee.socialMedia && (
          <SocialLinks>
            {employee.socialMedia.linkedin && (
              <SocialLink
                href={employee.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FiLinkedin />
              </SocialLink>
            )}
            {employee.socialMedia.twitter && (
              <SocialLink
                href={employee.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <FiTwitter />
              </SocialLink>
            )}
            {employee.socialMedia.github && (
              <SocialLink
                href={employee.socialMedia.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FiGithub />
              </SocialLink>
            )}
            {employee.socialMedia.instagram && (
              <SocialLink
                href={employee.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FiInstagram />
              </SocialLink>
            )}
            {employee.socialMedia.behance && (
              <SocialLink
                href={employee.socialMedia.behance}
                target="_blank"
                rel="noopener noreferrer"
                title="Behance"
              >
                <FaBehance />
              </SocialLink>
            )}
            {employee.socialMedia.codepen && (
              <SocialLink
                href={employee.socialMedia.codepen}
                target="_blank"
                rel="noopener noreferrer"
                title="CodePen"
              >
                <FiCodepen />
              </SocialLink>
            )}
          </SocialLinks>
        )}
      </Header>

      <ContentGrid>
        <Section>
          <SectionTitle>About</SectionTitle>
          <Bio>{employee.bio}</Bio>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {employee.skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </SkillsGrid>
        </Section>

        <Section>
          <SectionTitle>
            <FiBriefcase />
            Experience
          </SectionTitle>
          <List>
            {employee.experience.map((exp, index) => (
              <ListItem key={index}>
                <ItemTitle>{exp.position}</ItemTitle>
                <ItemSubtitle>{exp.company}</ItemSubtitle>
                <ItemMeta>{exp.duration}</ItemMeta>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>
            <FiBook />
            Education
          </SectionTitle>
          <List>
            {employee.education.map((edu, index) => (
              <ListItem key={index}>
                <ItemTitle>{edu.degree}</ItemTitle>
                <ItemSubtitle>{edu.institution}</ItemSubtitle>
                <ItemMeta>{edu.year}</ItemMeta>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section>
          <SectionTitle>
            <FiAward />
            Achievements
          </SectionTitle>
          <List>
            {employee.achievements.map((achievement, index) => (
              <AchievementItem key={index}>{achievement}</AchievementItem>
            ))}
          </List>
        </Section>
      </ContentGrid>
    </DetailsContainer>
  );
};

export default EmployeeDetails;
