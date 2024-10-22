export default defineEventHandler(async (event) => {
  //   //Handle Param Data
  //   const url = new URL(
  //     event.node.req.url,
  //     `http://${event.node.req.headers.host}`
  //   );
  //   //Handle Post Data
  //   const { age } = await readBody(event);
  //   const name = url.searchParams.get("name"); // Extract the 'name' query parameter
  //   return {
  //     message: "Hello , " + name + "! you are " + age + " years old.",
  //   };

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey="
  );
  return data;
});
