import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) =>  {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'b1a2bc9ccemsh67bdd5525a75631p17826fjsn0c3c7cc80ca9',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}
