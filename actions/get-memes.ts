import axios from "axios";

const getMemes = async () => {
    const data = await axios.get("https://api.memegen.link/templates", {
        headers: {
            Accept: "application/json"
        }
    });
    return data.data;
}

export default getMemes;