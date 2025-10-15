---
description: "Complete guide for creating and managing Jira issues using the Atlassian MCP"
---

# Atlassian MCP Usage Guide

Always use the `jira` tool when interacting with Jira or Confluence. **ALWAYS** write tickets in Jira and Confluence pages in **English**. If the user writes in Spanish, translate the text to English before inserting it into Jira, but continue communicating with the user in their language.

**CRITICAL**: The Jira project we're working on is **Mjo Litui**:
- Project Key: `MJOLIT`
- Project ID: `10033`

Never create, read, or modify issues in any other project.

## Project Labels

The labels (tags) used in the project are:

- WEB

**CRITICAL**: Never use any label not in the list above.

## Available Users

- Manu Overa: `633580a3140ba0bf651c1f68` (Project Admin)

## MCP Limitations and Workarounds

The Atlassian MCP has the following limitations:

- **User mentions WORK** but require the Account ID format: `[~accountid:633580a3140ba0bf651c1f68]`
  - ❌ Email format does NOT work: `@user@example.com`
  - ❌ Username format does NOT work: `@username`
  - ✅ Account ID format WORKS: `[~accountid:633580a3140ba0bf651c1f68]`
- Task lists/checklists ARE fully supported using `* [ ]` and `* [x]` syntax

---

## 🔄 Complete Workflow for Creating a Jira Task

### 1. Basic Issue Creation

```typescript
mcp_jira_jira_create_issue({
  project_key: "MJOLIT",
  summary: "Issue title",
  issue_type: "Task",  // or "Story", "Bug", "Epic", "Feature", "Sub-task"
  assignee: "manu.overa@gmail.com",
  description: "Description in Markdown format (see formatting guide below)"
})
```

**✅ Result**: Creates the issue with basic fields.

### 1a. Creating Subtasks

Subtasks are issues that belong to a parent issue. To create a subtask:

```typescript
mcp_jira_jira_create_issue({
  project_key: "MJOLIT",
  summary: "Subtask title",
  issue_type: "Subtask",  // ⚠️ Must be exactly "Subtask"
  description: "Subtask description in Markdown",
  additional_fields: {
    parent: "MJOLIT-XX"  // ✅ Parent issue key as STRING (not object)
  }
})
```

**⚠️ CRITICAL**: 
- The `issue_type` must be exactly `"Subtask"` (capital S)
- The `parent` field in `additional_fields` must be a **string** with the parent issue key
- ❌ DO NOT use object format: `{"key": "MJOLIT-XX"}` - This will fail
- ✅ USE string format: `"MJOLIT-XX"` - This works correctly

**Example:**
```typescript
// ✅ CORRECT - Creates subtask MJOLIT-78 as child of MJOLIT-75
mcp_jira_jira_create_issue({
  project_key: "MJOLIT",
  summary: "Validate Panel Color Rendering",
  issue_type: "Subtask",
  description: "Test all panel color variations",
  additional_fields: {
    parent: "MJOLIT-75"  // String format
  }
})

// ❌ WRONG - This will fail
mcp_jira_jira_create_issue({
  project_key: "MJOLIT",
  summary: "Test Subtask",
  issue_type: "Subtask",
  additional_fields: {
    parent: { key: "MJOLIT-75" }  // Object format - FAILS
  }
})
```

### 2. Update Standard Fields

```typescript
mcp_jira_jira_update_issue({
  issue_key: "MJOLIT-XX",
  fields: {
    labels: ["WEB"],
    priority: { name: "Highest" }
  }
})
```

**Available Priorities**: `Lowest`, `Low`, `Medium`, `High`, `Highest`

### 3. Update Custom Fields

```typescript
mcp_jira_jira_update_issue({
  issue_key: "MJOLIT-XX",
  fields: {},
  additional_fields: {
    customfield_10015: "2025-10-14",  // Start date (YYYY-MM-DD)
    duedate: "2025-10-20",             // Due date (YYYY-MM-DD)
  }
})
```

**⚠️ IMPORTANT**: Setting `parent` via `additional_fields` does NOT work reliably. Use `mcp_jira_jira_link_to_epic` instead (see below).

### 3a. Link Issue to Epic (Parent)

```typescript
mcp_jira_jira_link_to_epic({
  issue_key: "MJOLIT-XX",
  epic_key: "MJOLIT-6"  // The epic/parent issue
})
```

**✅ This is the CORRECT way** to assign a parent/epic to an issue.

### 3b. Create Issue Links (Blocks, Relates, etc.)

```typescript
mcp_jira_jira_create_issue_link({
  link_type: "Blocks",           // or "Relates", "Duplicate", "Cloners"
  inward_issue_key: "MJOLIT-10", // The issue that blocks
  outward_issue_key: "MJOLIT-73", // The issue that is blocked
  comment: "Optional comment about the link"
})
```

**Available Link Types:**
- `Blocks` → "blocks" / "is blocked by"
- `Relates` → "relates to" / "relates to"
- `Duplicate` → "duplicates" / "is duplicated by"
- `Cloners` → "clones" / "is cloned by"

**Example: MJOLIT-10 blocks MJOLIT-73**
- In MJOLIT-73 you'll see: "is blocked by MJOLIT-10"
- In MJOLIT-10 you'll see: "blocks MJOLIT-73"

### 3c. Remove Issue Links

```typescript
mcp_jira_jira_remove_issue_link({
  link_id: "10034"  // Get this from issuelinks field
})
```

To get the link ID, first query the issue:
```typescript
const issue = await mcp_jira_jira_get_issue({
  issue_key: "MJOLIT-73",
  fields: "issuelinks"
});
// link_id is in issue.issuelinks[].id
```

### 3d. Flag an Issue as Impediment

```typescript
await mcp_jira_jira_update_issue({
  issue_key: "MJOLIT-XX",
  fields: {},
  additional_fields: {
    customfield_10021: [{ value: "Impediment" }]
  }
});
```

*Flagged* is a multi-checkbox custom field where the option `Impediment` adds the red blocker flag in Jira boards. Always include an empty `fields` object when using this method, and avoid mixing this update with other field changes to keep the request simple.

### 4. Time Tracking Configuration

```typescript
mcp_jira_jira_update_issue({
  issue_key: "MJOLIT-XX",
  fields: {
    timetracking: {
      originalEstimate: "2d"  // Formats: "1w", "3d", "5h", "30m"
    }
  }
})
```

**⚠️ IMPORTANT**: `timetracking` MUST go in `fields`, NOT in `additional_fields`.

---

## 📝 Markdown Formatting Guide for Jira Descriptions

The MCP accepts **Markdown** format and automatically converts it to **Jira Wiki Markup**. Below is what works and what doesn't:

### ✅ What Works Correctly

#### Headers
```markdown
# Main Title        → h1. Main Title
## Section          → h2. Section
### Subsection      → h3. Subsection
```

#### Text Formatting
```markdown
**bold text**           → *bold text*        ✅ Works
*italic text*           → _italic text_      ✅ Works
`inline code`           → {{inline code}}    ✅ Works
```

**❌ LIMITATION**: Combined bold and italic (`***text***`) does NOT work correctly through Markdown conversion. Use Wiki Markup directly if needed: `*_text_*`

#### Unordered Lists (SIMPLE ONLY - No Nesting)
```markdown
- First item            → * First item
- Second item           → * Second item
- Third item            → * Third item
```

**❌ CRITICAL LIMITATION**: Nested unordered lists DO NOT work correctly. Despite MCP preserving indentation in the stored markup, Jira UI renders them with incorrect visual markers (dashes, circles, bullets) instead of proper nested indentation. **NEVER use nested unordered lists**.

```markdown
❌ AVOID THIS:
- First item
  - Nested item         ❌ Will NOT render correctly
    - Deep nested       ❌ Will NOT render correctly
```

**Solution**: Use only flat unordered lists. For complex hierarchies, use numbered sections or separate lists under headers.

#### Ordered Lists (SIMPLE ONLY - No Nesting)
```markdown
1. First step           → # First step
2. Second step          → # Second step
3. Third step           → # Third step
```

**❌ CRITICAL LIMITATION**: Ordered lists with nesting DO NOT work correctly. They convert to headers (h1, h2). **NEVER use nested ordered lists**.

#### Tables
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

Converts to Jira table format correctly:
```
|| Header 1 || Header 2 || Header 3 ||
| Cell 1 | Cell 2 | Cell 3 |
| Cell 4 | Cell 5 | Cell 6 |
```

#### Code Blocks
```markdown
​```javascript
function hello() {
  console.log("Hello");
}
​```
```

Converts to:
```
{code:javascript}
function hello() {
  console.log("Hello");
}
{code}
```

**Supported languages**: `javascript`, `typescript`, `python`, `java`, `css`, `json`, `sql`, etc.

**❌ LIMITATION**: `html` language syntax highlighting does NOT work. HTML code blocks appear without syntax highlighting. Use `xml` as an alternative if needed.

#### Links
```markdown
[Link text](https://example.com)    → [Link text|https://example.com]
https://example.com                  → https://example.com (auto-link)
```

#### User Mentions

**✅ User mentions WORK** when using the Account ID format: `[~accountid:ACCOUNT_ID]`

```markdown
[~accountid:633580a3140ba0bf651c1f68]   ✅ Works! Creates clickable mention
@user@example.com                       ❌ Does not work
@username                               ❌ Does not work
```

**How to find Account IDs:**
- Use `mcp_jira_jira_get_user_profile` with email to get the account ID
- Or check existing issues where the user is assigned/mentioned

**Example:**
```markdown
Here I'm mentioning [~accountid:633580a3140ba0bf651c1f68] about this issue.
```

This will render as a clickable mention of the user in Jira.

#### Issue References
```markdown
MJOLIT-6        → MJOLIT-6 (becomes clickable link in Jira)
MJOLIT-10       → MJOLIT-10 (becomes clickable link in Jira)
```

**✅ Issue keys are automatically converted to clickable links** when the issue is viewed in Jira.

#### Task Lists / Checklists
```markdown
- [ ] Pending task          → * [ ] Pending task
- [x] Completed task        → * [x] Completed task
- [ ] Another pending       → * [ ] Another pending
```

**❌ CRITICAL LIMITATION**: Checklists DO NOT work correctly via MCP Markdown conversion. The syntax is preserved but doesn't render as interactive checkboxes in Jira UI. **AVOID using checklists** - use regular lists instead.

#### Blockquotes
```markdown
> This is a quote
> Multiple lines supported
```

Converts correctly to Jira blockquote format.

---

### ✅ Wiki Markup Extensions That Work

You can mix Wiki Markup syntax directly in Markdown descriptions. The following Wiki Markup features work correctly:

#### Blockquotes with `bq.`
```
bq. This is a blockquote line
bq. This is another line in the blockquote
bq. Blockquotes can have multiple lines
```

**✅ Works perfectly** - renders as a quoted block with gray background.

#### Colored Text
```
{color:red}Red text{color}
{color:blue}Blue text{color}
{color:green}Green text{color}
{color:orange}Orange text{color}
{color:purple}Purple text{color}
```

**✅ Works perfectly** - text appears in the specified color.

#### Icons / Emoticons
```
(y) - Thumbs up (green checkmark)
(n) - Thumbs down (red X)
(i) - Information (blue i icon)
(!) - Warning (yellow exclamation)
(?) - Question (blue question mark)
(+) - Plus (green plus)
(-) - Minus (red minus)
(x) - Cross (red X)
(/) - Check (green checkmark)
(*) - Star (yellow star)
(on) - Light bulb on
(off) - Light bulb off
```

**✅ Works perfectly** - icons render as colorful symbols.

#### Panels
```
{panel}
Basic panel with no title
{panel}

{panel:title=Panel Title}
Panel with a title
{panel}

{panel:title=Colored Panel|borderColor=#0052CC|bgColor=#DEEBFF}
Panel with custom colors
{panel}
```

**✅ Works perfectly** - panels render with borders, backgrounds, and titles.

**Color Combinations for Common Panel Types:**
- **Information (Blue)**: `borderColor=#0052CC|bgColor=#DEEBFF`
- **Warning (Yellow)**: `borderColor=#FF8B00|bgColor=#FFFAE6`
- **Error (Red)**: `borderColor=#DE350B|bgColor=#FFEBE6`
- **Success (Green)**: `borderColor=#00875A|bgColor=#E3FCEF`
- **Note (Purple)**: `borderColor=#5E4DB2|bgColor=#EAE6FF`
- **Neutral (Gray)**: `borderColor=#6B778C|bgColor=#F4F5F7`

**Example - Warning Panel with Icon:**
```
{panel:title=(!) Important Warning|borderColor=#FF8B00|bgColor=#FFFAE6}
(!) This is a warning message that will appear in a yellow panel.
{panel}
```

#### Quote Blocks
```
{quote}
This is a quote block.
It can contain multiple lines.
{quote}
```

**✅ Works correctly** - renders as indented quote block.

#### Preformatted Text
```
{noformat}
This text preserves    spacing
  and    formatting
    exactly as written
{noformat}
```

**✅ Works correctly** - preserves all whitespace and formatting.

---

### ❌ What DOESN'T Work or Has Issues

#### ❌ Combined Bold and Italic
```markdown
***bold and italic***   ❌ Does not convert correctly
```

**Solution**: Use Wiki Markup directly: `*_text_*` for combined bold and italic.

---

#### ❌ Checklists / Task Lists
```markdown
- [ ] Pending task      ❌ Syntax preserved but not interactive
- [x] Completed task    ❌ Not rendered as checkboxes
```

**Solution**: Use regular unordered lists instead. Jira doesn't support interactive checkboxes through MCP.

---

#### ❌ HTML Syntax Highlighting
```markdown
​```html
<div>HTML code</div>
​```
```

**Solution**: HTML code blocks appear without syntax highlighting. Use `xml` language tag as alternative, or accept no highlighting.

---

#### ❌ Horizontal Rules
```markdown
---                 ❌ Converts to h2. (empty header)
***                 ❌ Same issue
___                 ❌ Same issue
```

**Solution**: Use Jira Wiki Markup directly: `----` (4 dashes) or avoid horizontal rules.

---

---

#### ❌ NESTED LISTS (CRITICAL LIMITATION)

**Nested Unordered Lists DO NOT WORK**
```markdown
❌ NEVER USE THIS:
- First item
  - Nested item         ❌ Will NOT render correctly
    - Deep nested       ❌ Will NOT render correctly
```

**Nested Ordered Lists DO NOT WORK**
```markdown
❌ NEVER USE THIS:
1. First item
   1. Nested A          ❌ Converts to headers (h1., h2.)
   2. Nested B          ❌ Does not work correctly
2. Second item
```

**Mixed Nested Lists (Ordered + Unordered) DO NOT WORK**
```markdown
❌ NEVER USE THIS:
1. Ordered item
   - Unordered nested   ❌ Indentation breaks
     1. Ordered nested  ❌ Does not work
```

**WHY THIS FAILS:**
- MCP preserves indentation in stored Wiki Markup (e.g., `  *` for 2 spaces)
- Jira UI ignores this indentation and renders with wrong visual markers
- Testing showed all indentation levels (1-4 spaces, tabs) fail to render properly
- Visual output shows mixed bullets (•, —, *, ∘) instead of nested hierarchy

**SOLUTION:** 
- Use ONLY flat lists (no indentation)
- For hierarchies, use numbered section headers (## 1.1, ## 1.2) with flat lists under each
- Or split into separate lists under different headers

---

#### User Mentions via Email/Username
```markdown
@user@example.com   ❌ Does not create mentions
@username           ❌ Does not create mentions
```

**Solution**: Use Jira Wiki Markup directly: `----` (4 dashes) or avoid horizontal rules.

---

---

## 🔍 Identified Custom Fields

| Field | Field ID | Type | Format | Location |
|-------|----------|------|--------|----------|
| Start date | `customfield_10015` | Date | `YYYY-MM-DD` | `additional_fields` |
| Due date | `duedate` | Date | `YYYY-MM-DD` | `additional_fields` |
| Original estimate | `timetracking.originalEstimate` | String | `1w`, `3d`, `5h`, `30m` | `fields` |
| Parent (Epic Link) | N/A | N/A | Use `mcp_jira_jira_link_to_epic` | Method call |
| Issue Links | N/A | N/A | Use `mcp_jira_jira_create_issue_link` | Method call |
| Story Points | `customfield_10016` | Number | Integer | `additional_fields` |
| Sprint | `customfield_10020` | Array | Sprint objects | `additional_fields` |

---

## ⚠️ Common Errors and Solutions

### Error 1: Cannot use `timeoriginalestimate` directly

```typescript
// ❌ INCORRECT
additional_fields: { timeoriginalestimate: 57600 }

// ✅ CORRECT
fields: { 
  timetracking: { 
    originalEstimate: "2d" 
  } 
}
```

**Solution**: Use the `timetracking` field with Jira time format (`1w`, `3d`, `5h`, `30m`).

### Error 2: ADF (Atlassian Document Format) not supported

```typescript
// ❌ INCORRECT
description: {
  "version": 1,
  "type": "doc",
  "content": [...]
}

// ✅ CORRECT
description: "# Title\n\nContent in Markdown..."
```

**Solution**: The MCP accepts Markdown, not ADF JSON.

### Error 3: Parent Assignment via additional_fields

```typescript
// ❌ INCORRECT - Does not work reliably
additional_fields: {
  parent: { key: "MJOLIT-6" }
}

// ✅ CORRECT - Use dedicated method
mcp_jira_jira_link_to_epic({
  issue_key: "MJOLIT-XX",
  epic_key: "MJOLIT-6"
})
```

**Solution**: Use `mcp_jira_jira_link_to_epic` to assign a parent/epic to an issue.

### Error 4: Components vs Labels

```typescript
// ❌ INCORRECT
components: "WEB"

// ✅ CORRECT
fields: { labels: ["WEB"] }
```

**Solution**: This project doesn't use components, only labels.

### Error 5: Multiple fields in `additional_fields` may fail together

```typescript
// ⚠️ PROBLEMATIC - May fail if incompatible
additional_fields: {
  customfield_10015: "2025-10-14",
  duedate: "2025-10-20",
  parent: { key: "MJOLIT-6" },
  timeoriginalestimate: 57600  // This will fail
}

// ✅ RECOMMENDED
// Make incremental updates or ensure all fields are compatible
```

**Solution**: Make incremental updates or remove incompatible fields like `timeoriginalestimate`.

---

## ✨ Best Practices and Recommendations

### 1. Incremental Workflow
Create the basic issue first, then update additional fields incrementally. This minimizes errors.

### 2. Validate Custom Fields
Use `mcp_jira_jira_search_fields` to identify custom fields before using them:

```typescript
mcp_jira_jira_search_fields({
  keyword: "start",
  limit: 20
})
```

### 3. Use Markdown for Descriptions
Markdown is more readable and maintainable than Jira Wiki Markup. The MCP handles conversion automatically.

### 4. Avoid Complex Nested Lists
**CRITICAL**: Nested lists (both ordered and unordered) DO NOT work correctly in Jira via MCP. Always use flat lists only. For hierarchies, use numbered section headers with flat lists under each section.

### 5. Reference Issues Naturally
Just type issue keys like `MJOLIT-6` in the description. Jira automatically converts them to clickable links.

### 5. Use Correct Methods for Relationships

Parent/Epic links and issue links require dedicated methods:
- Use `mcp_jira_jira_link_to_epic` for parent/epic assignment
- Use `mcp_jira_jira_create_issue_link` for blocking, relating, duplicating, etc.
- Don't try to set these via `fields` or `additional_fields`

### 6. Test Before Production
Create test issues to validate the workflow before using it for real tasks.

### 7. Use Checklists for Task Tracking
Use `- [ ]` and `- [x]` for task lists. They work correctly and are very useful for tracking subtasks.

---

## 📋 Complete Example: Creating a Full Task

```typescript
// Step 1: Create basic issue with mixed Markdown + Wiki Markup
const issue = await mcp_jira_jira_create_issue({
  project_key: "MJOLIT",
  summary: "Implement User Authentication",
  issue_type: "Task",
  assignee: "manu.overa@gmail.com",
  description: `
# User Authentication Implementation

{panel:title=(i) Overview|borderColor=#0052CC|bgColor=#DEEBFF}
(i) Implement secure user authentication using JWT tokens.
This is a critical security feature.
{panel}

## Tasks
* Setup authentication middleware
* Create login endpoint
* Create registration endpoint
* Add password hashing

{panel:title=(!) Important Notes|borderColor=#FF8B00|bgColor=#FFFAE6}
(!) All passwords must be hashed using bcrypt
(!) JWT tokens expire after 24 hours
{panel}

## Technical Requirements
1. Use bcrypt for password hashing
2. JWT token expiration: 24h
3. Implement refresh token mechanism

## Related Issues
* Depends on: MJOLIT-5
* Blocks: MJOLIT-8

## Color-Coded Status
* {color:green}Completed{color}: Research phase
* {color:orange}In Progress{color}: Design phase
* {color:red}Blocked{color}: Waiting for API keys

## Code Example
​\`\`\`typescript
interface AuthToken {
  userId: string;
  exp: number;
}
​\`\`\`

bq. Note: This implementation follows OAuth 2.0 best practices
bq. as documented in RFC 6749.

{panel:title=(/) Success Criteria|borderColor=#00875A|bgColor=#E3FCEF}
(/) All tests pass
(/) Security audit completed
(/) Documentation updated
{panel}
  `
});

// Step 2: Update labels and priority
await mcp_jira_jira_update_issue({
  issue_key: issue.key,
  fields: {
    labels: ["WEB"],
    priority: { name: "High" }
  }
});

// Step 3: Add dates and epic link
await mcp_jira_jira_update_issue({
  issue_key: issue.key,
  fields: {},
  additional_fields: {
    customfield_10015: "2025-10-15",
    duedate: "2025-10-22"
  }
});

// Step 3a: Link to epic
await mcp_jira_jira_link_to_epic({
  issue_key: issue.key,
  epic_key: "MJOLIT-6"
});

// Step 3b: Create blocking relationship
await mcp_jira_jira_create_issue_link({
  link_type: "Blocks",
  inward_issue_key: "MJOLIT-5",  // This issue blocks our new issue
  outward_issue_key: issue.key,
  comment: "Dependencies must be resolved first"
});

// Step 4: Add time estimate
await mcp_jira_jira_update_issue({
  issue_key: issue.key,
  fields: {
    timetracking: {
      originalEstimate: "3d"
    }
  }
});
```

---

## 🐛 Debug Logging and Troubleshooting

## Debug logging and how to read logs

To troubleshoot the Atlassian MCP server (Jira/Confluence) used by this project, enable verbose logging and read it directly in VS Code:

- Enable verbose logs via the environment file used by Docker:
	- File: `/.settings/mcp-atlassian.env`
	- Ensure these variables are present:
		- `MCP_VERBOSE=true`
		- `MCP_VERY_VERBOSE=true`
		- `MCP_LOGGING_STDOUT=true`
	- The MCP server is started via `.vscode/mcp.json` using `--env-file`, so these values are picked up automatically.

## 🐛 Debug Logging and Troubleshooting

To troubleshoot the Atlassian MCP server (Jira/Confluence) used by this project, enable verbose logging and read it directly in VS Code:

### Enable Verbose Logs

Via the environment file used by Docker:
- File: `/.settings/mcp-atlassian.env`
- Ensure these variables are present:
  - `MCP_VERBOSE=true`
  - `MCP_VERY_VERBOSE=true`
  - `MCP_LOGGING_STDOUT=true`
- The MCP server is started via `.vscode/mcp.json` using `--env-file`, so these values are picked up automatically.

### Read Logs in VS Code

1. Open: **View → Output**
2. Select the MCP server output channel (may appear as "MCP Tools" or similar)
3. Restart the MCP session if needed to see startup logs
4. With the variables above, you should see DEBUG-level messages, including request traces and masked custom headers
5. Optionally, run the container manually to view stdout directly

### Disable Debug Logging

Set `MCP_VERBOSE=false` and `MCP_VERY_VERBOSE=false` (or remove those lines) in `/.settings/mcp-atlassian.env`.

---

## 📚 Additional Resources

- **Test Issues Created**:
  - MJOLIT-72: Wiki Markup format test
  - MJOLIT-73: Markdown format test and validation
  - MJOLIT-74: Comprehensive formatting test (Markdown + Wiki Markup mix)
  - MJOLIT-75: Panel types and colors test
- **Reference Issues**:
  - MJOLIT-10: Example of well-formatted issue with checklists
  - MJOLIT-6: Parent epic for testing

---

## 🎯 Quick Reference: Markdown → Jira Conversion Table

| Markdown | Jira Wiki Markup | Works? | Notes |
|----------|------------------|--------|-------|
| `# Title` | `h1. Title` | ✅ | Perfect conversion |
| `## Section` | `h2. Section` | ✅ | Perfect conversion |
| `**bold**` | `*bold*` | ✅ | Perfect conversion |
| `*italic*` | `_italic_` | ✅ | Perfect conversion |
| `***bold+italic***` | `*_text_*` | ❌ | Use Wiki Markup directly |
| `` `code` `` | `{{code}}` | ✅ | Perfect conversion |
| `- item` | `* item` | ✅ | Flat lists only |
| `  - nested` | `  * nested` | ❌ | DO NOT USE - Nested lists don't work |
| `1. item` | `# item` | ✅ | Flat lists only |
| `   1. nested` | `## nested` | ❌ | DO NOT USE - Converts to headers |
| `- [ ] task` | `* [ ] task` | ❌ | DO NOT USE - Not interactive |
| `[text](url)` | `[text\|url]` | ✅ | Perfect conversion |
| `MJOLIT-6` | `MJOLIT-6` | ✅ | Auto-links in Jira |
| `` ```js `` | `{code:js}` | ✅ | Perfect conversion |
| `` ```html `` | `{code:html}` | ❌ | No syntax highlighting |
| `[~accountid:ID]` | `[~accountid:ID]` | ✅ | User mentions work! |
| `bq. quote` | `bq. quote` | ✅ | Blockquotes work! |
| `{color:red}text{color}` | `{color:red}text{color}` | ✅ | Colors work! |
| `(!)` `(i)` `(y)` | `(!)` `(i)` `(y)` | ✅ | Icons work! |
| `{panel}text{panel}` | `{panel}text{panel}` | ✅ | Panels work! |
| `---` | `----` | ❌ | Converts to h2 |
| `@user` | N/A | ❌ | Use accountid format |

---

*Last updated: October 2025*  
*Based on testing with Atlassian MCP and Jira Cloud*



