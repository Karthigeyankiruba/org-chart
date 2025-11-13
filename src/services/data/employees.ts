import type { Employee } from "../types/employee";

export const employees: Employee[] = [
  {
    id: "1",
    name: "Mark Hill",
    designation: "Chief Executive Officer",
    team: "Management",
    managerId: null,
    avatar:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Mark is a visionary leader with over 15 years of experience in technology and business strategy. He founded the company with a mission to revolutionize the industry through innovative solutions and exceptional team culture.",
    email: "mark.hill@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    startDate: "2018-01-15",
    skills: [
      "Strategic Planning",
      "Leadership",
      "Business Development",
      "Innovation Management",
      "Team Building",
    ],
    education: [
      {
        degree: "MBA",
        institution: "Stanford Graduate School of Business",
        year: "2010",
      },
      {
        degree: "BS Computer Science",
        institution: "UC Berkeley",
        year: "2006",
      },
    ],
    experience: [
      {
        company: "TechCorp",
        position: "VP of Strategy",
        duration: "2015-2018",
      },
      {
        company: "InnovateLabs",
        position: "Director of Product",
        duration: "2012-2015",
      },
    ],
    achievements: [
      "Led company to 300% revenue growth in 3 years",
      "Named 'Tech Leader of the Year' by Industry Weekly",
      "Successfully raised $50M in Series B funding",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/markhill",
      twitter: "https://twitter.com/markhill",
    },
  },
  {
    id: "2",
    name: "Joe Linux",
    designation: "Chief Technology Officer",
    team: "Engineering",
    managerId: "1",
    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Joe is a technology enthusiast with deep expertise in scalable systems architecture and open-source technologies. He leads our engineering vision and ensures we stay at the forefront of technological innovation.",
    email: "joe.linux@company.com",
    phone: "+1 (555) 234-5678",
    location: "Austin, TX",
    startDate: "2018-03-01",
    skills: [
      "System Architecture",
      "Cloud Computing",
      "DevOps",
      "Open Source",
      "Team Leadership",
      "Microservices",
    ],
    education: [
      {
        degree: "MS Computer Science",
        institution: "MIT",
        year: "2012",
      },
      {
        degree: "BS Software Engineering",
        institution: "Carnegie Mellon University",
        year: "2010",
      },
    ],
    experience: [
      {
        company: "CloudScale Inc",
        position: "Senior Architect",
        duration: "2016-2018",
      },
      {
        company: "DataFlow Systems",
        position: "Lead Developer",
        duration: "2012-2016",
      },
    ],
    achievements: [
      "Architected platform handling 1M+ daily active users",
      "Open source contributor with 10K+ GitHub stars",
      "Speaker at 15+ international tech conferences",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/joelinux",
      github: "https://github.com/joelinux",
      twitter: "https://twitter.com/joelinux",
    },
  },
  {
    id: "3",
    name: "Dan Blomquist",
    designation: "Chief Information Security Officer",
    team: "Security",
    managerId: "1",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Dan is a cybersecurity expert with extensive experience in enterprise security, compliance, and risk management. He ensures our platform and data remain secure while maintaining user privacy and regulatory compliance.",
    email: "dan.blomquist@company.com",
    phone: "+1 (555) 345-6789",
    location: "Washington, DC",
    startDate: "2019-02-15",
    skills: [
      "Cybersecurity",
      "Risk Management",
      "Compliance",
      "Penetration Testing",
      "Security Architecture",
      "GDPR/SOC2",
    ],
    education: [
      {
        degree: "MS Cybersecurity",
        institution: "George Washington University",
        year: "2014",
      },
      {
        degree: "BS Information Systems",
        institution: "Virginia Tech",
        year: "2012",
      },
    ],
    experience: [
      {
        company: "SecureNet Solutions",
        position: "Security Director",
        duration: "2017-2019",
      },
      {
        company: "CyberGuard Corp",
        position: "Senior Security Analyst",
        duration: "2014-2017",
      },
    ],
    achievements: [
      "Achieved SOC2 Type II certification",
      "Reduced security incidents by 95%",
      "CISSP and CISM certified",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/danblomquist",
    },
  },
  {
    id: "4",
    name: "John Green",
    designation: "Chief Product Officer",
    team: "Product",
    managerId: "1",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "John brings a user-centric approach to product development with a track record of launching successful products that delight customers. He leads our product strategy and ensures we build solutions that truly solve user problems.",
    email: "john.green@company.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    startDate: "2018-06-01",
    skills: [
      "Product Strategy",
      "User Experience",
      "Market Research",
      "Agile Methodology",
      "Data Analysis",
      "Product Marketing",
    ],
    education: [
      {
        degree: "MBA",
        institution: "Wharton School",
        year: "2013",
      },
      {
        degree: "BS Industrial Design",
        institution: "Art Center College of Design",
        year: "2009",
      },
    ],
    experience: [
      {
        company: "ProductLab",
        position: "VP Product",
        duration: "2015-2018",
      },
      {
        company: "UserFirst Inc",
        position: "Senior Product Manager",
        duration: "2013-2015",
      },
    ],
    achievements: [
      "Launched 5 successful products with 90%+ user satisfaction",
      "Increased user engagement by 250%",
      "Winner of 'Product Innovation Award' 2022",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/johngreen",
      twitter: "https://twitter.com/johngreen",
    },
  },
  {
    id: "5",
    name: "Erika Best",
    designation: "Chief Marketing Officer",
    team: "Marketing",
    managerId: "1",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Erika is a creative marketing strategist with expertise in digital marketing, brand building, and customer acquisition. She leads our marketing efforts to build brand awareness and drive sustainable growth.",
    email: "erika.best@company.com",
    phone: "+1 (555) 567-8901",
    location: "New York, NY",
    startDate: "2019-01-10",
    skills: [
      "Digital Marketing",
      "Brand Strategy",
      "Content Marketing",
      "SEO/SEM",
      "Social Media",
      "Marketing Analytics",
    ],
    education: [
      {
        degree: "MBA Marketing",
        institution: "Columbia Business School",
        year: "2015",
      },
      {
        degree: "BA Communications",
        institution: "Northwestern University",
        year: "2011",
      },
    ],
    experience: [
      {
        company: "BrandForward",
        position: "Marketing Director",
        duration: "2017-2019",
      },
      {
        company: "GrowthHackers",
        position: "Senior Marketing Manager",
        duration: "2015-2017",
      },
    ],
    achievements: [
      "Increased brand awareness by 400%",
      "Generated 200% increase in qualified leads",
      "Built marketing team from 2 to 15 people",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/erikabest",
      twitter: "https://twitter.com/erikabest",
      instagram: "https://instagram.com/erikabest",
    },
  },
  {
    id: "6",
    name: "Linda May",
    designation: "Chief Revenue Officer",
    team: "Sales",
    managerId: "1",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Linda is a results-driven sales leader with a proven track record of building high-performing sales teams and exceeding revenue targets. She drives our go-to-market strategy and customer success initiatives.",
    email: "linda.may@company.com",
    phone: "+1 (555) 678-9012",
    location: "Chicago, IL",
    startDate: "2018-09-15",
    skills: [
      "Sales Strategy",
      "Team Leadership",
      "Customer Success",
      "Revenue Operations",
      "CRM Management",
      "Negotiation",
    ],
    education: [
      {
        degree: "MBA Finance",
        institution: "University of Chicago Booth",
        year: "2012",
      },
      {
        degree: "BS Business Administration",
        institution: "University of Illinois",
        year: "2008",
      },
    ],
    experience: [
      {
        company: "SalesForce Pro",
        position: "VP Sales",
        duration: "2015-2018",
      },
      {
        company: "Revenue Growth Inc",
        position: "Sales Director",
        duration: "2012-2015",
      },
    ],
    achievements: [
      "Exceeded revenue targets by 150% for 3 consecutive years",
      "Built sales team that generated $50M+ ARR",
      "Achieved 95% customer retention rate",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/lindamay",
    },
  },
  {
    id: "7",
    name: "Alice Lopez",
    designation: "Chief Communications Officer",
    team: "Communications",
    managerId: "6",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Alice is an experienced communications professional who manages our internal and external communications strategy. She ensures consistent messaging across all channels and builds strong relationships with media and stakeholders.",
    email: "alice.lopez@company.com",
    phone: "+1 (555) 789-0123",
    location: "Los Angeles, CA",
    startDate: "2020-03-01",
    skills: [
      "Public Relations",
      "Internal Communications",
      "Crisis Management",
      "Media Relations",
      "Content Strategy",
      "Stakeholder Management",
    ],
    education: [
      {
        degree: "MA Communications",
        institution: "USC Annenberg",
        year: "2014",
      },
      {
        degree: "BA Journalism",
        institution: "UCLA",
        year: "2012",
      },
    ],
    experience: [
      {
        company: "CommStrategies",
        position: "Communications Manager",
        duration: "2018-2020",
      },
      {
        company: "MediaLink PR",
        position: "PR Specialist",
        duration: "2014-2018",
      },
    ],
    achievements: [
      "Managed communications during successful IPO",
      "Secured coverage in 50+ major publications",
      "Improved employee engagement scores by 40%",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/alicelopez",
      twitter: "https://twitter.com/alicelopez",
    },
  },
  {
    id: "8",
    name: "Michael Rubin",
    designation: "Chief Administrative Officer",
    team: "Administration",
    managerId: "2",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Michael oversees all administrative functions including HR, legal, and operations. He ensures smooth day-to-day operations and helps scale our organizational processes as we grow.",
    email: "michael.rubin@company.com",
    phone: "+1 (555) 890-1234",
    location: "Boston, MA",
    startDate: "2019-05-20",
    skills: [
      "Operations Management",
      "Human Resources",
      "Legal Affairs",
      "Process Optimization",
      "Compliance",
      "Organizational Development",
    ],
    education: [
      {
        degree: "JD",
        institution: "Harvard Law School",
        year: "2010",
      },
      {
        degree: "BA Political Science",
        institution: "Harvard University",
        year: "2007",
      },
    ],
    experience: [
      {
        company: "LegalOps Corp",
        position: "General Counsel",
        duration: "2016-2019",
      },
      {
        company: "AdminPro Services",
        position: "Operations Director",
        duration: "2012-2016",
      },
    ],
    achievements: [
      "Streamlined operations reducing costs by 25%",
      "Implemented HR systems supporting 200+ employees",
      "Successfully navigated 3 major acquisitions",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/michaelrubin",
    },
  },
  {
    id: "9",
    name: "Mary Johnson",
    designation: "Chief Brand Officer",
    team: "Brand",
    managerId: "8",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Mary is a creative visionary who shapes our brand identity and ensures consistent brand experience across all touchpoints. She leads brand strategy, design, and creative campaigns that resonate with our audience.",
    email: "mary.johnson@company.com",
    phone: "+1 (555) 901-2345",
    location: "Portland, OR",
    startDate: "2020-01-15",
    skills: [
      "Brand Strategy",
      "Creative Direction",
      "Design Thinking",
      "Visual Identity",
      "Brand Management",
      "Creative Campaigns",
    ],
    education: [
      {
        degree: "MFA Graphic Design",
        institution: "Rhode Island School of Design",
        year: "2013",
      },
      {
        degree: "BFA Visual Arts",
        institution: "Parsons School of Design",
        year: "2011",
      },
    ],
    experience: [
      {
        company: "CreativeBrand Studio",
        position: "Creative Director",
        duration: "2017-2020",
      },
      {
        company: "DesignForward",
        position: "Senior Designer",
        duration: "2013-2017",
      },
    ],
    achievements: [
      "Rebranded company increasing brand recognition by 300%",
      "Won 5 design awards for creative campaigns",
      "Led design system adoption across all products",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/maryjohnson",
      behance: "https://behance.net/maryjohnson",
      instagram: "https://instagram.com/maryjohnson",
    },
  },
  {
    id: "10",
    name: "Jack Richardson",
    designation: "Chief Business Development Officer",
    team: "Business Development",
    managerId: "8",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Jack drives strategic partnerships and business development initiatives. He identifies growth opportunities, negotiates key partnerships, and helps expand our market reach through strategic alliances.",
    email: "jack.richardson@company.com",
    phone: "+1 (555) 012-3456",
    location: "Miami, FL",
    startDate: "2019-08-01",
    skills: [
      "Business Development",
      "Strategic Partnerships",
      "Negotiation",
      "Market Analysis",
      "Relationship Building",
      "Deal Structuring",
    ],
    education: [
      {
        degree: "MBA Strategy",
        institution: "Kellogg School of Management",
        year: "2014",
      },
      {
        degree: "BS Economics",
        institution: "University of Pennsylvania",
        year: "2010",
      },
    ],
    experience: [
      {
        company: "PartnershipPro",
        position: "VP Business Development",
        duration: "2016-2019",
      },
      {
        company: "GrowthVentures",
        position: "Business Development Manager",
        duration: "2014-2016",
      },
    ],
    achievements: [
      "Secured partnerships generating $20M+ in revenue",
      "Negotiated 15+ strategic alliances",
      "Expanded market reach to 10 new countries",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/jackrichardson",
    },
  },
  {
    id: "11",
    name: "Sarah Chen",
    designation: "Engineering Manager",
    team: "Engineering",
    managerId: "2",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Sarah is a hands-on engineering manager who leads our core development team. She combines technical expertise with strong leadership skills to deliver high-quality software solutions while mentoring the next generation of engineers.",
    email: "sarah.chen@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Jose, CA",
    startDate: "2019-04-01",
    skills: [
      "Full-Stack Development",
      "Team Leadership",
      "Agile Management",
      "Code Review",
      "Mentoring",
      "System Design",
    ],
    education: [
      {
        degree: "MS Computer Science",
        institution: "Stanford University",
        year: "2016",
      },
      {
        degree: "BS Software Engineering",
        institution: "UC San Diego",
        year: "2014",
      },
    ],
    experience: [
      {
        company: "TechFlow Inc",
        position: "Senior Developer",
        duration: "2017-2019",
      },
      {
        company: "CodeCraft Solutions",
        position: "Software Engineer",
        duration: "2016-2017",
      },
    ],
    achievements: [
      "Led team that reduced deployment time by 80%",
      "Mentored 10+ junior engineers to senior roles",
      "Implemented CI/CD pipeline improving code quality",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
    },
  },
  {
    id: "12",
    name: "David Rodriguez",
    designation: "Lead Engineer",
    team: "Engineering",
    managerId: "11",
    avatar:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "David is a seasoned software engineer with expertise in backend systems and distributed architectures. He leads technical initiatives and ensures our platform can scale to meet growing demands.",
    email: "david.rodriguez@company.com",
    phone: "+1 (555) 234-5678",
    location: "Denver, CO",
    startDate: "2020-02-01",
    skills: [
      "Backend Development",
      "Distributed Systems",
      "Database Design",
      "API Development",
      "Performance Optimization",
      "Python",
    ],
    education: [
      {
        degree: "MS Software Engineering",
        institution: "University of Colorado Boulder",
        year: "2017",
      },
      {
        degree: "BS Computer Science",
        institution: "Colorado State University",
        year: "2015",
      },
    ],
    experience: [
      {
        company: "ScaleUp Systems",
        position: "Senior Backend Engineer",
        duration: "2018-2020",
      },
      {
        company: "DataCore Inc",
        position: "Software Engineer",
        duration: "2017-2018",
      },
    ],
    achievements: [
      "Architected microservices handling 10M+ requests/day",
      "Reduced API response time by 60%",
      "Led migration to cloud infrastructure",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/davidrodriguez",
      github: "https://github.com/davidrodriguez",
    },
  },
  {
    id: "13",
    name: "Emily Watson",
    designation: "Frontend Engineer",
    team: "Engineering",
    managerId: "11",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Emily is a passionate frontend developer who creates beautiful, responsive, and accessible user interfaces. She specializes in modern web technologies and ensures our applications provide exceptional user experiences.",
    email: "emily.watson@company.com",
    phone: "+1 (555) 345-6789",
    location: "Atlanta, GA",
    startDate: "2020-06-15",
    skills: [
      "React",
      "TypeScript",
      "CSS/SASS",
      "Responsive Design",
      "Accessibility",
      "Performance Optimization",
    ],
    education: [
      {
        degree: "BS Web Development",
        institution: "Georgia Tech",
        year: "2019",
      },
      {
        degree: "Certificate UX Design",
        institution: "General Assembly",
        year: "2020",
      },
    ],
    experience: [
      {
        company: "WebCraft Studios",
        position: "Frontend Developer",
        duration: "2019-2020",
      },
      {
        company: "DesignTech (Internship)",
        position: "Junior Developer",
        duration: "2018-2019",
      },
    ],
    achievements: [
      "Improved web app performance by 45%",
      "Achieved 100% accessibility compliance",
      "Built component library used across 5 products",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/emilywatson",
      github: "https://github.com/emilywatson",
      codepen: "https://codepen.io/emilywatson",
    },
  },
  {
    id: "14",
    name: "Robert Kim",
    designation: "Senior Software Engineer",
    team: "Engineering",
    managerId: "11",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6cef03dffd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Robert is a versatile software engineer with strong problem-solving skills and experience across the full technology stack. He contributes to both frontend and backend development while maintaining high code quality standards.",
    email: "robert.kim@company.com",
    phone: "+1 (555) 456-7890",
    location: "Phoenix, AZ",
    startDate: "2021-01-10",
    skills: [
      "Full-Stack Development",
      "Node.js",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    education: [
      {
        degree: "BS Computer Science",
        institution: "Arizona State University",
        year: "2018",
      },
      {
        degree: "Certificate Cloud Computing",
        institution: "AWS Training",
        year: "2020",
      },
    ],
    experience: [
      {
        company: "FullStack Solutions",
        position: "Software Engineer",
        duration: "2019-2021",
      },
      {
        company: "StartupLab",
        position: "Junior Developer",
        duration: "2018-2019",
      },
    ],
    achievements: [
      "Developed feature used by 80% of active users",
      "Reduced bug reports by 50% through improved testing",
      "AWS Certified Solutions Architect",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/robertkim",
      github: "https://github.com/robertkim",
    },
  },
  {
    id: "15",
    name: "Lisa Thompson",
    designation: "QA Manager",
    team: "Engineering",
    managerId: "11",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Lisa ensures the quality and reliability of our software products through comprehensive testing strategies and quality assurance processes. She leads our QA team and implements best practices for continuous quality improvement.",
    email: "lisa.thompson@company.com",
    phone: "+1 (555) 567-8901",
    location: "Minneapolis, MN",
    startDate: "2020-09-01",
    skills: [
      "Test Automation",
      "Quality Assurance",
      "Test Strategy",
      "Bug Tracking",
      "Performance Testing",
      "Team Leadership",
    ],
    education: [
      {
        degree: "BS Information Technology",
        institution: "University of Minnesota",
        year: "2016",
      },
      {
        degree: "Certificate Software Testing",
        institution: "ISTQB",
        year: "2017",
      },
    ],
    experience: [
      {
        company: "QualityFirst Corp",
        position: "Senior QA Engineer",
        duration: "2018-2020",
      },
      {
        company: "TestPro Solutions",
        position: "QA Engineer",
        duration: "2016-2018",
      },
    ],
    achievements: [
      "Reduced production bugs by 70%",
      "Implemented automated testing covering 90% of codebase",
      "ISTQB Advanced Level certified",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/lisathompson",
    },
  },
  {
    id: "16",
    name: "James Wilson",
    designation: "QA Engineer",
    team: "Engineering",
    managerId: "11",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "James is a detail-oriented QA engineer who ensures our software meets the highest quality standards. He specializes in test automation and works closely with development teams to catch issues early in the development cycle.",
    email: "james.wilson@company.com",
    phone: "+1 (555) 678-9012",
    location: "Nashville, TN",
    startDate: "2021-03-15",
    skills: [
      "Manual Testing",
      "Test Automation",
      "Selenium",
      "API Testing",
      "Mobile Testing",
      "Regression Testing",
    ],
    education: [
      {
        degree: "BS Computer Science",
        institution: "Vanderbilt University",
        year: "2020",
      },
      {
        degree: "Certificate Agile Testing",
        institution: "Scrum Alliance",
        year: "2021",
      },
    ],
    experience: [
      {
        company: "TestLab Inc",
        position: "Junior QA Engineer",
        duration: "2020-2021",
      },
      {
        company: "QualityCheck (Internship)",
        position: "QA Intern",
        duration: "2019-2020",
      },
    ],
    achievements: [
      "Created automated test suite saving 20 hours/week",
      "Found and reported 200+ critical bugs",
      "Improved test coverage from 60% to 85%",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson",
    },
  },
];
