import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config();

const url = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.MODEL;

export async function generate_text(prompt: String, engine: String): Promise<String> {
    const response = await axios.post(
        url,
        {
            'model' : MODEL,
            'message' : {
                'role' : 'user',
                'content' : prompt
            }
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        }
    );

    return response.data.choices[0].text.trim();
}