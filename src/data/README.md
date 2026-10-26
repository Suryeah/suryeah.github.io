# Portfolio content guide

All editable portfolio content lives in [`portfolioData.js`](./portfolioData.js). Components only render it.

## Where each section comes from

| Section | Export | Rendered by |
|---|---|---|
| Hero | `hero`, `profile` | `components/Hero.jsx` |
| Products & Solutions | `products` | `components/Products.jsx` |
| Projects | `featuredProjects`, `moreProjects` | `components/Projects.jsx` |
| Open Source | `openSource` | `components/OpenSource.jsx` |
| Skills | `skillGroups` | `components/Skills.jsx` |
| Experience, Awards & IP, Languages | `experience`, `recognition`, `languages` | `pages/ExperiencePage.jsx` |
| Education | `education` | `pages/EducationPage.jsx` |
| Contact links, resume | `profile` | `components/Contact.jsx`, `components/Hero.jsx` |

Company logos are mapped by company name in `pages/ExperiencePage.jsx`.

## Optional fields

Optional fields are simply left out; the UI renders nothing for them. Never fill a field with placeholder text.

- **products**: `model`, `platform`, `status`, `outcome`, `technologies`, `evidenceUrl`
- **featuredProjects**: `outcome`, `githubUrl`, `sourceNote` (shown only when there is no `githubUrl`)
- **moreProjects**: `description`, `githubUrl`
- **openSource**: `considerations`, `relatedIssueUrl`
- **experience**: `current`, `internship`, `achievements` (may be empty)
- **education**: `affiliation`

## Adding a project

Add an object to `featuredProjects` (full case study) or `moreProjects` (one line). Required for a featured project: `name`, `problem`, `contribution`, `implementation`, `technologies`.

## Updating a pull request status

`openSource[].status` must be one of `submitted`, `merged`, or `closed`. Only change it to `merged` after confirming on GitHub. Never claim a change is in a release unless the release notes say so.

## Claims that need evidence before publishing

- Any number (sample rates, team sizes, percentages, counts) must come from a repository, the resume, or another document you can point to.
- A product `status` such as "commercially released" needs evidence of the release.
- `githubUrl` must point to the repository for that exact project, not a similar one.
- The patent application number is intentionally omitted until confirmed against an official record.
- Do not use `®` unless the registration is confirmed.

## Confidentiality

Do not add employer-internal details: customer names, internal product names, proprietary source, non-public performance figures, or internal defect data. Describe professional work at the level already used in the published resume.
