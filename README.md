# Whispers Bed Allocation

Whispers is a decision-support startup focused on hospital bed allocation. Our goal is to offer a system that makes the work of bed operators easier by concentrating all the information needed to make the patient's allocation in one place. Unlike the management systems currently used in hospitals, it also checks whether the allocation rules are being followed and suggests optimized allocations based on optimization criteria defined by each hospital. All this while maintaining full control in the hands of human operators, while still taking advantage of the best that technology has to offer.

The idea came from research conducted by one of the founders, Débora Engelmann, during her Master's and PhD degrees in Computer Science at PUCRS and UniGe. In her research, she identified several pain points faced by professionals who allocate hospital beds. To move from theory to practice and turn her research into a product, she invited Juliana Damasio, who also has Master's and PhD degrees in Computer Science, to found Whispers. Initially, we conducted semi-structured interviews with 4 hospitals in the greater Porto Alegre area, during which we were able to understand how bed allocation currently works in hospitals and verify whether our idea of ​​creating a web system that takes into account the rules practised in the hospital and makes optimized suggestions would be useful.

Our main premises were to verify whether rule validation and allocation suggestions would be important for operators and how to work with sensitive patient and physician data.

In the end, we were able to validate our premises; 100% of the interviewees considered that a system that validated allocation rules and made allocation suggestions would be useful. Likewise, 75% of them mentioned the importance of omitting sensitive patient and physician data. Therefore, Whispers chose not to bring sensitive data that identifies patients and physicians into the system into its own database.

This code presents a feature under construction that aims to concentrate all the data necessary for bed allocation in a single location.

## Portuguese version

A Whispers é uma startup de suporte à decisão com foco na alocação de leitos hospitalares. Nosso intuito é oferecer um sistema que facilita o trabalho do profissional operador de leitos concentrando todas as informações necessárias para efetuar a alocação em um só lugar. Ao contrário dos sistemas de gerenciamento utilizados atualmente nos hospitais, ainda verifica se as regras de alocação estão sendo seguidas e sugere alocações otimizadas com base em critérios de otimização definidos por cada hospital. Tudo isso, mantendo o controle total nas mãos dos operadores humanos, sem deixar de tirar proveito do que a tecnologia pode oferecer de melhor. 

A ideia surgiu da pesquisa realizada por uma das fundadoras, Débora Engelmann, durante seu mestrado e doutorado em Ciência da computação na PUCRS e na UniGe. Na sua pesquisa, identificou várias dores enfrentadas pelos profissionais que realizam a alocação de leitos nos hospitais. Para passar da teoria à prática e tornar sua pesquisa um produto ela convidou Juliana Damasio que, também é mestra e doutora em Ciência da computação, para fundar a Whispers.
Inicialmente realizamos entrevistas semi-estruturadas com  4 hospitais da grande Porto Alegre, durante as quais, pudemos entender como funciona a alocação de leitos atualmente nos hospitais e verificar se nossa ideia de criar um sistema web que considere as regras praticadas no hospital e faça sugestões otimizadas seria útil. 

Nossas maiores premissas foram verificar se a validação de regras e sugestão de alocação seriam importantes para os operadores e como trabalhar com dados sensíveis de pacientes e médicos. 
Ao final conseguimos validar nossas premissas, 100\%  dos entrevistados consideram que seria útil um sistema que validasse as regras de alocação e fizesse sugestões de alocação. Assim como, 75\% deles citaram a importância de omitir dados sensíveis dos pacientes e médicos. Desta forma, a Whispers optou por não trazer para o banco de dados próprio os dados sensíveis que identifiquem os pacientes e médicos no sistema.

Esse código apresenta uma funcionalidade em construção que tem a finalidade de concentrar em apenas um local todos os dados necessários para a alocação de leitos em apenas um lugar. 


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Build for production

```sh
npm run build:prod
```

### Build for test

```sh
npm run build:test
```