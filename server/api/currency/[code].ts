export default defineEventHandler(async (event: any) => {
    const { code } = event.context.params;
    const { currencyKey } = useRuntimeConfig();

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

    const response = await fetch(uri);

    return response;
});
