# Data Science DevOps Toolkit (mini-app)

This branch (feature/devops-ds) contains a lightweight interactive mini-application that presents a compact, 2026-relevant set of:

- Data types important for Data Scientists
- API styles and common frameworks
- DevOps / infra tools commonly used in ML/DS stacks

How to preview

1. Open index.html in a browser (static preview). No build required for the demo.
2. Or serve locally: python -m http.server 8000 (from repo root) and open http://localhost:8000

What was added

- index.html — UI scaffold
- src/toolkit.js — compact dataset with cards (dataTypes, apis, devops)
- src/app.js — minimal renderer + search + filters
- src/styles.css — minimal styles

Next suggested steps

- If you want, I can open a PR from feature/devops-ds into your default branch.
- Expand cards with examples (snippets, OpenAPI YAML) or add demos/fastapi_example.py if you want runnable examples.

If you want a PR — tell me and I will open one with a description and checklist.
