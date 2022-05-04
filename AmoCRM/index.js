const AmoCRM = require( 'amocrm-js' );

const crm = new AmoCRM({
      domain: 'grammabc.amocrm.com',
      auth: {
        client_id: '00fb9755-60d5-4cec-ad34-2cb79dd26182', // ID интеграции
        client_secret: 'qeyweLzQCGEDrReX1oRR6TvZWSqXMK8hzdDr8VcATf2rlUaXgYC4k1x6Jnc0VvKl', // Секретный ключ
        redirect_uri: 'https://dba0-85-26-241-86.eu.ngrok.io', // Ссылка для перенаправления
        server: {
           // порт, на котором запустится сервер авторизации
           port: 3001
        }
      },
});

(async () => {
  const url = crm.connection.getAuthUrl();
  console.log({
    url
  });
  const response = await crm.request.get( '/api/v4/leads' );
  console.log( response.data );
})();
