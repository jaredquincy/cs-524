# CS 524 Website — Local Setup

## Prerequisites
- macOS, Windows, or Linux with a terminal
- Either Python 3 or Node.js (pick one)

## Steps
1. Get the files (clone or unzip) and move into the `ai-for-science` folder with `index.html`.
   ```bash
   cd path/to/ai-for-science
   ```
2. Start a simple server:
   - Python: `python3 -m http.server 8000`
   - Node: `npx http-server . -p 8000`
3. Keep the terminal running and visit `http://localhost:8000` in any browser. Refresh after edits.

## Tips
- Port busy? Swap `8000` for another port and use that URL.
- Stop the server with `Ctrl+C` when finished.
