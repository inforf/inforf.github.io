# inforf.github.io — QA Portfolio

Site público do meu portfólio de Quality Assurance.

🔗 https://inforf.github.io

O objetivo é apresentar minha forma de pensar QA por meio de experiência real, análise de risco, testes exploratórios, automação e prevenção de falhas.

---

## Estrutura do projeto

### Portfólio principal

A página inicial apresenta:

- experiência profissional
- visão de qualidade
- stack e competências
- projetos práticos
- links para GitHub e LinkedIn

O foco não é apenas listar ferramentas, mas mostrar como qualidade pode apoiar decisões e reduzir risco para o usuário.

### QA Playground

O diretório `qa-playground/` contém um laboratório de testes manuais com falhas intencionais.

Cenários atuais:

1. **Modal bloqueante** — funcional, UX e acessibilidade
2. **API sem resposta / carregamento infinito** — integração, UX e resiliência
3. **Formulário com validação incorreta** — funcional, dados e UX

Cada cenário permite:

- reproduzir o problema manualmente
- comparar comportamento esperado e observado
- analisar impacto e risco
- consultar hipóteses e recomendações

🔗 https://inforf.github.io/qa-playground/

---

## Relação com a automação

O QA Playground é o ambiente de exploração manual.

A suíte automatizada que reproduz esses mesmos cenários está em outro repositório:

➡ https://github.com/inforf/qa-playground-automation

Assim, os projetos ficam separados por responsabilidade:

- **inforf.github.io / QA Playground** → exploração manual e análise
- **qa-playground-automation** → regressão automatizada com Playwright

Há ainda um terceiro projeto independente:

➡ https://github.com/inforf/qa-automation-portfolio

Ele demonstra automação E2E, testes de API e integração contínua fora do Playground.

---

## Tecnologias

- HTML
- CSS
- JavaScript
- GitHub Pages
- Microsoft Clarity

---

## Microsoft Clarity

O site utiliza Microsoft Clarity para observar padrões de navegação e pontos de fricção na experiência.

A intenção é usar comportamento real de navegação como mais uma fonte para levantar hipóteses de qualidade e usabilidade.

---

## Contato

LinkedIn: https://www.linkedin.com/in/ronaldo-ferreira-qa  
GitHub: https://github.com/inforf
