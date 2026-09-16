/**
 * Single source of institutional content for the PAAECM website.
 * All text here comes from PAAECM's own institutional documents.
 * Edit this file to update the site — no invented content may be added.
 */

export const org = {
  name: "Pan African Alliance for Ending Child Marriage",
  acronym: "PAAECM",
  tagline: "Accountability • Solidarity • Ubuntu",
  vision:
    "An Accountable Africa that is free of child marriage and other harmful practices.",
  mission:
    "Fostering accountability and sustainable domestic solutions on ending child marriages and protection of rights of survivors in Africa.",
  goal: "Promote the rights of girls, secure rights of women for a prosperous Africa free of child marriage in furtherance of African and global commitments on development and human rights.",
  heroHeadline:
    "An Accountable Africa Free of Child Marriage and Other Harmful Practices",
  heroSupport:
    "Fostering accountability and sustainable domestic solutions on ending child marriage and protection of rights of survivors in Africa.",
};

export const countries = [
  "Zambia",
  "Zimbabwe",
  "Malawi",
  "Mozambique",
  "South Africa",
  "Tanzania",
  "Ethiopia",
  "Nigeria",
  "Cameroon",
  "Ghana",
];

export const strategicObjectives = [
  {
    number: "01",
    title: "Research and Evidence Generation",
    text: "Research and evidence generation for accountability and resourcing.",
  },
  {
    number: "02",
    title: "Movement Building",
    text: "Movement building for prevention, rapid response and protection.",
  },
  {
    number: "03",
    title: "Strategic Convening",
    text: "Strategic convening.",
  },
  {
    number: "04",
    title: "Evidence-Based Policy Advocacy",
    text: "Influencing public policy via evidence-based advocacy.",
  },
  {
    number: "05",
    title: "Organizational and Systems Strengthening",
    text: "Organizational and systems strengthening.",
  },
];

export const strategicActions = [
  {
    title: "Accountability",
    text: "Tracking accountability to existing national, regional and global commitments on ending child marriage.",
  },
  {
    title: "Political Will & Resources",
    text: "Mobilizing political will and resources for sustainable domestic interventions and programmes for prevention, services and protection.",
  },
  {
    title: "Continental Movement",
    text: "Strengthening a continental movement on ending child marriage through amplifying individual, community, national and regional efforts.",
  },
  {
    title: "Knowledge & Collaboration",
    text: "Knowledge management and fostering collaborative actions with academic communities, social movements, service providers and policymakers.",
  },
  {
    title: "Youth & Survivors",
    text: "Strengthening and supporting the voice of young people, especially adolescent girls and young women and survivors of violence as frontline champions for ending child marriage.",
  },
];

export const approachPillars = [
  "Transformation of Social Norms",
  "Strengthening Systems",
  "Human Rights",
  "African Feminism",
  "Ubuntu",
  "Accountability",
  "Collective Action",
  "Sustainable Solutions",
];

export const partners = [
  "Council of Traditional Leaders of Africa (COTLA)",
  "African Union Champion on Ending Child Marriage",
  "African Union Commission",
  "SADC Parliamentary Forum",
  "UN Human Rights Council",
  "Girls Not Brides: The Global Partnership to End Child Marriage",
  "Equality Now: A Just World for Women and Girls",
  "Plan International Center of Excellence",
  "UN Women",
  "King's College London",
  "Women Refugee Commission",
  "University College London",
  "University of Zambia",
  "Other institutions of Higher Learning in Africa",
  "Local CBOs, NGOs and INGOs",
];

/**
 * Board members exactly as listed in the institutional documents.
 * NOTE: the documents show two spellings of the Chairperson's surname
 * ("Nhalevilo" and "Nhalivilo"). Update `name` here once the official
 * spelling is confirmed — it is used everywhere on the site.
 */
export const board = [
  {
    name: "Benilde Nhalevilo",
    country: "Mozambique",
    role: "Board Chairperson",
  },
  { name: "Koshuma Mtenge", country: "Tanzania", role: "Board Member" },
  { name: "Carolyn Seaman", country: "Nigeria", role: "Board Member" },
  { name: "Dr. Fulata Moyo", country: "Malawi", role: "Global Advocacy Lead" },
  { name: "Naver Chayelela", country: "Zambia", role: "Board Secretary" },
];

export const secretariat = [
  { name: "Naver Chayelela", role: "General Secretary, PAAECM" },
];

export const boardIntro =
  "PAAECM is governed by a Pan-African Board of Directors drawn from across the continent, providing strategic oversight and safeguarding the Alliance's accountability to its members and partners.";

export const originsSteps = [
  "Existing National Efforts",
  "Need for Stronger Continental Coordination",
  "Collective Pan-African Engagement",
  "PAAECM",
];

export const originsReferences = [
  "African Union Campaign on Ending Child Marriage",
  "African Union engagements",
  "Side engagements during the African Union Summit in Lusaka in July 2022",
  "Recommendations from the Plan International Center of Excellence study on SADC Model Law on Ending Child Marriage",
];

export const resourceCategories = [
  "Research",
  "Reports",
  "Policy Briefs",
  "Publications",
  "Advocacy Materials",
  "Statements",
];

export const resourcesNotice =
  "Resources and publications will be made available here as they are released by PAAECM.";

export const newsCategories = [
  "News",
  "Events",
  "Advocacy",
  "Research",
  "Partnerships",
];

export const collaborationAreas = [
  "Research",
  "Evidence generation",
  "Advocacy",
  "Knowledge exchange",
  "Movement building",
  "Strategic convening",
  "Community engagement",
  "Organizational strengthening",
];

export const partnerStatement =
  "PAAECM is committed to working with various stakeholders and fostering strategic partnerships that can help accelerate the achievement of its vision and contribute to ending child marriage in Africa.";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Vision & Mission", to: "/vision-mission" },
  { label: "Strategic Areas", to: "/objectives" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Leadership", to: "/leadership" },
  { label: "Resources", to: "/resources" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
] as const;

export const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Vision & Mission", to: "/vision-mission" },
  { label: "Strategic Objectives", to: "/objectives" },
  { label: "Strategic Actions", to: "/strategic-actions" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Leadership", to: "/leadership" },
  { label: "Resources", to: "/resources" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
] as const;
