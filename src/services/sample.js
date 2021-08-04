import axios from "axios";

const client = axios.create({
    baseURL :  "https://api.instantwebtools.net/v1/airlines"

});

export const sample = {
    getSample: async (params) =>   await client.get(""),
}