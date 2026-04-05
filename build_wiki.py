import markdown
import sys
import os

readme_path = 'README.md'
if not os.path.exists(readme_path):
    print("README.md not found!")
    sys.exit(1)

with open(readme_path, 'r', encoding='utf-8') as f:
    content = f.read()

trends_text = """

---

## Agent Skills Trends & Capabilities (2026)

In 2026, the AI agent ecosystem has dramatically shifted from reactive chat interfaces to **autonomous, goal-driven systems** executing end-to-end multi-step workflows. This period, often called the "Agent Leap", is defined by a move toward end-to-end execution of complex tasks.

### 1. Autonomous Execution & Goal Orientation
Modern agents move past simple "prompt-response" models. They break down broad, abstract objectives into multi-step strategic plans, weighing trade-offs and executing sequences independently over long horizons.

### 2. Multi-Agent Orchestration
Complex repositories and operations are managed by specialized agent teams (e.g., a documentation agent, a testing agent, and a coding agent). These teams are coordinated by "manager" agents that synthesize deliverables and resolve conflicts securely.

### 3. Direct Access & Agentic IDEs
Instead of just returning textual code solutions, AI agents are increasingly given deep, authorized access to terminals, environments, and filesystems through protocols like Model Context Protocol (MCP). Environments like Cursor, Windsurf, Copilot, and Claude Code have evolved into "Agentic IDEs" where agents natively execute commands and monitor telemetry in real-time.

### 4. Multimodality & "Deep Research"
Deep Research agents natively parse not just text, but images, video, and audio data. They browse the live internet dynamically, executing javascript, passing captchas, mapping sites, and verifying sources structurally instead of relying solely on older web scraping pipelines.

### 5. Invisible Enterprise Integration
Capabilities are becoming embedded inside core enterprise workflows (CRMs, task boards, internal portals) enabling low-code/no-code users to deploy complex problem-solving agents right where the data lives.
"""

content += trends_text

content_with_toc = "[TOC]\n\n" + content
html_content = markdown.markdown(content_with_toc, extensions=['toc', 'tables', 'fenced_code'])

start_toc = html_content.find('<div class="toc">')
end_toc = html_content.find('</div>', start_toc) + 6

if start_toc != -1:
    toc_html = html_content[start_toc:end_toc]
    body_html = html_content[:start_toc] + html_content[end_toc:]
else:
    toc_html = "<div class='toc'><ul><li><a href='#'>Content</a></li></ul></div>"
    body_html = html_content

toc_html = toc_html.replace('class="toc"', 'class="sidebar-toc" id="toc"')

template = f"""<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Agent Skills - Wiki</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="top-bar">
        <div class="logo">Awesome Agent Skills</div>
        <div style="display:flex; align-items:center;">
            <button id="theme-toggle" class="theme-toggle" aria-label="Toggle Theme" style="margin-right: 16px;">
                <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </button>
            <button id="menu-toggle" class="menu-toggle" aria-label="Toggle Menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
    </header>

    <div class="wiki-layout">
        <nav class="sidebar" id="sidebar">
            {toc_html}
        </nav>
        <main class="content">
            <div class="markdown-body">
                {body_html}
            </div>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>"""

os.makedirs('docs', exist_ok=True)
with open('docs/index.html', 'w', encoding='utf-8') as f:
    f.write(template)

print("Generated docs/index.html successfully.")
