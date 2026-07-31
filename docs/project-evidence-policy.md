# Project Evidence Policy

The portfolio should make strong work easy to verify without exposing private material or overstating maturity.

## Evidence hierarchy

Prefer evidence in this order:

1. a live public product or playable build;
2. a public repository with source, tests, and documentation;
3. a merged pull request with implementation and validation details;
4. repository-owned screenshots or recordings from a real build;
5. architecture and QA documents that point to concrete behavior.

Concept art, mockups, generated visuals, and planned architecture may support a story but must not be presented as proof of implemented functionality.

## Claim rules

Every public claim should answer:

- What behavior exists now?
- Where can it be verified?
- What important limitation remains?

Avoid unqualified claims such as:

- production-ready;
- secure;
- scalable;
- enterprise-grade;
- compliant;
- high performance;
- complete AI solution.

Use narrower language tied to actual evidence, for example: explicit Room migrations, deterministic simulation, role-scoped UI behavior, successful real-stack tests, or local-first data storage.

## Private products

For private repositories such as Tip Tracker:

- do not expose repository links or internal issue URLs;
- use fictional data in screenshots and exports;
- remove device identifiers, account names, personal earnings, and signing details;
- describe architecture and validation accurately without publishing proprietary source;
- distinguish release preparation from a published Play Store listing.

## Screenshots

A screenshot used as evidence must:

- come from the actual implementation;
- use fictional or sanitized data;
- show the relevant state clearly;
- avoid tokens, credentials, local file paths, and personal notifications;
- include meaningful localized alternative text;
- be optimized for the portfolio without destroying readability.

## Review record

When a project entry changes, record in the pull request:

- the source used to verify the claim;
- the project status before and after;
- added or replaced media;
- checks performed;
- known limitations that remain.

The objective is not to make every project look finished. It is to make the portfolio trustworthy, technically specific, and easy to discuss in an interview.
