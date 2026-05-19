const copy = {
  en: {
    meta: {
      title: "Piggly — Allowances, finally under control.",
      description: "One wallet per kid. Automatic deposits. Shared with your partner."
    },
    hero: {
      headline: "Allowances, finally under control.",
      sub: "One wallet per kid. Automatic deposits. Shared with your partner."
    },
    cta: "Get started free",
    problem: "Keeping track of allowances is a mess. Piggly keeps it simple.",
    showcase: {
      title: "See it in action",
      sub: "A quick look at what Piggly looks like for you and for your kids.",
      caption1: "A wallet for each kid, side by side.",
      caption2: "Balance, deposits, and full transaction history in one place.",
      caption3: "A PIN-protected view your kid can open on their own."
    },
    feature1: {
      title: "One wallet per kid",
      desc: "Each child has their own balance, history, and deposit schedule."
    },
    feature2: {
      title: "Automatic deposits",
      desc: "Set the amount and frequency once. Piggly credits it automatically."
    },
    feature3: {
      title: "Shared with your partner",
      desc: "Invite your partner by email. Both of you stay in sync."
    },
    feature4: {
      title: "A view just for them",
      desc: "Each kid gets their own PIN-protected view of their balance and history."
    },
    footer: {
      link: "Open the app",
      tagline: "Made with ♥ for my kids"
    }
  },
  pt: {
    meta: {
      title: "Piggly — Mesada finalmente sob controle.",
      description: "Uma carteira por filho. Depósitos automáticos. Compartilhe com seu parceiro."
    },
    hero: {
      headline: "Mesada finalmente sob controle.",
      sub: "Uma carteira por filho. Depósitos automáticos. Compartilhe com seu parceiro."
    },
    cta: "Comece grátis",
    problem: "Controlar mesada é sempre uma bagunça. O Piggly simplifica tudo.",
    showcase: {
      title: "Veja o Piggly em ação",
      sub: "Uma olhada rápida em como o Piggly fica pra você e pros seus filhos.",
      caption1: "Uma carteira pra cada filho, lado a lado.",
      caption2: "Saldo, depósitos e histórico completo num só lugar.",
      caption3: "Uma tela com PIN que seu filho abre sozinho."
    },
    feature1: {
      title: "Uma carteira por filho",
      desc: "Cada filho tem seu próprio saldo, histórico e frequência de depósito."
    },
    feature2: {
      title: "Depósitos automáticos",
      desc: "Configure o valor e a frequência uma vez. O Piggly credita sozinho."
    },
    feature3: {
      title: "Compartilhe com seu parceiro",
      desc: "Convide pelo e-mail. Os dois ficam sempre sincronizados."
    },
    feature4: {
      title: "Uma tela só pra eles",
      desc: "Cada filho tem sua própria tela com PIN para ver saldo e histórico."
    },
    footer: {
      link: "Abrir o app",
      tagline: "Feito com ♥ pros meus filhos"
    }
  }
};

const resolve = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

const apply = (lang) => {
  const dict = copy[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = resolve(dict, el.dataset.i18n);
    if (typeof value !== "string") return;
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else if (el.tagName === "TITLE") {
      el.textContent = value;
      document.title = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
};

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang]");
  if (btn) apply(btn.dataset.lang);
});

apply("en");
