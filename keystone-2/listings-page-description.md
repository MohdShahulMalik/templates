# Job Listings Page

## Overview

A filterable, searchable list of all job applications. Jobs are grouped into category tabs that combine job type + region/focus. No stats (those live on dashboard), no bulk selection.

---

## Page Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Job Listings                                              [+ Add Job]    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Search: [🔍 Search by title, company, or location...]                     │
│                                                                             │
│  Status: [All] [Saved] [Applied] [Interview] [Offer] [Rejected] [Declined] │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ [🌐 Remote Worldwide] [🏠 Local Hybrid] [🏢 Local Onsite] [📋 All]│    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                                                                     │    │
│  │  Job listings (filtered by selected category)                       │    │
│  │                                                                     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Components

### 1. Page Header

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Job Listings                                              [+ Add Job]    │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Title**: "Job Listings"
- **Add Job button**: Opens add job modal

---

### 2. Search & Filter Bar

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Search: [🔍 Search by title, company, or location...]                     │
│                                                                             │
│  Status: [All] [Saved] [Applied] [Interview] [Offer] [Rejected] [Declined] │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Text input with search icon
- Filters jobs by title, company, or location
- Clear button (×) when text is present
- **Status filter**: Chip/pill buttons below search
  - "All" selected by default (highlighted)
  - Click a status to show only jobs with that status
  - Multiple statuses can be selected (e.g., "Saved" + "Applied")
  - Click again to deselect

---

### 3. Category Tabs

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [🌐 Remote Worldwide – React] [🏠 Local Hybrid] [🏢 Onsite] [📋 All]    │
└─────────────────────────────────────────────────────────────────────────────┘
```

Tabs group jobs by **type + region + focus**:

| Tab | Shows |
|---|---|
| `🌐 Remote Worldwide – React` | Remote jobs from other countries, focused on React |
| `🏠 Local Hybrid` | Hybrid jobs in your country |
| `🏢 Local Onsite` | Onsite jobs in your country |
| `📋 All` | Every job regardless of filters |

**Tab format**: `{emoji} {type} {region} – {focus}`

- Active tab highlighted (colored background)
- Click to switch categories
- "All" tab shows every job regardless of filters
- Tabs are dynamic — only appear if jobs exist in that category

**Region detection**:
- On first visit, detect your country
- Jobs from your country → show "Local"
- Jobs from other countries → show "Worldwide"

---

### 4. Job Listings

Each job appears as a card/list item:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Senior React Developer                                                     │
│  Google · Remote · Aug 3                                                    │
│                                                                             │
│  ● Applied                                                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Frontend Lead                                                              │
│  Meta · NYC · Hybrid · Aug 2                                                │
│                                                                             │
│  ● Saved                                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Full Stack Developer                                                       │
│  Startup Inc · London · Onsite · Aug 1                                      │
│                                                                             │
│  ● Saved                                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Each listing shows**:
- **Title**: Job title (clickable → opens job detail page)
- **Company**: Company name
- **Location**: City/country or "Remote"
- **Type**: Remote / Hybrid / Onsite (if not already indicated by category)
- **Date**: When job was added
- **Status**: Badge with color

**Interactions**:
- Click title → opens job detail page
- Click status badge → dropdown menu to change status
- Hover → subtle highlight

**Status badges**:

| Status | Badge |
|---|---|
| Saved | `● Saved` |
| Applied | `● Applied` |
| Interview | `● Interview` |
| Offer | `● Offer` |
| Rejected | `● Rejected` |
| Declined | `● Declined` |

Each status has its own distinct color for quick visual identification.

---

### 5. Add Job Modal

Triggered by "+ Add Job" button.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Add Job                                                           [×]    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Title *       [________________________________]                          │
│  Company *     [________________________________]                          │
│  Location      [________________________________]                          │
│  URL           [________________________________]                          │
│  Type          (●) Remote  ( ) Hybrid  ( ) Onsite                          │
│  Country       [________________________________]                          │
│  Salary        [________________________________]                          │
│  Notes         [________________________________]                          │
│  Status        [Saved ▼]                                                    │
│                                                                             │
│                        [Cancel]  [Add Job]                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Fields marked with * are required
- Type defaults to "Remote"
- Status defaults to "Saved"
- On success: closes modal, refreshes job list
- On error: shows validation errors inline

---

### 6. Empty State

When no jobs exist (or no jobs match current category):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          No job listings yet                                │
│                                                                             │
│              Add jobs manually or run AI research to get started            │
│                                                                             │
│                     [+ Add Job]  [Start Research]                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 7. Pagination

When jobs exceed 20 per page:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          ←  1  2  3  4  5  →                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

- 20 jobs per page
- Previous/Next arrows
- Current page highlighted
- Disabled states for first/last page

---

## Category Generation

Categories are created automatically based on what jobs exist:

1. Start with a "📋 All" tab (always present)
2. Group remaining jobs by type (Remote, Hybrid, Onsite)
3. For each type, check if jobs are local (your country) or worldwide
4. Create a tab for each combination that has at least one job
5. If jobs have skills/tags, append focus to the tab label

**Example**:
- You have 12 Remote jobs (8 worldwide, 4 local)
- You have 5 Hybrid jobs (all local)
- You have 3 Onsite jobs (all local)

**Resulting tabs**:
```
📋 All
🌐 Remote Worldwide – React
🏠 Local Remote
🏠 Local Hybrid
🏢 Local Onsite
```
