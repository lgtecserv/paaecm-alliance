# PAAECM — Institutional Website

Official web presence for the Pan African Alliance for Ending Child Marriage, in English, built strictly from the content supplied. No invented facts, contacts, statistics, biographies or partners.

## Identity

- Logo (uploaded) in header and footer; the second uploaded image becomes the site icon.
- Palette: deep green, restrained gold, white, warm neutrals, soft earth tones. Generous white space, strong typographic hierarchy, subtle fade-in and hover motion only.
- Tagline everywhere: Accountability • Solidarity • Ubuntu.

## Pages

| Page | Path | Content |
| --- | --- | --- |
| Home | `/` | Hero (headline, supporting line, two calls to action), About summary, Origins timeline, Vision, Mission, Goal, Strategic Objectives, What We Do, African Solutions, Ubuntu, Pan-African map, Youth & Survivors, Accountability, SDG 5.3, Partner With Us |
| About | `/about` | Who PAAECM is, why it formed, origins (January 2023, African Union campaign and Lusaka July 2022 engagements, Plan International Center of Excellence study), Mozambique section |
| Vision & Mission | `/vision-mission` | Vision and Mission quoted verbatim, Goal, Accountability |
| Strategic Objectives | `/objectives` | The five numbered objectives, verbatim |
| Strategic Actions | `/strategic-actions` | The five action lines, verbatim |
| Partnerships | `/partnerships` | Strategic partners list exactly as given, no added descriptions |
| Leadership | `/leadership` | Board intro plus the five members and the General Secretary |
| Resources | `/resources` | Categories with the "made available as released" notice |
| News | `/news` | Categories with an empty-state notice, no fictional posts |
| Contact | `/contact` | Form: Full Name, Organization, Country, Email, Subject, Message |
| Mozambique | `/mozambique` | Country representation and the letter's described experience only |
| Partner With Us | `/partner-with-us` | Collaboration areas, "Explore Collaboration" call to action |

Header: Home, About, Vision & Mission, Strategic Areas, Partnerships, Leadership, Resources, News, Contact, plus a "Partner With Us" button; elegant hamburger menu on mobile.
Footer: logo, full name, tagline, all section links, dynamic-year copyright.

## Content handling

- Vision, Mission, Goal, objectives and actions are rendered as supplied, unedited.
- Board names and titles live in one editable data file so the Nhalivilo / Nhalevilo spelling and any title can be corrected in one place. No extra roles created.
- No email, phone, address, social links or offices anywhere until provided.
- Partner list carries no per-partner descriptions or claims of current activity.

## Imagery

Dignified, high-quality photography of African girls, women, communities, leadership and participation — never framed as victims. Images are generated for hero and section banners; a subtle animated Africa map highlights the ten represented countries without implying offices.

## Technical notes

- TanStack Start file routes, one file per page, each with its own title, description, Open Graph and Twitter tags, canonical link, and semantic headings; Organization schema.org JSON-LD on the home route.
- Design tokens (green/gold/neutrals, typography, radii) defined in `src/styles.css`; no hardcoded colour classes.
- Shared content lives in typed data modules (`src/content/*`) — board, partners, objectives, actions, resources, news — so a CMS or admin layer can replace them later without touching page layout.
- Contact form validates client-side; submission wiring waits on a destination address or a backend decision.
- `robots.txt` and `sitemap.xml` updated for the routes above.
- Accessibility: contrast checks, alt text, keyboard navigation, labelled form fields, responsive from phone to desktop; images lazy-loaded.

## Open items

- Official contact details, social profiles, and the confirmed spelling of the Board Chairperson's name.
- Where contact form messages should be delivered.
