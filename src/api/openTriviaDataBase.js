import axios from "axios";

const BASE_URL = "https://opentdb.com";
const token = "";

export async function getSessionToken() {
  const path = "/api_token.php?command=request";
  const url = BASE_URL + path;
  try {
    const response = await axios.get(url);
    // @ts-ignore
    const { token } = response;
    if (token) {
      this.token = token;
      return token;
    } else {
      throw new Error("Token is missing");
    }
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

export async function resetSessionToken(token = this.token) {
  const path = `/api_token.php?command=reset&token=${token}`;
  const url = BASE_URL + path;
  try {
    const response = await axios.get(url);
    const data = response.data;
  } catch (error) {}
}
