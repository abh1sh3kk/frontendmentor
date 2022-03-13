export interface ApiResponse {
  id: number;
  message: string;
}

export const GetAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((json) => json['slip']);
  return {
    id: response['id'],
    message: response['advice'],
  };
};
