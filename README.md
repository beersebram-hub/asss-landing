# ASSS — Smoke Test Landing Page

Static landing page for the ASSS smoke test, built for the Science-based Entrepreneurship course at Utrecht University (2026).

## Purpose

Smoke test to validate demand for ASSS (Automated Smart Sample Storage System). Tracks "Request a demo" clicks to measure real interest.

## Run locally

Open `index.html` in your browser. No build step needed.

## Deploy to GitHub Pages

1. Push to a GitHub repository
2. Settings → Pages → source: main → / (root)
3. Live at `https://<username>.github.io/<repo-name>/`

## Check smoke test data

Open browser console and run:
`JSON.parse(localStorage.getItem('asss_clicks'))`
