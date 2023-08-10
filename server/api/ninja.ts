export default defineEventHandler(async (event: any) => {
    // Handle query params
    // const { name } = useQuery(event);

    // Handle post data
    // const { age } = await useBody(event);

    // Return the response
    // return {
    //   message: `Hello, ${name}! You are ${age} years old.`,
    // };

    const { currencyKey } = useRuntimeConfig();

    const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`);

    return response;
});
