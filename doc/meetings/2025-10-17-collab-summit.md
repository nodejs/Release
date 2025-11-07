### Node.js Release Cycle Discussion Notes

Recording: https://www.youtube.com/watch?v=ppi87YjU9x0&t=6385s

**Goal and Context**

The discussion aimed to evaluate potential changes to the current release schedule, which has been in place for 10 years. Key drivers for change include the high maintenance burden on volunteer releasers, confusion among users, and the necessity of aligning with modern ecosystem needs.

The **current release cycle** structure dictates:
*   Release duration: 6 months between major versions.
*   Active duration: 12 months for even-numbered releases, 0 months for odd-numbered releases.
*   Maintenance duration: 3 months for odd-numbered releases, 18 months for LTS lines.
*   Total lifespan: 36 months for even-numbered (LTS) releases, and 9 months for odd-numbered releases.

**Identified Problems with the Status Quo**

The current cadence of two major releases per year is demanding for the limited number of volunteer releasers. Coordinating security releases is complex due to managing up to five active release lines simultaneously, often requiring patches to be created from scratch for older lines.

From a user perspective, the system is confusing. Most users, particularly enterprise organizations, stick strictly to **LTS versions** and generally ignore the odd-numbered "Current" releases. New users often struggle to understand why they must adhere to even-numbered releases. Additionally, the frequent major releases (two per year) confuse external audiences, who often perceive them as "making a lot of noise" without providing meaningful features.

**Key Stakeholder Feedback**

1.  **Users/Enterprise:** There is a strong preference for extending the **LTS support window** (currently 30 months active/maintenance). Shortening the 30-month total LTS window would be highly unpopular and likely cause "a scream in the ecosystem". Companies require LTS windows to overlap (e.g., support for Node 22 must continue while migrating to Node 24) to accommodate long forward planning cycles (up to two years).
2.  **Module Developers:** The "Current" releases are primarily useful for module developers to quickly integrate and test new V8 updates and features, ensuring modules are ready before features roll into LTS.
3.  **The Project/Releasers:** The primary issue is maintaining the health and capacity of the release working group. The need for feature backporting to Active LTS lines adds significant effort. Automation for cutting releases is critical for relieving the maintainer burden.

**Dependency Considerations**

Historically, security patching has been problematic, particularly with dependencies like OpenSSL. While OpenSSL has recently revised its LTS policy (new LTS every two years, supported for five years), which puts Node.js in a better place regarding dependency alignment, V8 remains a significant constraint. V8 updates often introduce breaking changes to the V8 API, which Node treats as a breaking change, necessitating new major versions.

**Key Proposals and Feedback**

Five proposals for changing the schedule were reviewed:

| Proposal Summary | Key Features | Primary Criticisms/Concerns |
| :--- | :--- | :--- |
| **Proposal 1: LTS Every Year with Alpha/Beta** | Releases every year; includes Alpha and Beta periods for testing commits before backporting to LTS. | Does not solve the maintainer burden; four active lines would still overlap, increasing maintenance and security coordination work. |
| **Proposal 2: Longer Life Cycles** | Increases the length of Current, Active, and Maintenance periods (but still two major releases per year). | Lengthens the wait time for V8/language feature adoption. Over time, still results in four concurrent active release lines, failing to address the maintenance issue. |
| **Proposal 3: Less Frequent LTS (Every Two Years)** | Reduces LTS frequency. | If the odd-numbered release maintenance period is removed, it creates a difficult hard cutoff for users migrating features (requiring immediate shift to the next major version). |
| **Proposal 4: No Active LTS Anymore** | Eliminates the "Active" phase, moving releases directly from Current to Maintenance (LTS). Shortens the total LTS window by 6 months (30 months total). | **Shortening the LTS window is highly discouraged** due to ecosystem resistance and the negative "optics" of reduced support. Internally, however, eliminating the term "Active" simplifies the decision process for feature backporting (Maintenance defaults to no features backported). |
| **Proposal 5: Bump December Major Every 6 Weeks/Go Evergreen** | Automated, frequent major releases (like browsers), picking one stable version per year for LTS. | Version numbers become less meaningful, complicating debugging and support. Node.js users care significantly about version numbers, unlike browser users. Unclear stability checks for the selected LTS release might be a huge problem for enterprise planning. |

**Key Consensus and Recommendations**

A crucial takeaway was the need to **separate internal terminology from external communication**. The terms "Active LTS" and "Maintenance LTS" were created internally for the release working group to manage the feature backporting commitment, but these terms are confusing to the general public.

It was widely recommended that **external messaging be simplified** to reflect only "Current" and "LTS". The complexity of backporting rules should be managed internally by the releasers, not exposed to the end users.

A poll indicated that Proposal 4 ("No Active LTS Anymore") and Proposal 2 ("Longer Life Cycles") were the most favored variations, suggesting a preference for simplification and stability, while the status quo was unpopular.

**Next Steps**

The meeting facilitators (Rafael and Antoine) will use the meeting recording and chat logs to compile detailed meeting notes and further iterate on the proposals. It was suggested that Kylie (responsible for marketing) be included in future release team discussions to ensure alignment between internal release decisions and external communication strategies.
