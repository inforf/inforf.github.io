const translations = {
  pt: {
    hero_sub: "Quality Assurance com mais de 7 anos de experiência em qualidade de software, automação, SQL, suporte técnico e operações.",
    nav_about: "Sobre",
    nav_skills: "Skills",
    nav_exp: "Experiência",
    nav_contact: "Contato",
    about_title: "Sobre mim",
    about_text: "Atuei por mais de 7 anos na Delivoro trabalhando com QA, suporte técnico avançado e análise de sistemas. Meu foco sempre foi garantir qualidade, estabilidade e boa experiência para o cliente. Investiguei bugs em aplicações Java, apoiei correções, criei consultas SQL em MySQL, validei integrações, participei como PO em projetos e desenvolvi ferramentas em HTML, CSS e JavaScript para apoiar o time de qualidade.",
    skills_title: "Competências",
    skill1: "Testes Funcionais e Exploratórios",
    skill2: "Automação com Selenium e Playwright",
    skill3: "Testes de API e validações",
    skill4: "SQL avançado (MySQL)",
    skill5: "AWS (EC2, ELB, RDS, S3)",
    skill6: "Implantação, treinamento e UX",
    exp_title: "Experiência Profissional",
    exp_text: "Atuação em QA em ambiente real de produção, validando fluxos críticos, integrações e releases. Investigação de bugs, criação de consultas SQL, testes funcionais, apoio ao desenvolvimento, validação de requisitos, suporte técnico avançado e acompanhamento de implantações.",
    contact_title: "Contato"
  },

  en: {
    hero_sub: "Quality Assurance professional with over 7 years of experience in software quality, automation, SQL, technical support and operations.",
    nav_about: "About",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_contact: "Contact",
    about_title: "About me",
    about_text: "I have worked for more than 7 years at Delivoro with QA, advanced technical support and systems analysis. My focus has always been ensuring system stability, reliability and a good user experience. I investigated bugs in Java applications, supported fixes, created SQL queries in MySQL, validated integrations and developed tools using HTML, CSS and JavaScript to support the quality process.",
    skills_title: "Skills",
    skill1: "Functional and Exploratory Testing",
    skill2: "Automation with Selenium and Playwright",
    skill3: "API Testing and validations",
    skill4: "Advanced SQL (MySQL)",
    skill5: "AWS (EC2, ELB, RDS, S3)",
    skill6: "Deployment, training and UX",
    exp_title: "Professional Experience",
    exp_text: "QA activities in real production environment, validating critical flows, integrations and releases. Bug investigation, SQL queries, functional testing, development support, requirement validation, advanced technical support and deployment follow-up.",
    contact_title: "Contact"
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

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
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
