/*
O site Veja publicou que o governo dos EUA estuda acabar com a exigência de vistos para quem quer entrar nos EUA. Maria, empolgada para conhecer os EUA, pediu ao João que comprasse uma passagem aérea para ela usando uma aplicação que ele desenvolveu.

Nessa aplicação, o usuário informa:

* Cidade e país de origem
* Cidade e país de destino
* Data de ida (dia, mês, ano)
* Data de volta (dia, mês, ano)
* Nome completo e CPF do passageiro
* Forma de pagamento (cartão de crédito ou boleto bancário)

Depois de inserir os dados, o sistema exibe um resumo com as informações da viagem, o valor da passagem e uma mensagem de agradecimento.

---

1. Entender os requisitos
Temos que criar uma aplicação que:

* Recebe dados da passagem aérea (origem, destino, datas, passageiro, pagamento)
* Usa classes para modelar os objetos da aplicação (ex: Passageiro, Passagem)
* Aplica conceitos de programação orientada a objetos (POO):

  * Encapsulamento: atributos privados, acesso via getters e setters
  * Herança: criar pelo menos duas classes, por exemplo, uma classe base Pessoa e uma classe Passageiro que herda dela
  * Métodos: para manipular dados e gerar o resumo da passagem

---

2. Estrutura sugerida e conceitos obrigatórios

Classes e herança

* Criar uma classe base Pessoa com atributos e métodos comuns (ex: nome, CPF, getters/setters)
* Criar uma classe Passageiro que herda de Pessoa (pode adicionar métodos ou atributos específicos, se quiser)
* Criar uma classe Passagem para armazenar os dados da viagem e gerar o resumo

Encapsulamento

* Usar atributos privados (implementação interna), acessados por meio de getters e setters que garantem validação (ex: validar CPF)

Métodos

* Método para calcular o valor da passagem (pode ser fixo ou baseado em lógica simples)
* Método para formatar a data
* Método para gerar o texto resumo com os dados da passagem

---

3. Itens obrigatórios na implementação

* Pelo menos duas classes (exemplo: Pessoa e Passagem ou Pessoa e Passageiro)
* Uso de herança para demonstrar reaproveitamento de código
* Uso de encapsulamento com atributos privados e seus respectivos getters e setters
* Métodos para manipulação dos dados e apresentação dos resultados
* Código organizado, com classes separadas (em arquivos diferentes, se possível)
* Exemplo de criação dos objetos e exibição do resultado (no terminal, web, etc.)

---

4. Tudo isso deve estar ligado ao DOM e a um documento HTML

Ou seja, a aplicação deve:

* Ter um formulário HTML onde o usuário preenche todos os dados necessários
* Usar JavaScript para capturar esses dados, criar os objetos com as classes definidas
* Exibir no próprio HTML o resumo da passagem gerado pelas classes
* Garantir que o código JS manipule o DOM para mostrar mensagens e resultados dinamicamente

---

Se quiser, posso ajudar a montar o código completo com essa estrutura sem usar o símbolo `#` para atributos privados, mas mantendo o encapsulamento via convenção e acesso controlado. Quer?
*/
