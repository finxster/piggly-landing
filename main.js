const copy = {
  en: {
    meta: {
      title: "Piggly — Allowances, now with wishes.",
      description: "One wallet per kid. Automatic deposits. Kids set wishes and Piggly does the math."
    },
    hero: {
      headline: "Allowances, now with wishes.",
      sub: "Kids set wishes. Piggly does the math — and shows them exactly how many weeks of allowance it'll take to get there."
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
    wishes: {
      title: "A Kid View built around wishes",
      sub: "Kids pick what they're saving for. Piggly shows the progress, the math, and the day it finally clicks.",
      caption1: "Wishes-first home with a tappable balance card.",
      caption2: "A friendly calendar marks the day the wallet crosses the finish line. ⭐",
      caption3: "Adding wishes is free; deleting needs the parent PIN."
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
      title: "Wishes with a deadline",
      desc: "Add a wish with an emoji and a price tag. The progress bar fills with every deposit; a calendar marks the day the wallet crosses the finish line."
    },
    feature5: {
      title: "Parent PIN on delete",
      desc: "Kids can dream big without breaking things. Adding wishes is free; deleting them needs the parent PIN — the same one that exits Kid View."
    },
    footer: {
      link: "Open the app",
      tagline: "Made with ♥ for my kids"
    }
  },
  pt: {
    meta: {
      title: "Piggly — Mesada, agora com desejos.",
      description: "Uma carteira por filho. Depósitos automáticos. A criança escolhe o desejo e o Piggly faz a conta."
    },
    hero: {
      headline: "Mesada, agora com desejos.",
      sub: "A criança escolhe o desejo. O Piggly faz a conta — e mostra exatamente quantas semanas de mesada faltam pra chegar lá."
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
    wishes: {
      title: "Um Modo Criança feito pros desejos",
      sub: "A criança escolhe o que quer juntar. O Piggly mostra o progresso, a conta e o dia em que finalmente dá.",
      caption1: "Tela inicial com os desejos e o saldo num cartão clicável.",
      caption2: "Um calendário marca o dia em que o saldo cruza a linha de chegada. ⭐",
      caption3: "Adicionar desejos é livre; apagar exige o PIN dos pais."
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
      title: "Desejos com data",
      desc: "Adicione um desejo com emoji e valor. A barra de progresso enche a cada depósito; um calendário marca o dia em que o saldo cruza a linha de chegada."
    },
    feature5: {
      title: "PIN dos pais pra apagar",
      desc: "A criança pode sonhar alto sem quebrar nada. Adicionar desejos é livre; apagar exige o PIN dos pais — o mesmo que sai do Modo Criança."
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
