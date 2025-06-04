
# 🏀 Arbiter Scoreboard Widget

A fully embeddable and customizable scoreboard widget built with **React + Vite**, allowing you to display events by sport, date, and filters. Designed for simple integration into any website.


https://arbiter-widget.vercel.app/

You can visit https://arbiter-widget.vercel.app/ to get a general idea of how the widget is distributed to clients.This Widget Manager app, built with Next.js, empowers clients to easily customize and generate their own widgets also enforces that clients can only generate tokens for the schools they have been granted access to. As administrators, we retain full control over which schools and widgets each client can access, ensuring tailored and secure deployments. The system is functional but still has plenty of room for future improvements and feature expansion.

---

## 📦 Installation (for Consumers)

1. **Include the script in your HTML page:**

```html
<script src="https://arbiter-widget.vercel.app/arbiter-scoreboard.iife.js"></script>
```

2. **Add a target container element:**

```html
<div id="arbiter-scoreboard"></div>
```

3. **Initialize the widget:**

```js
ArbiterScoreboard.init({
  target: "#arbiter-scoreboard",
  token: "your-school-token",
});
```

ℹ️ Info:
You can use "dummy" as the token value during development or testing. This will display the widget with dummy data, allowing you to preview layout, themes, and configuration options without needing a live API token.

Example:

```js
ArbiterScoreboard.init({
  target: "#arbiter-scoreboard",
  token: "dummy",
});
```

---

## ⚙️ Configuration Options

The `init` method supports three keys: `target`, `token`, and optional `options` and `data`.

### 🎨 UI Customization (`options`)

| Option            | Type                                               | Description                                        |
|------------------|----------------------------------------------------|----------------------------------------------------|
| `header`          | `"top"` \| `"bottom"` \| `"left"` \| `"right"` \| `false` | Position of the header or sport selector.          |
| `theme`           | `"light"` \| `"dark"`                              | Switch between light and dark themes.              |
| `vertical`        | `boolean`                                          | Use vertical layout mode.                          |
| `arbiterLogo`     | `"mini"` \| `"full"` \| `boolean`                  | Controls display of the Arbiter logo.              |
| `location`        | `boolean`                                          | Show location info for each event.                 |
| `primaryColor`    | `string` (hex)                                     | Main color of the widget.                          |
| `secondaryColor`  | `string` (hex)                                     | Secondary UI color.                                |
| `thirdColor`      | `string` (hex)                                     | Accent or tertiary color.                          |
| `backgroundColor` | `string` (hex)                                     | Background color of the scoreboard container.      |             |
| `teamLogoFilter`  | `"colored"` \| `"white"` \| `"black"` \| `"none"` | Controls how team logos are styled visually.       |

---

### 🔎 Event Filtering (`data`)

You can control which events appear in the widget using optional filters:

```js
ArbiterScoreboard.init({
  target: "#arbiter-scoreboard",
  token: "your-school-token",
  options: {
    header: "right",
    primaryColor: "#424530",
    secondaryColor: "#A58E74",
    teamLogoFilter: "black",
    thirdColor: "#E09132",
    arbiterLogo: "full",
  },
  data: {
    genderId: 1,
    levelId: 1,
    sportId: [2, 3, 6, 8],
  },
});
```

---

## 🧪 Examples

```js
ArbiterScoreboard.init({ target: "#arbiter-scoreboard", token: "dummy" });

ArbiterScoreboard.init({
  target: "#arbiter-scoreboard-bottom",
  token: "dummy",
  options: {
    header: "bottom",
    primaryColor: "#201c27",
    secondaryColor: "#8aa191",
    thirdColor: "#01573D",
    arbiterLogo: "full",
  },
});

ArbiterScoreboard.init({
  target: "#arbiter-scoreboard-left",
  token: "dummy",
  options: {
    header: "left",
    primaryColor: "#001736",
    secondaryColor: "#00214c",
    theme: "dark",
    thirdColor: "#0054d3",
    teamLogoFilter: "white",
  },
});

ArbiterScoreboard.init({
  target: "#arbiter-scoreboard-right",
  token: "dummy",
  options: {
    header: "right",
    primaryColor: "#424530",
    secondaryColor: "#A58E74",
    teamLogoFilter: "black",
    thirdColor: "#E09132",
  },
});

ArbiterScoreboard.init({
  target: "#arbiter-scoreboard-vertical",
  token: "dummy",
  options: {
    vertical: true,
  },
});
```

---

## 👨‍💻 Development & Contribution

To work on this project locally:

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/) or [pnpm](https://pnpm.io/)

### 📥 Clone & Setup

```bash
git clone git@github.com:bayuw101/scoreboard-widget.git
cd scoreboard-widget
bun install        # or `npm install` or `pnpm install`
```

### 🏗️ Run in Development Mode

```bash
bun run dev            # or `npm run dev` or `pnpm dev`
```

This starts a Vite dev server with hot module reloading.

### 🧪 Run Live Server

```bash
bunx serve dist            # or `npx serve dist` 
```

Serves the static files inside the `dist/` directory. Starts a local server (usually at `http://localhost:3000`) so you can preview your production build.


### 🛠️ Build for Production

```bash
bun run build          # or `npm run build` or `pnpm build`
```

The production-ready widget will be output to the `dist/` folder.

⚠️ Running `bun run build` will reset the `dist/` directory, which means any existing files inside it — including custom edits like index.html or manually added assets — will be deleted and replaced by the new build output. please back them up before running the build command to avoid losing important data.

---

## 🧱 Built With

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 💨 [Tailwind CSS](https://tailwindcss.com/)
- 🎠 [React Slick](https://react-slick.neostack.com/)


---

## 🙋 Support

For help, questions, or bug reports, please open an [issue on GitHub](https://github.com/bayuw101/scoreboard-widget/issues).