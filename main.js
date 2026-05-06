const timeline = [
  {
    title: "Dashboard-first workflow",
    detail:
      "A clean interface built to keep content planning, analytics, and audience signals in one place."
  },
  {
    title: "Google Trends approval",
    detail:
      "Early access will help Dito Dashboard show what is rising now and keep trend research inside the product."
  },
  {
    title: "AI-assisted decisions",
    detail:
      "The AI layer is designed to support planning, not replace the workspace or hide the data."
  },
  {
    title: "Production scope",
    detail:
      "The main SaaS is already running in pt-BR production while this beta page previews the next phase."
  }
];

const mount = document.querySelector("#timeline");

if (mount) {
  mount.innerHTML = timeline
    .map(
      (item, index) => `
        <article class="timeline-item">
          <div class="timeline-number">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
}
