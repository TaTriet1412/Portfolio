import { Project } from '../models/project.model';
import { SkillCategoryGroup } from '../models/skill.model';
import { ExperienceItem, AchievementItem } from '../models/experience.model';

export interface UiText {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    contactBtn: string;
  };
  hero: {
    terminalUser: string;
    greeting: string;
    roleTagline: string;
    bio: string;
    ctaProjects: string;
    ctaAbout: string;
    ctaContact: string;
    connect: string;
  };
  about: {
    title: string;
    subtitle: string;
    profileTitle: string;
    p1: string;
    p2: string;
    principlesTitle: string;
    principles: string[];
    educationTitle: string;
    educationPeriod: string;
    degree: string;
    major: string;
    educationDesc: string;
    achievementsTitle: string;
    verifiedBadge: string;
    toeicSub: string;
    toeicDesc: string;
    readingListening: string;
    speaking: string;
    writing: string;
    certBadge: string;
    certTitle: string;
    certIssuer: string;
    certDesc: string;
    certDate: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    filterLabel: string;
    filters: { label: string; value: string }[];
    sourceBtn: string;
    archBtn: string;
    emptyText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    directTitle: string;
    directDesc: string;
    responseSla: string;
    responseSlaVal: string;
    socialHeading: string;
    formHeader: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnotherBtn: string;
  };
  footer: {
    uptime: string;
    allSystems: string;
    rights: string;
    builtWith: string;
  };
}

export const UI_TEXT_VI: UiText = {
  nav: {
    home: 'Trang chủ',
    about: 'Giới thiệu',
    skills: 'Kỹ năng',
    experience: 'Lộ trình',
    projects: 'Dự án',
    contact: 'Liên hệ',
    contactBtn: 'Liên hệ',
  },
  hero: {
    terminalUser: 'tatriet@backend: ~ (zsh)',
    greeting: '> Xin chào, tôi là',
    roleTagline: 'Kỹ sư Phần mềm Backend',
    bio: 'Chuyên sâu phát triển hệ thống backend phân tán với Spring Boot, tối ưu hóa cơ sở dữ liệu và xử lý đồng thời cao. Kết hợp khả năng xây dựng giao diện tương tác mượt mà bằng Angular.',
    ctaProjects: 'Xem dự án',
    ctaAbout: 'Hồ sơ năng lực',
    ctaContact: 'Gửi tin nhắn',
    connect: 'Kết nối:',
  },
  about: {
    title: 'Giới thiệu & Học vấn',
    subtitle: 'Định hướng phát triển hệ thống backend ổn định, hiệu năng cao và tuân thủ các chuẩn mực thiết kế phần mềm.',
    profileTitle: 'Tổng quan Hồ sơ & Triết lý Kỹ thuật',
    p1: 'Tôi là Tạ Triết, một Software Engineer định hướng chuyên sâu về Backend Architecture với nền tảng vững chắc trong hệ sinh thái Java & Spring Boot.',
    p2: 'Tôi đặc biệt đam mê giải quyết các bài toán về xử lý đồng thời (concurrency), thiết kế kiến trúc Microservices, xây dựng RESTful APIs chuẩn chỉnh và tối ưu hóa truy vấn cơ sở dữ liệu với Redis và PostgreSQL. Ngoài ra, tôi có khả năng làm việc với Angular (Standalone Components) để hiện thực hóa các giao diện web trực quan, thống nhất từ front-end đến back-end.',
    principlesTitle: '// Nguyên tắc lập trình cốt lõi:',
    principles: [
      'Clean Code, SOLID Principles & Domain-Driven Design',
      'Zero-Downtime, Fault-Tolerant & Cache-First Architecture',
      'Khả năng đọc và tài liệu hóa chuẩn quốc tế bằng tiếng Anh',
    ],
    educationTitle: 'Học vấn',
    educationPeriod: '2022 - 2026',
    degree: 'Kỹ thuật Phần mềm',
    major: 'Đại học chuyên ngành Công nghệ Thông tin',
    educationDesc: 'Tập trung chuyên sâu vào Cấu trúc Dữ liệu & Giải thuật, Hệ thống Phân tán, Thiết kế Hệ thống Hướng đối tượng và Quản trị Cơ sở Dữ liệu Nâng cao.',
    achievementsTitle: '// Chứng chỉ & Thành tích',
    verifiedBadge: 'Chứng chỉ còn hiệu lực',
    toeicSub: 'Trình độ: Tương đương CEFR B2 Độc lập',
    toeicDesc: 'Đủ năng lực đọc hiểu tài liệu kỹ thuật chuyên sâu, giao tiếp và viết báo cáo kiến trúc dự án hoàn toàn bằng tiếng Anh trong môi trường quốc tế.',
    readingListening: 'Reading & Listening',
    speaking: 'Speaking',
    writing: 'Writing',
    certBadge: 'Chứng chỉ còn hiệu lực',
    certTitle: 'Agile Development & Scrum Framework',
    certIssuer: 'TECHBASE',
    certDesc: 'Hoàn thành khóa học Agile Development & Scrum Framework tại Đại học Tôn Đức Thắng.',
    certDate: '16/04/2024',
  },
  skills: {
    title: 'Kỹ năng & Công nghệ',
    subtitle: 'Hệ sinh thái công nghệ được phân loại theo trách nhiệm hệ thống: Backend Core, Database & Caching, Frontend và DevOps.',
  },
  experience: {
    title: 'Kinh nghiệm & Lộ trình',
    subtitle: 'Quá trình thực tập phát triển hệ thống backend, nghiên cứu học thuật và hiện thực hóa các giải pháp phần mềm.',
  },
  projects: {
    title: 'Dự án Tiêu biểu',
    subtitle: 'Các hệ thống backend phân tán, kiến trúc Spring Boot tối ưu hiệu năng và các ứng dụng Full-stack kết hợp Angular.',
    filterLabel: 'Bộ lọc:',
    filters: [
      { label: 'Tất cả (All)', value: 'all' },
      { label: 'Spring Boot & Backend', value: 'backend' },
      { label: 'Microservices & Gateway', value: 'microservices' },
      { label: 'Full-Stack (Angular)', value: 'fullstack' },
    ],
    sourceBtn: 'Mã nguồn Git',
    archBtn: 'Chi tiết kiến trúc',
    emptyText: '[INFO] Không có dự án nào khớp với tiêu chí lọc hiện tại.',
  },
  contact: {
    title: 'Liên hệ & Kết nối',
    subtitle: 'Sẵn sàng trao đổi về các cơ hội nghề nghiệp Backend / Full-stack, tối ưu hệ thống hoặc các ý tưởng công nghệ mới.',
    directTitle: 'Thông tin liên lạc trực tiếp',
    directDesc: 'Nếu bạn đang tìm kiếm một Software Engineer nhiệt huyết với nền tảng vững chắc về Spring Boot và tư duy giải quyết vấn đề hệ thống, hãy kết nối ngay với tôi.',
    responseSla: 'Thời gian phản hồi',
    responseSlaVal: 'Phản hồi trong vòng 24 giờ',
    socialHeading: 'Mạng xã hội & Profile:',
    formHeader: 'POST /api/v1/messages HTTP/1.1',
    nameLabel: 'Họ và tên *',
    namePlaceholder: 'Ví dụ: Nguyễn Văn A',
    emailLabel: 'Địa chỉ Email *',
    emailPlaceholder: 'name@example.com',
    subjectLabel: 'Tiêu đề (Subject)',
    subjectPlaceholder: 'Trao đổi cơ hội việc làm / Hợp tác dự án',
    messageLabel: 'Nội dung tin nhắn *',
    messagePlaceholder: 'Nhập nội dung cần trao đổi...',
    submitBtn: 'Gửi tin nhắn',
    submittingBtn: 'Đang truyền dữ liệu...',
    successTitle: 'HTTP 200 OK - Tin nhắn đã được gửi thành công!',
    successDesc: 'Cảm ơn bạn đã để lại lời nhắn. Hệ thống đã ghi nhận và tôi sẽ phản hồi lại bạn qua email trong thời gian sớm nhất.',
    sendAnotherBtn: 'Gửi tin nhắn khác',
  },
  footer: {
    uptime: 'Uptime: 99.99%',
    allSystems: 'Hệ thống hoạt động ổn định',
    rights: 'Bản quyền thuộc về',
    builtWith: 'Xây dựng với Angular Standalone & Tailwind CSS',
  },
};

export const UI_TEXT_EN: UiText = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    contactBtn: 'Get In Touch',
  },
  hero: {
    terminalUser: 'tatriet@backend: ~ (zsh)',
    greeting: '> Hello, World! I am',
    roleTagline: 'Backend Software Engineer',
    bio: 'Specializing in distributed backend architectures with Spring Boot, relational database optimization, and high-concurrency throughput. Seamlessly integrated with reactive Angular frontends.',
    ctaProjects: 'View Projects',
    ctaAbout: 'About Profile',
    ctaContact: 'Send Message',
    connect: 'Connect:',
  },
  about: {
    title: 'About & Education',
    subtitle: 'Committed to architecting resilient, high-performance backend systems adhering strictly to modern software engineering patterns.',
    profileTitle: 'Profile Overview & Engineering Philosophy',
    p1: 'I am Ta Triet, a Software Engineer focusing deeply on Backend Architecture with robust foundations in the Java and Spring Boot ecosystem.',
    p2: 'I have a strong passion for solving concurrency challenges, engineering microservice suites, crafting standardized RESTful APIs, and tuning database performance with Redis and PostgreSQL. Furthermore, I work seamlessly with Angular (Standalone Components) to deliver cohesive, full-stack reactive applications.',
    principlesTitle: '// Core Engineering Principles:',
    principles: [
      'Clean Code, SOLID Principles & Domain-Driven Design',
      'Zero-Downtime, Fault-Tolerant & Cache-First Architecture',
      'Technical documentation and communication in fluent English',
    ],
    educationTitle: 'Education',
    educationPeriod: '2022 - 2026',
    degree: 'Bachelor of Software Engineering',
    major: 'Computer Science / Information Technology',
    educationDesc: 'In-depth focus on Data Structures & Algorithms, Distributed Systems, Object-Oriented System Design, and Advanced Database Management.',
    achievementsTitle: '// Achievements & Certifications',
    verifiedBadge: 'Verified Certificate',
    toeicSub: 'Level: CEFR B2 Independent Equivalent',
    toeicDesc: 'Fluent proficiency in reading in-depth technical documentation, international engineering communication, and system architecture presentation.',
    readingListening: 'Reading & Listening',
    speaking: 'Speaking',
    writing: 'Writing',
    certBadge: 'Verified Certificate',
    certTitle: 'Agile Development & Scrum Framework',
    certIssuer: 'TECHBASE',
    certDesc: 'Completed the Agile Development & Scrum Framework course at Ton Duc Thang University.',
    certDate: '16/04/2024',
  },
  skills: {
    title: 'Skills & Technologies',
    subtitle: 'Technical ecosystem organized by architectural responsibility: Backend Core, Database & Caching, Frontend, and DevOps.',
  },
  experience: {
    title: 'Experience & Roadmap',
    subtitle: 'Hands-on journey in production backend development, academic research, and scalable software system implementation.',
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Distributed backend systems, performance-tuned Spring Boot engines, and full-stack applications with Angular.',
    filterLabel: 'Filter:',
    filters: [
      { label: 'All Projects', value: 'all' },
      { label: 'Spring Boot & Backend', value: 'backend' },
      { label: 'Microservices & Gateway', value: 'microservices' },
      { label: 'Full-Stack (Angular)', value: 'fullstack' },
    ],
    sourceBtn: 'Git Source',
    archBtn: 'Architecture Specs',
    emptyText: '[INFO] No projects match the selected category filter.',
  },
  contact: {
    title: 'Contact & Connect',
    subtitle: 'Available for discussions regarding Backend / Full-stack engineering opportunities, system optimization, or new technical collaborations.',
    directTitle: 'Direct Contact Endpoints',
    directDesc: 'If you are looking for a dedicated Software Engineer with strong foundations in Spring Boot and systematic problem-solving, feel free to reach out.',
    responseSla: 'Response SLA',
    responseSlaVal: 'Guaranteed response within 24 hours',
    socialHeading: 'Social Profiles & Networks:',
    formHeader: 'POST /api/v1/messages HTTP/1.1',
    nameLabel: 'Full Name *',
    namePlaceholder: 'e.g. John Doe',
    emailLabel: 'Email Address *',
    emailPlaceholder: 'name@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Job Opportunity / Technical Collaboration',
    messageLabel: 'Message Content *',
    messagePlaceholder: 'Write your message details here...',
    submitBtn: 'Dispatch Message',
    submittingBtn: 'Transmitting payload...',
    successTitle: 'HTTP 200 OK - Message Dispatched Successfully!',
    successDesc: 'Thank you for reaching out. Your message has been logged, and I will get back to you via email shortly.',
    sendAnotherBtn: 'Send Another Message',
  },
  footer: {
    uptime: 'Uptime: 99.99%',
    allSystems: 'All systems operational',
    rights: 'All rights reserved to',
    builtWith: 'Built with Angular Standalone & Tailwind CSS',
  },
};

export const PERSONAL_INFO_VI = {
  name: 'Tạ Triết',
  englishName: 'Ta Triet',
  headline: 'Backend Software Engineer',
  subHeadline: 'Chuyên sâu Spring Boot, Kiến trúc Doanh nghiệp & Angular Hiện đại',
  status: 'Hệ thống Hoạt động | Sẵn sàng cho Dự án mới',
  statusIndicator: 'online',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  email: 'triet.ta.se@gmail.com',
  github: 'https://github.com/TaTriet1412',
  linkedin: 'https://linkedin.com/in/tatriet',
  summary:
    'Kỹ sư phần mềm tập trung xây dựng hệ thống backend chịu tải cao, microservices và pipeline dữ liệu phân tán bằng Spring Boot. Có năng lực tối ưu hóa truy vấn cơ sở dữ liệu, hàng đợi thông điệp và phát triển dashboard Angular Standalone mượt mà.',
  heroBadges: ['Spring Boot 3', 'Java 21', 'Distributed Systems', 'Angular 19', 'PostgreSQL & Redis'],
  stats: [
    { label: 'Trọng tâm Core', value: 'Backend / Spring Boot' },
    { label: 'TOEIC 4 Kỹ năng', value: '880 R&L | B2' },
    { label: 'Kiến trúc', value: 'Microservices & Clean Arch' },
    { label: 'Frontend Synergy', value: 'Angular & Tailwind' }
  ]
};

export const PERSONAL_INFO_EN = {
  name: 'Ta Triet',
  englishName: 'Ta Triet',
  headline: 'Backend Software Engineer',
  subHeadline: 'Specializing in Spring Boot, Enterprise Architectures & Modern Angular',
  status: 'System Operational | Open to Work',
  statusIndicator: 'online',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'triet.ta.se@gmail.com',
  github: 'https://github.com/TaTriet1412',
  linkedin: 'https://linkedin.com/in/tatriet',
  summary:
    'Software Engineer focused on building robust, scalable backend systems with Spring Boot, microservices, and distributed data pipelines. Proven capability in optimizing database queries, high-throughput message queuing, and crafting clean, responsive frontend dashboards using Angular with Standalone Architecture.',
  heroBadges: ['Spring Boot 3', 'Java 21', 'Distributed Systems', 'Angular 19', 'PostgreSQL & Redis'],
  stats: [
    { label: 'Core Focus', value: 'Backend / Spring Boot' },
    { label: 'TOEIC 4-Skills', value: '880 R&L | B2' },
    { label: 'Architecture', value: 'Microservices & Clean Arch' },
    { label: 'Frontend Synergy', value: 'Angular & Tailwind' }
  ]
};

export const ACHIEVEMENTS_VI: AchievementItem[] = [
  {
    id: 'toeic-4skills',
    title: 'Chứng chỉ Tiếng Anh (TOEIC 4 Kỹ năng)',
    category: 'Language',
    badge: 'Tương đương Trình độ B2',
    issuerOrYear: 'ETS / IIG Vietnam - 2024',
    status: 'verified',
    scoreBreakdown: [
      { label: 'Listening & Reading', score: '880 / 990' },
      { label: 'Speaking', score: '140 / 200' },
      { label: 'Writing', score: '150 / 200' }
    ],
    levelEquivalent: 'CEFR B2 Independent Professional',
    description:
      'Thành thạo đọc hiểu tài liệu kỹ thuật chuyên sâu, giao tiếp chuyên môn và thuyết trình giải pháp hệ thống bằng tiếng Anh.'
  },
  {
    id: 'techbase-agile',
    title: 'Agile Development & Scrum Framework',
    category: 'Certification',
    badge: 'TECHBASE',
    issuerOrYear: 'Ton Duc Thang University - 04/2024',
    status: 'verified',
    scoreBreakdown: [
      { label: 'Khung phương pháp', score: 'Agile & Scrum' },
      { label: 'Tổ chức', score: 'TECHBASE' }
    ],
    levelEquivalent: 'Agile Practitioner',
    description:
      'Hoàn thành khóa học Agile Development & Scrum Framework tại Đại học Tôn Đức Thắng, ngày 16/04/2024.'
  }
];

export const ACHIEVEMENTS_EN: AchievementItem[] = [
  {
    id: 'toeic-4skills',
    title: 'English Proficiency (TOEIC 4 Skills)',
    category: 'Language',
    badge: 'B2 Level Equivalent',
    issuerOrYear: 'ETS / IIG Vietnam - 2024',
    status: 'verified',
    scoreBreakdown: [
      { label: 'Listening & Reading', score: '880 / 990' },
      { label: 'Speaking', score: '140 / 200' },
      { label: 'Writing', score: '150 / 200' }
    ],
    levelEquivalent: 'CEFR B2 Independent Professional',
    description:
      'High-proficiency working fluency in technical English documentation, cross-border engineering communication, and presentation of technical solutions.'
  },
  {
    id: 'techbase-agile',
    title: 'Agile Development & Scrum Framework',
    category: 'Certification',
    badge: 'TECHBASE',
    issuerOrYear: 'Ton Duc Thang University - 04/2024',
    status: 'verified',
    scoreBreakdown: [
      { label: 'Methodology', score: 'Agile & Scrum' },
      { label: 'Organization', score: 'TECHBASE' }
    ],
    levelEquivalent: 'Agile Practitioner',
    description:
      'Completed the Agile Development & Scrum Framework course at Ton Duc Thang University on April 16th, 2024.'
  }
];

export const SKILL_GROUPS_VI: SkillCategoryGroup[] = [
  {
    category: 'backend',
    title: 'Backend & Lõi Hệ thống',
    subtitle: 'Microservices chịu tải cao, thiết kế API chuẩn mực & bảo mật',
    icon: 'server',
    skills: [
      { name: 'Java (17 / 21)', category: 'backend', proficiency: 'Expert', yearsOrExp: 'Core', highlight: true },
      { name: 'Spring Boot 3', category: 'backend', proficiency: 'Expert', yearsOrExp: 'Core', highlight: true },
      { name: 'Spring Security & JWT', category: 'backend', proficiency: 'Advanced', yearsOrExp: 'Auth / OAuth2', highlight: true },
      { name: 'Spring Cloud & Gateway', category: 'backend', proficiency: 'Advanced', yearsOrExp: 'Microservices' },
      { name: 'Hibernate / Spring Data JPA', category: 'backend', proficiency: 'Advanced', yearsOrExp: 'ORM & Query' },
      { name: 'RESTful API & Clean Arch', category: 'backend', proficiency: 'Expert', yearsOrExp: 'Design Patterns', highlight: true },
      { name: 'RabbitMQ / Message Queue', category: 'backend', proficiency: 'Proficient', yearsOrExp: 'Async Events' }
    ]
  },
  {
    category: 'database',
    title: 'Cơ sở Dữ liệu & Bộ nhớ Đệm',
    subtitle: 'Mô hình hóa dữ liệu quan hệ, chỉ mục, giao dịch ACID & tầng Cache',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', category: 'database', proficiency: 'Advanced', yearsOrExp: 'Indexing & Complex Queries', highlight: true },
      { name: 'MySQL', category: 'database', proficiency: 'Advanced', yearsOrExp: 'Relational Schema' },
      { name: 'Redis Cache & Lock', category: 'database', proficiency: 'Advanced', yearsOrExp: 'Distributed Locks & Speed', highlight: true },
      { name: 'MongoDB', category: 'database', proficiency: 'Proficient', yearsOrExp: 'NoSQL Document Store' },
      { name: 'Database Migration (Flyway)', category: 'database', proficiency: 'Proficient', yearsOrExp: 'Versioning' }
    ]
  },
  {
    category: 'frontend',
    title: 'Frontend & Giao diện Người dùng',
    subtitle: 'Ứng dụng SPA hiện đại với kiến trúc Standalone Module hóa',
    icon: 'layout',
    skills: [
      { name: 'Angular (17 - 19+)', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Standalone & Signals', highlight: true },
      { name: 'TypeScript', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Strict Type System', highlight: true },
      { name: 'Tailwind CSS', category: 'frontend', proficiency: 'Expert', yearsOrExp: 'Utility-first UI' },
      { name: 'RxJS & Reactive State', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Observables & Streams' },
      { name: 'HTML5 / SCSS', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Semantic & Responsive' }
    ]
  },
  {
    category: 'devops',
    title: 'DevOps, Công cụ & Hạ tầng',
    subtitle: 'Container hóa, quản lý phiên bản, pipeline CI/CD & kiểm thử',
    icon: 'terminal',
    skills: [
      { name: 'Docker & Docker Compose', category: 'devops', proficiency: 'Advanced', yearsOrExp: 'Containerization', highlight: true },
      { name: 'Git & GitHub Workflow', category: 'devops', proficiency: 'Expert', yearsOrExp: 'Branching & Collaboration' },
      { name: 'Linux / Bash Scripting', category: 'devops', proficiency: 'Proficient', yearsOrExp: 'CLI & Server Ops' },
      { name: 'Postman & Swagger/OpenAPI', category: 'devops', proficiency: 'Expert', yearsOrExp: 'API Testing & Docs' },
      { name: 'Maven & Gradle', category: 'devops', proficiency: 'Advanced', yearsOrExp: 'Build Automation' }
    ]
  }
];

export const SKILL_GROUPS_EN: SkillCategoryGroup[] = [
  {
    category: 'backend',
    title: 'Backend & System Core',
    subtitle: 'High-concurrency microservices, robust API design & security',
    icon: 'server',
    skills: [
      { name: 'Java (17 / 21)', category: 'backend', proficiency: 'Expert', yearsOrExp: 'Core', highlight: true },
      { name: 'Spring Boot 3', category: 'backend', proficiency: 'Expert', yearsOrExp: 'Core', highlight: true },
      { name: 'Spring Security & JWT', category: 'backend', proficiency: 'Advanced', yearsOrExp: 'Auth / OAuth2', highlight: true },
      { name: 'Spring Cloud & Gateway', category: 'backend', proficiency: 'Advanced', yearsOrExp: 'Microservices' },
      { name: 'Hibernate / Spring Data JPA', category: 'backend', proficiency: 'Advanced', yearsOrExp: 'ORM & Query' },
      { name: 'RESTful API & Clean Arch', category: 'backend', proficiency: 'Expert', yearsOrExp: 'Design Patterns', highlight: true },
      { name: 'RabbitMQ / Message Queue', category: 'backend', proficiency: 'Proficient', yearsOrExp: 'Async Events' }
    ]
  },
  {
    category: 'database',
    title: 'Databases & In-Memory Caching',
    subtitle: 'Relational data modeling, indexing, ACID transactions & cache tiers',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', category: 'database', proficiency: 'Advanced', yearsOrExp: 'Indexing & Complex Queries', highlight: true },
      { name: 'MySQL', category: 'database', proficiency: 'Advanced', yearsOrExp: 'Relational Schema' },
      { name: 'Redis Cache & Lock', category: 'database', proficiency: 'Advanced', yearsOrExp: 'Distributed Locks & Speed', highlight: true },
      { name: 'MongoDB', category: 'database', proficiency: 'Proficient', yearsOrExp: 'NoSQL Document Store' },
      { name: 'Database Migration (Flyway)', category: 'database', proficiency: 'Proficient', yearsOrExp: 'Versioning' }
    ]
  },
  {
    category: 'frontend',
    title: 'Frontend & UI Engineering',
    subtitle: 'Modern reactive SPAs with modular standalone architecture',
    icon: 'layout',
    skills: [
      { name: 'Angular (17 - 19+)', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Standalone & Signals', highlight: true },
      { name: 'TypeScript', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Strict Type System', highlight: true },
      { name: 'Tailwind CSS', category: 'frontend', proficiency: 'Expert', yearsOrExp: 'Utility-first UI' },
      { name: 'RxJS & Reactive State', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Observables & Streams' },
      { name: 'HTML5 / SCSS', category: 'frontend', proficiency: 'Advanced', yearsOrExp: 'Semantic & Responsive' }
    ]
  },
  {
    category: 'devops',
    title: 'DevOps, Tools & Infrastructure',
    subtitle: 'Containerization, version control, CI/CD pipelines & debugging',
    icon: 'terminal',
    skills: [
      { name: 'Docker & Docker Compose', category: 'devops', proficiency: 'Advanced', yearsOrExp: 'Containerization', highlight: true },
      { name: 'Git & GitHub Workflow', category: 'devops', proficiency: 'Expert', yearsOrExp: 'Branching & Collaboration' },
      { name: 'Linux / Bash Scripting', category: 'devops', proficiency: 'Proficient', yearsOrExp: 'CLI & Server Ops' },
      { name: 'Postman & Swagger/OpenAPI', category: 'devops', proficiency: 'Expert', yearsOrExp: 'API Testing & Docs' },
      { name: 'Maven & Gradle', category: 'devops', proficiency: 'Advanced', yearsOrExp: 'Build Automation' }
    ]
  }
];

export const PROJECTS_VI: Project[] = [
  {
    id: 'project-flash-sale',
    title: 'Hệ thống Flash Sale & E-Commerce Chịu tải cao',
    tagline: 'Lõi microservice phân tán với Redis lock & xử lý đơn hàng bất đồng bộ',
    description:
      'Thiết kế và xây dựng hệ thống backend cấp doanh nghiệp ngăn chặn hiện tượng bán vượt tồn kho (overselling) trong các đợt lưu lượng truy cập tăng vọt. Áp dụng Redis distributed lock kết hợp Lua script và phân tách luồng đặt hàng qua message queue.',
    category: 'backend',
    featured: true,
    techStack: ['Spring Boot 3', 'Java 21', 'Redis', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    highlights: [
      'Độ trễ phản hồi dưới 50ms trong bài kiểm thử tải mô phỏng lưu lượng đỉnh',
      'Redis distributed lock + atomic Lua script ngăn chặn triệt để race conditions',
      'Xử lý hàng đợi thanh toán và đơn hàng bất đồng bộ qua RabbitMQ consumers',
      'Tối ưu hóa truy vấn cơ sở dữ liệu với chỉ mục composite'
    ],
    architectureHighlights: ['Distributed Locks', 'Event-Driven Architecture', 'ACID Compliance'],
    githubUrl: 'https://github.com/TaTriet1412',
    demoUrl: 'https://github.com/TaTriet1412',
    role: 'Lead Backend Developer',
    stats: [
      { label: 'Throughput', value: 'High QPS' },
      { label: 'Tính toàn vẹn', value: '100% Kho' }
    ]
  },
  {
    id: 'project-banking-api',
    title: 'Cổng Giao dịch Ngân hàng Cloud-Native',
    tagline: 'Kiến trúc Microservices với Spring Cloud, Resilience4j & Keycloak OAuth2',
    description:
      'Xây dựng bộ dịch vụ giao dịch ngân hàng với API Gateway định tuyến tập trung, cơ chế ngắt mạch (circuit breaking) ngăn lỗi tầng và xác thực token bảo mật theo mô hình Zero-Trust.',
    category: 'microservices',
    featured: true,
    techStack: ['Spring Cloud', 'Spring Security', 'Keycloak', 'Resilience4j', 'MySQL', 'Docker'],
    highlights: [
      'Spring Cloud Gateway thiết lập chính sách giới hạn tốc độ (rate limit) và CORS tập trung',
      'Mô hình Circuit Breaker với Resilience4j bảo vệ các cổng thanh toán bên thứ ba',
      'Phân quyền theo vai trò (RBAC) với JWT tích hợp Keycloak Identity Provider',
      'Bộ kiểm thử tự động toàn diện với JUnit 5 & Mockito'
    ],
    architectureHighlights: ['API Gateway Pattern', 'Circuit Breaker', 'OAuth2 / OIDC'],
    githubUrl: 'https://github.com/TaTriet1412',
    demoUrl: 'https://github.com/TaTriet1412',
    role: 'System Architect & Backend Dev',
    stats: [
      { label: 'Chống chịu lỗi', value: 'Resilience4j' },
      { label: 'Mô hình Auth', value: 'OAuth2 / JWT' }
    ]
  },
  {
    id: 'project-task-collab',
    title: 'Nền tảng Quản lý & Cộng tác Dự án',
    tagline: 'Bảng cộng tác thời gian thực với Spring Boot & Angular Standalone',
    description:
      'Ứng dụng Full-stack hỗ trợ không gian làm việc đồng bộ hóa tức thời. Phía Backend sử dụng Spring Boot với giao thức WebSocket STOMP, kết hợp Frontend xây dựng bằng Angular Standalone và Tailwind CSS.',
    category: 'fullstack',
    featured: true,
    techStack: ['Angular 19', 'Spring Boot 3', 'WebSocket (STOMP)', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Đồng bộ hóa 2 chiều thẻ Kanban và cột trạng thái qua WebSockets trong thời gian thực',
      'Quản lý trạng thái bằng Angular Signals tăng tốc độ cập nhật giao diện không giật lag',
      'Bảo mật các endpoint REST với quyền hạn chi tiết trong từng workspace',
      'Giao diện Dark/Light hiện đại, mượt mà'
    ],
    architectureHighlights: ['WebSocket STOMP', 'Angular Signals', 'REST + WS Hybrid'],
    githubUrl: 'https://github.com/TaTriet1412',
    demoUrl: 'https://github.com/TaTriet1412',
    role: 'Full-Stack Developer',
    stats: [
      { label: 'Đồng bộ', value: '< 20ms Sync' },
      { label: 'Quản lý State', value: 'Angular Signals' }
    ]
  },
  {
    id: 'project-log-monitor',
    title: 'Dịch vụ Giám sát & Tổng hợp Nhật ký Phân tán',
    tagline: 'Dịch vụ thu thập telemetry tốc độ cao với Spring Boot & Elastic stack',
    description:
      'Phát triển dịch vụ thu nhận telemetry tổng hợp log ứng dụng trên nhiều container microservices, lập chỉ mục dòng log để chẩn đoán nhanh sự cố và phát cảnh báo thời gian thực.',
    category: 'backend',
    featured: false,
    techStack: ['Spring Boot', 'Elasticsearch', 'Redis', 'Docker', 'Grafana'],
    highlights: [
      'Pipeline nạp dữ liệu hàng loạt không chặn (non-blocking batch ingest)',
      'Cấu hình ngưỡng cảnh báo khi phát hiện đột biến mã lỗi HTTP 5xx',
      'Điều phối thử nghiệm đa node bằng Docker Compose'
    ],
    architectureHighlights: ['Log Ingestion Pipeline', 'Distributed Tracing'],
    githubUrl: 'https://github.com/TaTriet1412',
    role: 'Backend Developer'
  }
];

export const PROJECTS_EN: Project[] = [
  {
    id: 'project-flash-sale',
    title: 'High-Concurrency Flash Sale & E-Commerce Core',
    tagline: 'Distributed microservice engine with Redis locking & async order fulfillment',
    description:
      'Engineered an enterprise-grade backend system designed to prevent inventory overselling during peak traffic spike events. Applied Redis distributed locks with Lua scripts and decoupled order processing using message queues.',
    category: 'backend',
    featured: true,
    techStack: ['Spring Boot 3', 'Java 21', 'Redis', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    highlights: [
      'Sub-50ms latency response under simulated peak traffic stress test',
      'Redis distributed lock + atomic Lua script preventing race conditions',
      'Asynchronous payment and order queuing via RabbitMQ consumers',
      'Database query optimization with indexed composite keys'
    ],
    architectureHighlights: ['Distributed Locks', 'Event-Driven Architecture', 'ACID Compliance'],
    githubUrl: 'https://github.com/TaTriet1412',
    demoUrl: 'https://github.com/TaTriet1412',
    role: 'Lead Backend Developer',
    stats: [
      { label: 'Throughput', value: 'High QPS' },
      { label: 'Consistency', value: '100% Stock Accuracy' }
    ]
  },
  {
    id: 'project-banking-api',
    title: 'Cloud-Native Banking & Transaction Gateway',
    tagline: 'Microservices architecture with Spring Cloud, Resilience4j & Keycloak OAuth2',
    description:
      'Built a banking transaction service suite with centralized API Gateway routing, dynamic circuit breaking to prevent cascading failures, and zero-trust identity token validation.',
    category: 'microservices',
    featured: true,
    techStack: ['Spring Cloud', 'Spring Security', 'Keycloak', 'Resilience4j', 'MySQL', 'Docker'],
    highlights: [
      'Spring Cloud Gateway implementing centralized rate limiting and CORS policies',
      'Circuit breaker pattern with Resilience4j for third-party payment endpoints',
      'JWT role-based access control (RBAC) integrated with Keycloak Identity Provider',
      'Comprehensive unit and integration testing suite with JUnit 5 & Mockito'
    ],
    architectureHighlights: ['API Gateway Pattern', 'Circuit Breaker', 'OAuth2 / OIDC'],
    githubUrl: 'https://github.com/TaTriet1412',
    demoUrl: 'https://github.com/TaTriet1412',
    role: 'System Architect & Backend Dev',
    stats: [
      { label: 'Fault Tolerance', value: 'Resilience4j' },
      { label: 'Auth Model', value: 'OAuth2 / JWT' }
    ]
  },
  {
    id: 'project-task-collab',
    title: 'Enterprise Task Collaboration Platform',
    tagline: 'Real-time collaborative management board with Spring Boot & Angular Standalone',
    description:
      'A full-stack project featuring real-time synchronized workspaces. Backend powered by Spring Boot with WebSockets (STOMP protocol) and the frontend crafted with Angular Standalone Components and Tailwind CSS.',
    category: 'fullstack',
    featured: true,
    techStack: ['Angular 19', 'Spring Boot 3', 'WebSocket (STOMP)', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Bidirectional real-time Kanban column and card synchronization via WebSockets',
      'Angular Signals state management for reactive UI updates without extra re-renders',
      'Secure REST endpoints with granular workspace permission checks',
      'Dark/Light sleek UI with customizable workflow labels'
    ],
    architectureHighlights: ['WebSocket STOMP', 'Angular Signals', 'REST + WS Hybrid'],
    githubUrl: 'https://github.com/TaTriet1412',
    demoUrl: 'https://github.com/TaTriet1412',
    role: 'Full-Stack Developer',
    stats: [
      { label: 'Real-time', value: '< 20ms Sync' },
      { label: 'State', value: 'Angular Signals' }
    ]
  },
  {
    id: 'project-log-monitor',
    title: 'Telemetry & Distributed Log Aggregator',
    tagline: 'High-throughput monitoring daemon with Spring Boot & Elastic stack',
    description:
      'Developed a telemetry receiver service that aggregates application logs across multiple microservice instances, indexing log streams for rapid diagnostics and real-time alerts.',
    category: 'backend',
    featured: false,
    techStack: ['Spring Boot', 'Elasticsearch', 'Redis', 'Docker', 'Grafana'],
    highlights: [
      'Non-blocking batch ingest pipelines reducing database writing bottlenecks',
      'Configurable alert thresholds for HTTP 5xx error spikes',
      'Dockerized multi-node orchestration for local staging verification'
    ],
    architectureHighlights: ['Log Ingestion Pipeline', 'Distributed Tracing'],
    githubUrl: 'https://github.com/TaTriet1412',
    role: 'Backend Developer'
  }
];

export const EXPERIENCES_VI: ExperienceItem[] = [
  {
    id: 'exp-internship',
    role: 'Thực tập sinh / Lập trình viên Backend',
    organization: 'Enterprise Software & Technology Solutions',
    location: 'TP. Hồ Chí Minh',
    period: '2023 - Hiện tại',
    type: 'work',
    summary:
      'Tham gia kiến trúc và duy trì các dịch vụ backend phục vụ sản xuất bằng Spring Boot, hướng tới mã nguồn sạch, tối ưu hóa hiệu năng và chuẩn hóa giao tiếp API.',
    responsibilities: [
      'Xây dựng các RESTful API tuân thủ tiêu chuẩn Richardson Maturity Model mức độ 3.',
      'Tái cấu trúc các truy vấn phức tạp và áp dụng tầng đệm Redis, giảm độ trễ phản hồi trung bình tới 35%.',
      'Phối hợp chặt chẽ với đội ngũ Frontend Angular đảm bảo tính tương thích DTO và tài liệu OpenAPI.',
      'Viết kiểm thử tự động (Unit & Integration tests) với độ phủ cao bằng JUnit và Mockito.'
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Git']
  },
  {
    id: 'exp-university',
    role: 'Cử nhân Kỹ thuật Phần mềm (Công nghệ Thông tin)',
    organization: 'Chương trình Đào tạo Đại học Chính quy',
    location: 'Việt Nam',
    period: '2022 - 2026',
    type: 'education',
    summary:
      'Chương trình đào tạo chuyên sâu về Phát triển Ứng dụng Doanh nghiệp, Hệ thống Phân tán, Quản trị Cơ sở Dữ liệu và Thiết kế Kiến trúc Phần mềm.',
    responsibilities: [
      'Đạt thành tích học tập xuất sắc trong các môn Phân tích Hệ thống và Cơ sở Dữ liệu Nâng cao.',
      'Trưởng nhóm đồ án tốt nghiệp tập trung vào kiến trúc Microservices mở rộng cao và thuật toán đồng thuận phân tán.',
      'Tích cực tham gia các câu lạc bộ lập trình và chia sẻ kiến thức công nghệ.'
    ],
    gpaOrScore: 'GPA: 8.34 / 10 — Xếp loại: Xuất sắc',
    techStack: ['Data Structures & Algorithms', 'Distributed Systems', 'Software Patterns', 'Database Optimization']
  }
];

export const EXPERIENCES_EN: ExperienceItem[] = [
  {
    id: 'exp-internship',
    role: 'Backend Software Engineering Intern / Developer',
    organization: 'Enterprise Software & Technology Solutions',
    location: 'Ho Chi Minh City',
    period: '2023 - Present',
    type: 'work',
    summary:
      'Participated in architecting and maintaining production backend services using Spring Boot, focusing on clean architecture, performance tuning, and API standardizations.',
    responsibilities: [
      'Engineered RESTful APIs adhering to Richardson Maturity Model level 3 standards.',
      'Refactored legacy queries and implemented Redis caching layers, cutting average response latency by up to 35%.',
      'Collaborated closely with frontend developers using Angular to ensure seamless DTO contracts and OpenAPI specs.',
      'Wrote comprehensive unit and integration test coverage using JUnit and Mockito.'
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Git']
  },
  {
    id: 'exp-university',
    role: 'Bachelor of Software Engineering (Information Technology)',
    organization: 'University Degree Program',
    location: 'Vietnam',
    period: '2022 - 2026',
    type: 'education',
    summary:
      'Dedicated curriculum specializing in Enterprise Application Development, Distributed Systems, Database Management, and Advanced Software Architectures.',
    responsibilities: [
      'Consistently recognized for top-tier academic performance in System Analysis & Database Design courses.',
      'Led graduation capstone project focusing on high-scalability microservice architectures and distributed consensus.',
      'Active contributor in developer clubs and technical knowledge sharing sessions.'
    ],
    gpaOrScore: 'GPA: 8.34 / 10 — Distinction',
    techStack: ['Data Structures & Algorithms', 'Distributed Systems', 'Software Patterns', 'Database Optimization']
  }
];

// Backwards compatibility aliases
export const PERSONAL_INFO = PERSONAL_INFO_VI;
export const ACHIEVEMENTS = ACHIEVEMENTS_VI;
export const SKILL_GROUPS = SKILL_GROUPS_VI;
export const PROJECTS = PROJECTS_VI;
export const EXPERIENCES = EXPERIENCES_VI;
