
# <p align="center"><b> **RECONNECT FLOREST** </b>  <p>

![image](https://media.giphy.com/media/UT4mI09fArkgfiRhJl/giphy.gif)


---


# O PROJETO 
### `Cadastro de  viveiros e lista das espécies arbóreas permitidas para arborização urbana.`
<br>

## API foi desenvolvida para o Projeto Final de conclusão do curso - Backend 2023.1 | On22 [{Reprograma}](https://reprograma.com.br/)

### <p align="justify">  A escolha das espécies para arborização urbana são feitas sem critérios, gerando transtorno para a população como, por exemplo, encanamento, calçadas e ruas quebradas devido às raízes serem grandes, galhos e árvores quebradas por falta de manutenção ou cuidado, esses fatores fazem com que a população retire a árvore do meio urbano, consequentemente causa diversos problemas e o maior deles são enchentes e ilhas de calor nas grandes cidades. 

### <p align="justify">   Visando disponibilizar o máximo de informações possíveis para definir a escolha das espécies arbórea, esta API foi desenvolvida para catalogar e identificar as espécies adequada para cada região, levando em consideração o tamanho da árvore, tamanho do fruto, tipo de raiz, época de floração e o controle mínimo para o seu plantio e viveiros disponíveis para buscar a espécie escolhida.

### <p align="justify">  Pensando em uma forma de minimizar o impacto de ilhas de calor, conforto térmico, redução de ruídos e melhorias na qualidade de vida nas regiões urbanas, entre outros aspectos benéficos à população, espero que seja construída de forma coletiva e continua para atender não somente ao estado de São Paulo inicialmente, mas a todo país. 

 
<br><br>

# 👩🏾‍🔧`Tecnologias e Dependências usadas`

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`        | Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Postman` | Interface gráfica para realizar os testes.||
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `jest`| Jest é uma estrutura de teste JavaScript.|
| `body-parser`| Formata e transforma os dados para o formato de objeto javascript.|
| `compass`| Uma ferramenta interativa para consultar, otimizar e analisar os dados do MongoDB.|
| `cors`| é um recurso de segurança de navegadores da web modernos.|
| `json-server`| pacote que pode simular API.|
| `swagger`| ferramenta que  ajuda a fazer a modelagem, documentação para API|
<br />


<br />


# 📁 Arquitetura 


```
 📁 Reconnect-Forest
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |    |   |- 📄 especieController.js
   |    |   |- 📄 viveiroController.js
   |    |
   |    |- 📁 database
   |    |   |- 📄 dbConnect.js
   |    |     
   |    |- 📁 models
   |    |   |- 📄 especieModel.js
   |    |   |- 📄 viveiroModel.js 
   |    |   
   |    |
   |    |- 📁 routes
   |    |   |- 📄 especieRoutes.js
   |    |   |- 📄 especieRoutes.js
   |    |
   |    |- 📄 app.js 
   |        
   |
   |- 📄 .env
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swaggerDef.js  

```

# 🔃 Rotas 


| Descrição das rotas das espécies           |Método HTTP | Endpoint        |
|----------------------------------------------|--------|-------------------|
| Localizar todas as espécies disponiveis      | GET    | /especie          |
| Adicionar novas espécies                     | POST   | /add/especie      |
| Alterações nas informações das espécies      | PUT    | /especie/:id      |
| Deletar espécie                              | DELETE | /especie/:id      |
|                                              |        |                   | 


                                                 
| Descrição das rotas do viveiro             |Método HTTP | Endpoint        |
|----------------------------------------------|--------|-------------------|
| Localizar todas as espécies disponiveis      | GET    | /viveiro          |
| Cadastrar novos vieiros                      | POST   | /addViveiro       |
| Alterações nas informações dos viveiros      | PUT    | /viveiro/:id      |
| Deletar viveiros                             | DELETE | /viveiro/:id      |
|                                              |        |                   | 




<br />
<br />


## 
<br />

### _Agradeço imensamente a todas a professoras que nos deram aula ao longo do curso, a todas as monitoras e a essa equipe maravilhosa feita por mulheres disposta a mudar e resignicar a vida de tantas mulheres, obrigada pelo empenho e dedicação em cada etapa, entrego o projeto final com um desejo imenso de retribuir de alguma forma tudo que aprendi com vocês!!!!_
### _Não posso escrever o nome de nenhuma dessas pessoas maravilhosas, pois existe uma equipe imensa por trás de cada aula e dedico esse projeto final a vocês que nem conheço, mas já considero pakas!!!!_



## Vamos nos conectar?
### - [linkedin](www.linkedin.com/in/aglayrbeatriz)
### - [github](https://github.com/aglayr)
### - [instagram](https://www.instagram.com/beatrix_aglayr/) 
### - [e-mail](aglayr@alunos.utfpr.edu.br)

<br>