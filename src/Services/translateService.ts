// services/translateService.ts
import axios from 'axios';

const API_KEY = '03632c0dbce11872615dacbac3cd448aef3865d5';
const API_URL = `https://google.serper.dev/search`;

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  try {
    const response = await axios.post(API_URL, null, {
      params: {
        q: text,
        target: targetLang,
        key: API_KEY,
      },
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
};
