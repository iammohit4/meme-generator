import axios from "axios";

const getMeme = async (id: string) => {
    try {
        const data = await axios.get(`https://api.memegen.link/templates/${id}`, {
            headers: {
                Accept: "application/json"
            }
        });
        return data.data;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}

export default getMeme;