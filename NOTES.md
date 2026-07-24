# NOTES

## Summary of Changes

I focused on fixing high-impact functional issues and improving the application's robustness while keeping the changes small and focused.

Implemented changes include:

- Fixed SQL operator precedence issue causing incorrect status filtering.
- Reset pagination to the first page when search or status filters change.
- Improved frontend loading and error state handling.
- Added validation for invalid status values and returned HTTP 400 instead of HTTP 500.
- Updated the Oracle PL/SQL reference package to keep the SQL logic consistent with the application.
- Removed an artificial API delay to improve response time.
- Replaced System.out.println with SLF4J logging.
- Improved accessibility by adding id and name attributes to form controls.
- Added an inline favicon to remove unnecessary browser console errors.

## What I chose not to change

I intentionally did not add new features such as priority filtering, assignee filtering, or backend sorting because this exercise emphasizes focused patches rather than feature development.

## Biggest remaining risk

Pagination is currently performed in memory after fetching all matching records. This approach may not scale well for large datasets and could be improved using database-level pagination.

## AI / Tools Used

I used ChatGPT to review the codebase, discuss debugging approaches, validate fixes, and improve code quality. Every suggested change was manually reviewed, implemented, and tested before being kept.