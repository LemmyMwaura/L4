import { randomUUID } from 'crypto'

export const workExperience = [
  {
    id: randomUUID(),
    logo: 'elewa-icon.png',
    name: 'Elewa-iTalanta',
    skills: ['Angular', 'GCP', 'Terraform', 'Nx', 'Node.js'],
    time: '2023 - 2024',
    role: 'Software Engineer',
    description:
      'Joined the elewa team to work on Goomza, a chatbot editor and manager for conversational platforms. Also worked on Zafari, a hotel management system and built Cargo Visibility, a truck visibility platform.',
    achievements: [
      'Built an MVP for a truck visibility platform featuring real-time data streaming, maps integration, and detention status tracking.',
      'Developed a robust analytics and insights tracking feature, with data visualition on the client included.',
      'Engineered and maintained resource provisioning pipelines using Terraform for multiorg cloud environments.',
      'Authored and integrated deployment and packaging scripts for new environments (Compute Engine VMs).',
      'Designed, wrote, and maintained CI/CD scripts using GitHub Actions.',
      'Developed an Assessment Tracking and Results Management Feature.',
      'Implemented an invoicing queueing service for invoice management.',
      'Designed and implemented a performance-focused state layer for the platform.',
      'Rewrote the Elewa marketing site in Angular Universal with Webflow as our CMS for blog posts.',
      'Engaged in mentoring and code review for over 100+ Pull Requests within the Elewa Chatbot editor codebase.',
    ],
  },
  {
    id: randomUUID(),
    logo: 'stealth-icon.jpg',
    name: 'Stealth Startup',
    skills: ['Next.js', 'SvelteKit', 'TRPC', 'Node.js'],
    time: '2023 - 2024',
    role: 'Full-Stack Developer',
    description:
      'Worked on three projects: a Bilateral Simulation Project, an employment-focused social media platform and made individual contributions to Calcom.',
    achievements: [
      'Implemented Stripe Digest Analytics Data Tracking for the Bilateral Simulation project.',
      'Implemented platform redesigns with AB Tests for the Bilateral Simulation project.',
      'Enhanced platform security and user experience for the Taxado Repository with Keycloak SSO.',
    ],
  },
  {
    id: randomUUID(),
    logo: 'italanta-icon.jpg',
    name: 'iTalanta',
    skills: ['Angular', 'Nx'],
    time: '2022-2023',
    role: 'Open Source Contributor',
    description:
      'Contributed to an open-source chatbot editor and manager, enabling users to host and utilize conversational learning projects.',
    achievements: [
      'Designed the Node connectors, built a multi-level side menu, converted the web app into a PWA and worked on designs for different blocks in the editor canvas.',
      'Made significant contributions, worked with Monorepos, acquired knowledge of Atomic design patterns, and adhered to Nx/Angular best practices.',
    ],
  },
  {
    id: randomUUID(),
    logo: 'aha.png',
    name: 'My Movies Africa',
    skills: ['React'],
    time: '2022',
    role: 'Software Developer',
    description:
      'Led a team of five to tackle user registration issues and add a few key features.',
    achievements: [
      'Developed a streamlined solution for user onbording and validation with Google reCAPTCHA.',
      'Managed integration of new features including a landing page, notifications page and conversion of platform to a Progressive Web App for enhanced user experience.',
    ],
  },
  {
    id: randomUUID(),
    logo: 'aha.png',
    name: 'Essential Health',
    skills: ['Shopify', 'React', 'Marketing', 'Ads Management'],
    time: '2020-2021',
    role: 'Founder',
    description:
      'Founded an eCommerce platform specializing in medical products.',
    achievements: [
      'Built a beautiful headless eCommerce frontend using Shopify and React.',
      'Implemented advanced SEO strategies.',
      'Streamlined the user interface to enhance customer satisfaction and retention.',
      'Setup marketing pages and managed AD campaigns (FB ads Manager)'
    ],
  },
]
