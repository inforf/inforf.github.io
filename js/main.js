const translations = {
  pt: {
    hero_sub: "QA com mais de 7 anos de experiência em qualidade de software, automação, SQL, suporte técnico e operações.",
    nav_about: "Sobre",
    nav_skills: "Skills",
    nav_exp: "Experiência",
    nav_contact: "Contato",

    about_title: "Sobre mim",
    about_text: "Atuo há mais de 7 anos na Delivoro trabalhando com QA, suporte técnico avançado e análise de sistemas. Investiguei bugs em aplicações Java, validei integrações, criei consultas SQL em MySQL e apoiei correções junto ao time de desenvolvimento. Também participei de implantações, treinamentos e validações em produção, sempre focado em estabilidade e experiência do usuário.",

    skills_title: "Competências",
    skill1: "Testes Funcionais e Exploratórios",
    skill2: "Automação com Selenium e Playwright",
    skill3: "Testes de API e validações",
    skill4: "SQL avançado (MySQL)",
    skill5: "AWS (EC2, ELB, RDS, S3)",
    skill6: "Implantação, treinamento e UX",

    exp_title: "Experiência Profissional",
    exp_text: "Atuação em QA em ambiente real de produção: análise de bugs, validação funcional, testes exploratórios, documentação técnica, apoio ao desenvolvimento, criação de relatórios SQL, levantamento de requisitos, treinamentos e acompanhamento de deploy e rollback em infraestrutura AWS.",

    contact_title: "Contato",

    automation_title: "Automação de Testes e CI",
    automation_desc: "Projeto de automação E2E e testes de API utilizando Playwright com execução contínua em pipeline CI. Os testes são executados automaticamente a cada atualização do repositório, validando fluxos críticos e prevenindo regressões.",
    automation_repo: "Ver repositório de automação"
  },

  en: {
    hero_sub: "QA with over 7 years of experience in software quality, automation, SQL, technical support and operations.",
    nav_about: "About",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_contact: "Contact",

    about_title: "About me",
    about_text: "I have worked for over 7 years at Delivoro in QA, advanced technical support and systems analysis. I investigated bugs in Java applications, validated integrations, created MySQL queries and supported fixes with the development team. I also participated in deployments, training and production validations, always focused on stability and user experience.",

    skills_title: "Skills",
    skill1: "Functional and Exploratory Testing",
    skill2: "Automation with Selenium and Playwright",
    skill3: "API Testing and validations",
    skill4: "Advanced SQL (MySQL)",
    skill5: "AWS (EC2, ELB, RDS, S3)",
    skill6: "Deployment, training and UX",

    exp_title: "Professional Experience",
    exp_text: "QA activities in real production environment: bug analysis, functional validation, exploratory testing, technical documentation, development support, SQL reporting, requirements gathering, training and deployment and rollback monitoring in AWS infrastructure.",

    contact_title: "Contact",

    automation_title: "Test Automation and CI",
    automation_desc: "End-to-end and API automation project using Playwright with continuous execution in a CI pipeline. Tests run automatically on every repository update, validating critical flows and preventing regressions.",
    automation_repo: "View automation repository"
  }
};


function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}


document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});


const savedLang = localStorage.getItem("lang") || "pt";
setLanguage(savedLang);


/* botão voltar ao topo */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;

  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
