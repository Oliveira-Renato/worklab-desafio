# Desafio Fullstack Worklab

## Descrição

Bem-vindo à minha versão do sistema Worklab! Neste projeto, busco criar uma versão simplificada do sistema Worklab. Ao completar esse desafio, tornei possível a simulação de um fluxo básico com as seguintes funcionalidades:

#### Cadastrar Paciente:

* Permite o registro de novos pacientes, incluindo informações como nome, sexo, email e celular.
#### Cadastrar Exames:

* Possibilita o cadastro de diferentes tipos de exames, cada um identificado por um código único.
#### Vinculação de Exames a Pacientes:

* Permite a associação de exames a pacientes específicos, criando um histórico detalhado de procedimentos realizados.
#### Geração de Relatório Básico:

* Facilita a geração de relatórios simples, fornecendo informações relevantes sobre os pacientes e os exames vinculados.


## Pré-requisitos

### PHP

- [Baixe e instale o PHP](https://www.php.net/downloads).
- Adicione o diretório do PHP ao seu PATH do sistema.

### Composer

- [Baixe e instale o Composer](https://getcomposer.org/download/).
- Adicione o diretório do Composer ao seu PATH do sistema.

### Node.js e npm

- [Baixe e instale o Node.js](https://nodejs.org/en/download/).

### XAMPP

- [Baixe e instale o XAMPP](https://www.apachefriends.org/index.html).
- Inicie os servidores Apache e MySQL no XAMPP.

## Configuração do Projeto

1. **Clonar o Repositório:**
   - Clone o repositório do seu projeto para o seu ambiente local.
   - `git clone https://github.com/Oliveira-Renato/worklab-desafio.git`
2. **Instalar Dependências PHP:**
   - Execute `cd worklab-desafio` para entrar no diretório clonado.
   - Execute `composer install` no diretório do projeto para instalar as dependências PHP.
   - Execute `cp .env.example .env` para fazer uma copia do arquivo de exemplo para um .env .
   - Execute `php artisan key:generate` para gerar uma chave de seguraça para o projeto.

3. **Instalar Dependências Node.js:**
   - Execute `cd worklab-frontend` para entrar no diretório onde se encontra o frontend da apliação.
   - Execute `npm install` ou `yarn install` no diretório do projeto para instalar as dependências do Node.js.
   - Crie um arquivo *.env* na raiz do projeto frontend e preencha com a seguinte informação:
     * VITE_API_BASE_URL=http://localhost:8000 //ou porta que sua API estejá rodando.

4. **Configurar o Banco de Dados:**
   - Certifique-se de que o servidor MySQL no XAMPP esteja em execução.
   - Configure as informações do banco de dados no arquivo de configuração do seu projeto *.env.example ou .env*.
   - No *phpMyAdmin*, crie uma tabela chamada **"worklab_desafio"**

5. **Executar a Aplicação:**
   - Após ter feito todos os passos anteriores, dentro do diretório "worklab-desafio":
   * Execute `php artisan migrate` para criar as tabelas, e em seguida `php artisan serve` para iniciar o servidor backend.
   - Dentro do diretório "worklab-frontend":
   - Execute `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento Vite + React.
   - Acesse a aplicação pelo navegador através do endereço local.

### Observações Importantes

- Ajuste as configurações do banco de dados, como nome do banco, usuário e senha, de acordo com suas configurações locais.
- Caso esteja utilizando um ambiente de produção, ajuste as configurações de segurança e utilize um servidor web mais adequado.

Certifique-se de consultar a documentação específica de cada ferramenta e framework para obter informações detalhadas sobre como configurar e executar os projetos.
