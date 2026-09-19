import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm"

const POSTS = [
  {
    title: "Offline-first data on a factory floor",
    url: "/blog/offline-first-erp/",
    tags: ["Systems", "Engineering"],
    date: "2026-09-12",
    summary: "How sync, retries, and idempotency keep operations moving when the network drops.",
  },
  {
    title: "Building a form product from scratch",
    url: "/blog/building-simple-form/",
    tags: ["Engineering"],
    date: "2026-08-28",
    summary: "Dynamic fields, validation, submissions, and analytics as one system.",
  },
  {
    title: "SSR, SSG, and shipping Recipe Reveal",
    url: "/blog/recipe-reveal-nextjs/",
    tags: ["Engineering"],
    date: "2026-08-10",
    summary: "A Next.js app is a rendering decision plus a production deploy.",
  },
  {
    title: "One prompt, three models",
    url: "/blog/multi-provider-llm/",
    tags: ["AI", "Engineering"],
    date: "2026-07-22",
    summary: "Running the same question across providers, then synthesizing an answer.",
  },
]

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

function toast(message) {
  let el = document.querySelector("[data-toast]")
  if (!el) {
    el = document.createElement("div")
    el.className = "toast"
    el.dataset.toast = ""
    el.setAttribute("role", "status")
    document.body.append(el)
  }
  el.textContent = message
  el.classList.add("show")
  clearTimeout(toast.t)
  toast.t = setTimeout(() => el.classList.remove("show"), 1800)
}

function initTheme() {
  const root = document.documentElement
  const button = document.querySelector("[data-theme-toggle]")
  if (!button) return

  const set = (theme) => {
    root.dataset.theme = theme
    localStorage.setItem("theme", theme)
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme")
  }

  button.addEventListener("click", () => {
    set(root.dataset.theme === "dark" ? "light" : "dark")
  })
}

function initCopy() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy") || ""
      try {
        await navigator.clipboard.writeText(value)
        toast("Copied")
      } catch {
        toast("Copy failed")
      }
    })
  })
}

function initExpand() {
  document.querySelectorAll("[data-expand]").forEach((button) => {
    const id = button.getAttribute("data-expand")
    const panel = document.getElementById(id)
    if (!panel) return
    button.addEventListener("click", () => {
      const open = panel.classList.toggle("open")
      button.setAttribute("aria-expanded", String(open))
      button.textContent = open ? "Hide details" : "Show details"
    })
  })
}

function initFilters() {
  const buttons = document.querySelectorAll("[data-filter]")
  const posts = document.querySelectorAll("[data-tags]")
  if (!buttons.length) return

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.setAttribute("aria-pressed", "false"))
      button.setAttribute("aria-pressed", "true")
      const tag = button.getAttribute("data-filter")
      posts.forEach((post) => {
        const tags = (post.getAttribute("data-tags") || "").split(",")
        post.hidden = tag !== "all" && !tags.includes(tag)
      })
    })
  })
}

function initSearch() {
  let dialog = document.querySelector("[data-search]")
  if (!dialog) {
    dialog = document.createElement("div")
    dialog.className = "dialog"
    dialog.dataset.search = ""
    dialog.innerHTML = `
      <div class="dialog-panel" role="dialog" aria-modal="true" aria-label="Search writing">
        <input type="search" placeholder="Search writing…" data-search-input />
        <ul data-search-results></ul>
      </div>
    `
    document.body.append(dialog)
  }

  const input = dialog.querySelector("[data-search-input]")
  const results = dialog.querySelector("[data-search-results]")
  const openers = document.querySelectorAll("[data-search-open]")
  let active = 0

  const render = (query = "") => {
    const q = query.trim().toLowerCase()
    const matches = POSTS.filter((post) =>
      `${post.title} ${post.summary} ${post.tags.join(" ")}`.toLowerCase().includes(q)
    )
    if (!matches.length) {
      results.innerHTML = `<li class="dialog-empty">No writing matches.</li>`
      return
    }
    results.innerHTML = matches
      .map(
        (post, index) => `
        <li>
          <a href="${post.url}" class="${index === 0 ? "active" : ""}">
            <strong>${post.title}</strong>
            ${post.summary}
          </a>
        </li>`
      )
      .join("")
    active = 0
  }

  const open = () => {
    dialog.classList.add("open")
    render("")
    input.value = ""
    input.focus()
  }

  const close = () => {
    dialog.classList.remove("open")
  }

  openers.forEach((button) => button.addEventListener("click", open))
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close()
  })
  input.addEventListener("input", () => render(input.value))

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase()
    if ((event.metaKey || event.ctrlKey) && key === "k") {
      event.preventDefault()
      dialog.classList.contains("open") ? close() : open()
    }
    if (event.key === "Escape") close()
    if (!dialog.classList.contains("open")) return
    const links = [...results.querySelectorAll("a")]
    if (event.key === "ArrowDown") {
      event.preventDefault()
      active = (active + 1) % links.length
    }
    if (event.key === "ArrowUp") {
      event.preventDefault()
      active = (active - 1 + links.length) % links.length
    }
    links.forEach((link, index) => link.classList.toggle("active", index === active))
    if (event.key === "Enter" && links[active]) links[active].click()
  })
}

function initMotion() {
  if (reduceMotion) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = "1"
      el.style.transform = "none"
    })
    return
  }

  inView(".reveal", (element) => {
    animate(element, { opacity: [0, 1], y: [20, 0] }, { duration: 0.35, easing: "ease-out" })
  })

  document.querySelectorAll("[data-stagger]").forEach((group) => {
    inView(group, () => {
      animate(
        group.querySelectorAll(":scope > *"),
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.35, delay: stagger(0.05), easing: "ease-out" }
      )
    })
  })
}

function initShare() {
  document.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", async () => {
      const data = { title: document.title, url: location.href }
      try {
        if (navigator.share) {
          await navigator.share(data)
          return
        }
        await navigator.clipboard.writeText(data.url)
        toast("Link copied")
      } catch {
        toast("Share cancelled")
      }
    })
  })
}

function initProgress() {
  const article = document.querySelector(".article")
  const pill = document.querySelector("[data-progress]")
  if (!article || !pill) return

  const label = pill.querySelector("[data-progress-label]")
  const headings = [...article.querySelectorAll("h2")]

  const update = () => {
    const scrolled = window.scrollY + 120
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0
    pill.style.setProperty("--p", p)
    pill.classList.toggle("show", window.scrollY > 240)
    const current = [...headings].reverse().find((h) => h.offsetTop <= scrolled)
    if (label) label.textContent = current ? current.textContent : "Introduction"
  }

  window.addEventListener("scroll", update, { passive: true })
  update()
}

initTheme()
initCopy()
initExpand()
initFilters()
initSearch()
initMotion()
initShare()
initProgress()
