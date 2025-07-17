<img width="1226" height="636" alt="image" src="https://github.com/user-attachments/assets/0ba712a5-1e95-4171-b303-752c01bc606f" />  

## Sobre o site  
O site foi feito usando html, css e javascript durante o curso da Programaria #euProgrAmo Front-End: Montando minha primeira página web. A ideia foi iniciar na programação de forma técnica usando essas três linguagens em conjunto, aprendendo como construir cada uma delas e como unir uma a outra.  

O tema foi a Ada Lovelace, primeira pessoa programadora que temos notícia no mundo.  
## Sobre o processo:  
* Primeiro montamos o escopo base para a construção em html, entendendo o conceito de tag mãe e tag filha e as boas práticas no código;
* Adicionamos o texto já pronto, simulando o envio pronto da designer;
* Adicionamos seções e áreas de navegação;
```html para HTML
    <nav class="principal">
                <ul>
                    <li>
                        <a  href="#infância">Infância</a>
                    </li>

                    <li>
                        <a  href="#juventude">Juventude</a>
                    </li>

                    <li>
                        <a href="#vidaadulta">Vida adulta</a>
                    </li>
                </ul>
    </nav>
```
* Organizamos os espaçamentos de forma responsiva utilizando css;  
```css para CSS
.principal{
    background: #FF6CB5;
    height: 40px;
    max-width: 60%;
    margin: 0 auto;
```
* Aplicamos cores e estilo com css;
* Demos "leitura" ao formulário utilizando Javascript para linkar o campo de preenchimento ao título de cada um, juntamente com o "click" no botão "enviar;
```javascript para JAVASCRIPT
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
function validaFormulario () {
    if( document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}
```
## Como visualizar o site  
Para ver ele pronto, é só clicar em [http://eusouabruna.github.io/site-ada-lovelace/](https://eusouabruna.github.io/site-ada-lovelace/) para abrir o site. Os códigos estão 
organizados acima e você pode ver com detalhes cada linha escrita.

