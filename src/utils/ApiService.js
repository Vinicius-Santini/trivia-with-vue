import axios from "axios";

const baseUrl = 'https://the-trivia-api.com/v2'

export const getRandomQuestions = async (params) => {
    try {
        const res = await axios.get(`${baseUrl}/questions`, {
            params: {
                ...params
            }
        })
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

function concatSettings(...settings) {
    return settings.join('')
}