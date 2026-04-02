# Dev-Detective 🔍 — GitHub User Search App

A clean, responsive GitHub profile search app that lets you look up any developer in the world, fetch their profile data, and explore their top repositories — in real time. Built with vanilla HTML, CSS, and JavaScript using the GitHub REST API.

🔗 **Live Demo:** [https://week-3-mission3.vercel.app/](https://week-3-mission3.vercel.app/)

---

## 📸 Screenshot

![image alt](https://github.com/Harshit-700/Week-3-mission3/blob/4dbcc3d766bca29c6065f8c7a1b96e0e95dd4cfd/Screenshot%20(417).png).

---

## 📁 Project Structure

```
dev-detective/
├── index.html       # Main HTML structure
├── style.css        # All styling + responsive layout
└── script.js        # GitHub API calls, async/await logic, DOM rendering
```

---

## ✨ Features

- **GitHub User Search** — Type any GitHub username and hit Enter or click Search
- **Profile Card** — Displays avatar, name, bio, and account creation date
- **Top 5 Repositories** — Fetches and lists the user's repos with clickable links to GitHub
- **Human-Readable Dates** — Formats raw ISO date strings (e.g. `2023-01-25T12:00:00Z`) into readable format (e.g. `Wed Jan 25 2023`)
- **Loading Spinner** — Animated spinner shown while data is being fetched
- **Error Handling** — Shows a clean "User not found" message on 404; app never crashes
- **Keyboard Support** — Press Enter to trigger search without clicking the button
- **Responsive Design** — Works across desktop, tablet, and mobile screens
- **No Build Tools** — Pure HTML/CSS/JS, zero dependencies, no frameworks

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dev-detective.git
cd dev-detective
```

### 2. Open in browser

Just open `index.html` directly — no server or build step required.

```bash
# Or use VS Code Live Server / any static server
npx serve .
```

---

## 🧩 Sections

| Section | Description |
|---------|-------------|
| **Header** | App title `Dev-Detective 🔍` centered on a dark GitHub-themed background |
| **Search Bar** | Text input + Search button; also responds to Enter key |
| **Profile Card** | Shows avatar, display name, bio, join date, and a "View Profile" button |
| **Repo List** | Top 5 repos displayed as cards with repo name links and "View" buttons |
| **Error / Loading States** | Spinner while fetching; red error message if user not found |

---

## 🎨 Design Tokens

| Property | Value |
|----------|-------|
| Primary Font | System default (sans-serif) |
| Background | `rgb(13, 17, 23)` — GitHub dark |
| Text Color | `whitesmoke` |
| Accent / Button | `#2ea043` — GitHub green |
| Button Hover | `#26cd44` |
| Repo Card Border | `gray` |
| Link Hover | `#58a6ff` — GitHub blue |
| Link Visited | `#72a2da` |
| Error Text | `red` |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 900px` | Profile card and repo list at `50%` width, centered |
| `≤ 900px` | Profile card and repo list expand to `70%` width |
| `≤ 600px` | Full `90%` width; heading font shrinks to `22px` |

---

## ⚙️ API Used

**GitHub REST API** — No authentication required for public data.

| Endpoint | Purpose |
|----------|---------|
| `https://api.github.com/users/{username}` | Fetch user profile (name, bio, avatar, dates, repos URL) |
| `{userData.repos_url}` | Fetch list of user's public repositories |

---

## 🔒 Error Handling

| Scenario | Behavior |
|----------|----------|
| Empty input | Shows `"Please enter a username"` message |
| User not found (404) | Shows `"404 - User not found"` error in red |
| User has no repositories | Shows `"No repositories found"` message |
| Network / other error | Caught by `try/catch`; error message displayed gracefully |

---

## 🧠 Core JavaScript Concepts Used

| Concept | Usage |
|---------|-------|
| `async / await` | Fetching user and repo data from GitHub API |
| `fetch()` | Making HTTP GET requests to the GitHub REST API |
| `try / catch` | Graceful error handling for failed or 404 responses |
| DOM Manipulation | Dynamically rendering profile card and repo items |
| Event Listeners | `keypress` on Enter key to trigger search |
| `Date` formatting | Converting ISO timestamps to human-readable strings |

---

## 🛠️ Built With

- **HTML5** — Semantic structure and layout
- **CSS3** — Flexbox, media queries, keyframe animations (spinner), transitions
- **Vanilla JavaScript** — Async/await, Fetch API, DOM manipulation
- **[GitHub REST API](https://docs.github.com/en/rest)** — Live developer data (no API key needed)
- **[Vercel](https://vercel.com/)** — Deployment

---

## 💡 Future Improvements

- Show follower / following / star counts on profile card
- Sort repos by stars or last updated
- Add dark/light mode toggle
- Paginate beyond top 5 repositories

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
