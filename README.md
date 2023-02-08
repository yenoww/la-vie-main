# la-vie

Projeto onde devemos criar uma API que permita criar registros de psicólogos, pacientes e atendimentos.

Para utilizar o projeto, clone esse repositório na sua máquina e utilize os códigos do arquivo laVie-db.sql, contido na pasta "./src/database", no seu MySQL workbench para criar o banco de dados. Assim será possivel o código conectar com a data base.

para cadastrar um atendimento um atendimento, tem que colocar o token que é dado quando se faz o login.

instruções: apos copiar o tokem va em header em new header escreva: Authorization e em new value coloque Bearer + o tokem assim cadastrando um atendimento.

obs: Náo precisa colocar id_psicologo no json pelo token identifica qual id que esta cadastrando

Nossa equipe também será responsável por criar o banco de dados que inclui: Criação do DER e do script SQL que gera o banco. Deve ser criado para ser considerado como entidades do sistema:

Pacientes
Psicólogos
Atendimentos
