import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get("/api/pizzas/getAllPizzas");
    console.log(res);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};

export const filterPizza = (searchkey, category) => async (dispatch) => {
  let filterdPizza;
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get("/api/pizzas/getAllPizzas");
    filterdPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filterdPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};