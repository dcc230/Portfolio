# Dean Cunningham | Electrical Engineering Portfolio

Personal portfolio site for Dean Cunningham, an undergraduate electrical engineering student at Lehigh University.

## About the site

The portfolio is a static website with a focused, editorial layout. It is designed to communicate:

- Dean's background as an undergraduate electrical engineering student
- Interest in circuits, systems, testing, and practical problem solving
- A hands-on approach to learning and building
- Contact and professional networking links

The site uses a restrained engineering-inspired visual system: structured typography, a technical monospace label style, a dark ink section, and crimson accent color.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, content, navigation, and contact links |
| `styles.css` | Responsive layout, typography, colors, and visual styling |
| `script.js` | Scroll behavior and active navigation state |

## Run locally

Because this is a static site, it does not require a build step or framework.

1. Open `index.html` directly in a browser, or
2. Start a local server from the repository root:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Publish with GitHub Pages

GitHub Pages serves the existing `index.html` file directly.

1. Push this repository to GitHub.
2. Open the repository's **Settings** tab.
3. Select **Pages** in the **Code and automation** section.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Click **Save**.

GitHub will provide the published URL after the first deployment. Future pushes to `main` will update the site automatically.

## Before publishing

Replace the placeholder contact destinations in `index.html`:

- Change `dean.cunningham@example.com` to Dean's real email address.
- Change the LinkedIn URL to Dean's actual profile.
- Replace the externally hosted image URLs with personal project or portrait images if desired.

## Notes

The README documents the project, but GitHub Pages does not use the README as the website homepage. The public site is generated from `index.html` and its linked CSS and JavaScript files in the repository root.