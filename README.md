# Portfolio (static site)

Plain HTML, CSS and JavaScript. Ready for **GitHub Pages**.

## Publish on GitHub Pages

1. **Create a new repository** on GitHub (for example `portfolio`). Do not add a README if you already have files locally.

2. **Push this folder** (replace `YOUR_USER` and `portfolio`):

   ```bash
   cd /path/to/roblox-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/portfolio.git
   git push -u origin main
   ```

3. **Turn on Pages:** In the repo on GitHub go to **Settings → Pages**.

4. Under **Build and deployment → Source**, choose **Deploy from a branch**.

5. Select branch **`main`** and folder **`/ (root)`**, then **Save**.

6. After a minute or two the site is live at:

   `https://YOUR_USER.github.io/portfolio/`

   (If the repo name is `YOUR_USER.github.io`, the site is `https://YOUR_USER.github.io/`.)

## Files

| File            | Role                          |
|-----------------|-------------------------------|
| `index.html`    | Page structure                |
| `styles.css`    | Styles                        |
| `animations.js` | Scroll reveals and footer year |
| `.nojekyll`     | Tells GitHub not to use Jekyll (avoids odd processing) |

## Local preview

Open `index.html` in a browser, or run a small server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
