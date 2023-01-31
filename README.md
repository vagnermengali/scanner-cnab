<h1 align="center">
  Scanner CNAB
</h1>

<p align = "center">
Este é a aplicação Scanner CNBA - Que tem fins de facilitar o escaneamento de documentos CNAB.txt
</p>

<p align="center">
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#aplicação">Aplicação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
cd scanner-cnab/backend
```
<p>3. Crie seu ambiente virtual:</p>
  
```
python -m venv venv    
```
<p>4. Ative seu ambiente virtual:</p>
  
```
source venv/bin/activate  
```
<p>5. Instale as dependências do projeto:</p>
  
```
pip install -r requirements.txt 
```
<p>6. Crie suas migrações:</p>
  
```
python manage.py makemigrations 
```
<p>7. Aplique suas migrações:</p>
  
```
python manage.py migrate
```
<p>8. Ative o server:</p>

```
python manage.py runserver
```
<p align ='center'><a href="#--scanner-cnab" >Voltar ao início</a></p>

---

## **Aplicação**

Depois que api ja estiver iniciada em sua máquina, prossiga com o passo-a-passo de usabilidade da aplicação, porém se opitar por na instalar o frontend disponibilizamos o [link do deploy](https://scanner-cnab-git-main-vagnermengali.vercel.app/)<br/>

A url base da interface é http://localhost:3000

<p>1. Clone o repositório:</p>

```
git clone https://github.com/vagnermengali/scanner-cnab.git
```
<p>2. Adentre na pasta raiz do projeto:</p>
  
```
cd scanner-cnab/frontend
```
<p>3. Crie sua node module:</p>
  
```
yarn ou yarn install   
```
<p>4. Ative o server:</p>

```
yarn start
```
<p align ='center'><a href="#--scanner-cnab" >Voltar ao início</a></p>

---

## **Tutorial de uso**

Depois que tudo for instalado e estiver rodando, chegou a hora de usufruir da aplicação, segui a passo a passo para um boa experiência de usuário<br/>

<p>1. Aberta a aplicação:</p>


<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-1.svg" />

<p>2. Clique em upload file:</p>
  

<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-2.svg" />

<p>3. Selecione o arquivo e clique em abrir:</p>
  

<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-3.svg" />

<p>4. E assim será listados todas transações:</p>
  

<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-4.svg" />

<p>5. Já aqui selecione a empresa desejada:</p>
  

<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-5.svg" />

<p>6. Clique no botão select store para concluir a filtragem:</p>
  

<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-6.svg" />

<p>7. Filtragem concluída:</p>
  

<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-7.svg" />

<p>8. Logo aós se desejar apague o escaneamento feito, e já estará pronto para repetir o processo:</p>

<img  alt="VagnerTech" width="1500" src="https://github.com/vagnermengali/scanner-cnab/blob/main/tutorial/passo-8.svg" />

<p align ='center'><a href="#--scanner-cnab" >Voltar ao início</a></p>

---

## **Endpoints**

A API tem um total de 4 endpoints, podendo escanear o documento CNAB, listar transações, loja específica e deleção de todas as transações para um novo escaneamento. <br/>

<p>A url base da API é <a href="http://localhost:8000/api/">http://localhost:8000/api/</a></p>

<h2 align ='center'> Listando transações </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver as transações do documento escaneado:

`GET /api/transaction/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "total": 3,
    "results": [
        {
            "id": "8a1968e2-a7a6-4d8e-b4f9-2725e1d5d77d",
            "transaction": "2",
            "date": "2019-03-01",
            "value": "112.00",
            "hour": "23:42:34",
            "store": "BAR DO JOAO"
        },
        {
            "id": "be6c647f-8374-4f29-ac55-d4b12f9f8558",
            "transaction": "9",
            "date": "2019-03-01",
            "value": "102.00",
            "hour": "00:00:00",
            "store": "LOJA DO O MATRIZ"
        },
        {
            "id": "44abeadc-f60d-48d6-9a86-380721e171e3",
            "transaction": "2",
            "date": "2019-03-01",
            "value": "5.00",
            "hour": "14:18:08",
            "store": "MERCEARIA 3 IRMAOS"
        },
    ]
}
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
{
    "total": 2,
    "total_value": 264.0,
    "results": [
        {
            "id": "8a1968e2-a7a6-4d8e-b4f9-2725e1d5d77d",
            "transaction": "2",
            "date": "2019-03-01",
            "value": "112.00",
            "hour": "23:42:34",
            "store": "BAR DO JOAO"
        },
        {
            "id": "14e70b44-d03c-449c-ab5b-3dc5275ccfd1",
            "transaction": "1",
            "date": "2019-03-01",
            "value": "152.00",
            "hour": "23:30:00",
            "store": "BAR DO JOAO"
        }
    ]
}
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
        "MERCADO DA AVENIDA",
        "BAR DO JOAO",
        "MERCEARIA 3 IRMAOS",
        "LOJA DO O MATRIZ",
        "LOJA DO O FILIAL"
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
