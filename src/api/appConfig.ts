export const appConfig = {
    backend: {
        baseUrl: import.meta.env.VITE_APPLICATION_URL,
        getNameUrl: import.meta.env.VITE_GET_NAME_URL,
    },
    aws: {
        apiKey: import.meta.env.VITE_SECRET_KEY,
    },
    reports: {
        reportUrl: import.meta.env.VITE_REPORT_URL,
        homeUrl: import.meta.env.VITE_REPORT_HOME_URL,
        pedidosUrl: import.meta.env.VITE_REPORT_PEDIDOS_URL,
        leitosUrl: import.meta.env.VITE_REPORT_LEITOS_URL,
    }
};
