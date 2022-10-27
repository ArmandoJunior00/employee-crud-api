/**
 * arquivo: server.js
 * descrição: arquivo resposavel por toda configuração e execução do (Back-End) [employee]
 * data: 27/10/2022
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta ...', port);
})
