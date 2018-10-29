# PigManagerWeb
O projeto consiste em um sistema web para gerencia de porcos.

## Configuração do ambiente de desenvolvimento
1. Para testar o projeto, primeiro instale o netbeans.<br/>
https://netbeans.org/downloads/
2. Depois, clone o projeto do webService <br/>
https://github.com/brunogeek9/PigManagerService <br/>
E siga as configurações padrões para rodar um service em jersey (criar um servidor no netbeans, adicionar o tomcat).
3. Rode o projeto no netbeans<br/>
4. Para rodar a aplicação em angularjs você ira precisar de um servidor qualquer http, recomendo o uso de algum 
servidor simples do node, para usar o node, primeiro o instale pelo repositorio oficial de sua distribuição linux, caso use windows,
basta baixalo no seguinte link.<br/>
https://nodejs.org/en/<br/>

## Configuração do projeto em si
1. Com o node instalado, instale o seu servidor http, você pode optar pelo http-server, para instalalo, basta seguir o tutorial a seguir.<br/>
https://www.npmjs.com/package/http-server <br/>
2. Para rodar o projeto, abra a sua pasta com os códigos pelo terminal, e depois com a pasta aberta basta rodar o comando a seguir.
2.1 Comando para abrir a pasta em um teste hipotetico.<br/>
Supondo que o projeto esta na pasta documentos do windows.<br/>
cd documents\pigmanaerweb<br/>
2.2 Depois basta iniciar o servidor, no tutorial antes mencionado isso esta mais detalhado, mas um comando básico para rodar o server seria algo tipo <br/>
http-server -p 12 -o firefox<br/>
2.3 obs: o -p significa a porta na qual o servidor vai rodar, optei a 12 por ela estar disponivel e o -o é qual o navegador o servidor vai abrir automaticamente rodando o seu projeto.
