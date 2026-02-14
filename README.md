# inforf.github.io — QA Portfolio (Website)

Este repositório contém meu site de portfólio público.

O objetivo não é apenas me apresentar como profissional, mas demonstrar na prática como trabalho qualidade de software:  
observação de comportamento, análise de risco, reprodução de cenários e prevenção de impacto ao usuário.

🔗 Acesse: https://inforf.github.io


---

## Propósito do site

O site foi estruturado como um pequeno ecossistema de qualidade.

Ele simula o fluxo real de um produto:

1. entender quem é o usuário
2. observar comportamento
3. identificar riscos
4. reproduzir cenários
5. validar correções

A ideia não é mostrar apenas automação.  
É mostrar **como qualidade é construída antes da produção**.


---

## Estrutura

O site possui duas partes principais.

### 1) Apresentação profissional

A página inicial apresenta:

- quem sou
- forma de atuação
- visão de qualidade
- links para repositórios
- automação e documentação

Ela contextualiza o visitante:  
QA não é somente executar testes — é entender o sistema, o usuário e o impacto do software no negócio.


---

### 2) QA Playground (ambiente com falhas intencionais)

O QA Playground é uma aplicação web criada propositalmente com problemas.

Ele não foi feito para ser perfeito.  
Foi criado como um ambiente controlado para demonstrar como a qualidade é analisada.

Contém exemplos de:

- validação incorreta de formulário
- inconsistências de navegação
- falhas de comportamento
- problemas de fluxo
- cenários onde o sistema “funciona”, mas o usuário não consegue concluir a tarefa
- problema de acessibilidade: contraste insuficiente entre fundo escuro e links após interação, dificultando a visualização

Esse último caso surgiu a partir de feedback real de um visitante do site, indicando dificuldade para identificar elementos clicáveis.

Isso reforça que qualidade não envolve apenas funcionamento técnico, mas também garantir que o sistema seja utilizável por diferentes perfis de usuário.

> Muitos defeitos reais não derrubam o sistema.  
> Eles impedem o usuário de utilizá-lo corretamente.

O objetivo do playground é permitir observar:

- como o problema aparece
- como reproduzir
- qual o impacto
- qual o risco antes do release


---

## Relação com a automação

Este repositório **não contém os testes automatizados**.  
Ele contém o sistema que é testado.

A automação está no projeto:

➡ https://github.com/inforf/qa-playground-automation

Os testes automatizados executam cenários contra este site, geram evidências e produzem relatórios de análise.

Ou seja:

- este repositório = sistema observado  
- repositório de automação = validação técnica


---

## O que este projeto demonstra

Este site foi pensado para demonstrar atividades reais de QA:

- leitura de comportamento do usuário
- exploração funcional
- identificação de risco
- análise de impacto
- documentação clara
- preparação para automação

O foco não é encontrar erros por encontrar.

O foco é responder:

**isso pode chegar ao usuário final?**  
**qual seria o impacto operacional?**


---

## Análise de comportamento (Clarity)

O site utiliza Microsoft Clarity para análise de comportamento de navegação.

O objetivo não é identificar usuários, mas compreender como o sistema é utilizado na prática.  
A ferramenta registra interações de forma anônima, permitindo observar:

- áreas mais acessadas
- fluxo de navegação
- pontos de abandono
- ações que não produzem o resultado esperado

Nenhum dado pessoal, credencial ou informação sensível é coletado.

A análise ajuda a validar hipóteses de qualidade:

- o usuário entende o fluxo?
- algum passo gera confusão?
- existe fricção na interface?
- uma funcionalidade funciona tecnicamente, mas não operacionalmente?

Ou seja, a análise não observa *quem* está usando, mas *como* o sistema se comporta durante o uso.

O objetivo é melhorar previsibilidade, reduzir erro operacional e identificar riscos antes de impactar o usuário final.


---

## Filosofia de qualidade

Software de qualidade não é aquele sem bugs.  
É aquele em que o usuário não sofre o impacto das falhas.

O objetivo do QA não é bloquear deploy.  
É evitar que a equipe descubra problemas através do cliente.

Quanto mais cedo o risco é identificado:
- menor o custo
- menor o impacto
- maior a confiança na entrega

Qualidade não é uma etapa do projeto.

É um sistema de prevenção.


---

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- GitHub Pages (hospedagem)
- Microsoft Clarity (análise de comportamento)


---

## Como utilizar

Você pode usar o site como um ambiente de testes:

1. navegar normalmente
2. executar ações como usuário
3. observar comportamentos inesperados
4. reproduzir cenários
5. comparar com os relatórios do repositório de automação

Ele foi criado exatamente para isso.


---

## Contato

LinkedIn: https://www.linkedin.com/in/ronaldo-ferreira-qa  
GitHub: https://github.com/inforf
