<h1 align="center">
  Scanner CNAB
</h1>

<p align = "center">
Este é o backend da aplicação Scanner CNBA - Que tem fins de facilitar o escaneamento de documentos CNAB.txt
</p>

<p align="center">
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#swagger">Swagger</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Instalação**

A seguir esta o passo-a-passo de instalação e execução em ambiente de desenvolvimento<br/>

<p>1. Clone o repositório:</p>

```
git clone https://github.com/vagnermengali/scanner-cnab.git
```
<p>2. Adentre na pasta raiz do projeto:</p>
  
```
cd scanner_cnab
```
<p>4. Crie seu ambiente virtual:</p>
  
```
python -m venv venv    
```
<p>5. Ative seu ambiente virtual:</p>
  
```
source venv/bin/activate  
```
<p>6. Instale as dependências do projeto:</p>
  
```
pip install -r requirements.txt 
```
<p>6. Crie suas migrações:</p>
  
```
python manage.py makemigrations 
```
<p>6. Aplique suas migrações:</p>
  
```
python manage.py migrate
```
<p>6. Ative o server:</p>

```
python manage.py runserver
```
<p align ='center'><a href="#--scanner-cnab" >Voltar ao início</a></p>

---


## **Endpoints**

A API tem um total de 4 endpoints, podendo escanear o documento CNAB, listar transações, loja específica e deleção de todas as transações para um novo escaneamento. <br/>

A url base da API é 

<h2 align ='center'> Listando transações </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver as transações do documento escaneado:

`GET /api/transaction/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  "total": 2,
  "results": 
  {
    "id": 0,
    "transaction": "string",
    "date": "string",
    "value": "string",
    "hour": "string",
    "store": "string",
  },
  {
    "id": 1,
    "transaction": "string",
    "date": "string",
    "value": "string",
    "hour": "string",
    "store": "string",
  }
]
```

<h2 align ='center'> Deletando transações </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode apagar as transações salvas para fazer um novo escaneado:

`DELETE /api/transaction/delete/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`DELETE /api/transaction/delete/ - FORMATO DA RESPOSTA - STATUS 204`

```json
{
    "details": "Transactions have been successfully deleted"
}
```

<h2 align ='center'> Buscar transações de loja específica  </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver as transações específicas de uma determinada loja do documento escaneado:

`GET /api/transaction/store/store_name/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`GET /api/transaction/store/store+name/ - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  "total": 2,
  "results": 
  {
    "id": 0,
    "transaction": "string",
    "date": "string",
    "value": "string",
    "hour": "string",
    "store": "store name",
  },
  {
    "id": 1,
    "transaction": "string",
    "date": "string",
    "value": "string",
    "hour": "string",
    "store": "store name",
  }
]
```

<h2 align ='center'> Escaneamento do documento CNAB </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar fazer o upload do arquivo e assim escanear o documento:

`POST /api/transaction/file-scan/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`POST /api/transaction/file-scan/ - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "details": "Scan completed successfully"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:
Não há transações a serem listadas.

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "Transaction list is empty"
}
```

Não há transações a serem deletadas.

`DELETE /api/transaction/delete/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "There are no transactions to delete"
}
```

Buscar por histórico de transações de loja específica com lista de transação vazia.

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "Store not found",
    "stores": []
}
```
Buscar por histórico de transações de loja específica não encontrada.

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "Store not found",
    "stores": [
        "Padaria dos sonhos",
        "Churrascaria Bom bife"
    ]
}
```
<p align ='center'><a href="#--scanner-cnab" >Voltar ao início</a></p>

---

## **Swagger** 

Api também conta com algumas rotas de interação, manipulação e documentação mais detalhada.

`api/schema/ `

`api/docs/redoc/ `

`api/docs/swagger-ui/ `

<p align ='center'><a href="#--scanner-cnab" >Voltar ao início</a></p>

---

<p align ='center'> Copyright <a href="https://github.com/vagnermengali">Vagner Mengali</a> 2023 </p>