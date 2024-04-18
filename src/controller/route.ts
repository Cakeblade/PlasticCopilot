import express, { Request, Response } from 'express';
import { GenerateTextResponse, GenerateTextRequest } from '../module/types'; 
import { generate_text } from '../provider/service';

const router = express.Router();

router.post('/message', async (req: Request, res: Response) => {
    try {
        const { prompt }: GenerateTextRequest = req.body;
        const generatedText: String = await generate_text(prompt, '')
        
        const response: GenerateTextResponse = { generated_text: generatedText };

        res.json({ response });
    } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        res.status(500).json(({ error_message : message }));
    }
});

export default router;