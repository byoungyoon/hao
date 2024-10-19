const getToken = () => {
  return localStorage.getItem('token');
};

type Props = {
  url: string;
  parameters?: Record<string, string | number>;
};

export const GET = async <T extends object>({
  url,
  parameters,
}: Props): Promise<T> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl)
      throw new Error(
        'Server base URL is not defined in environment variables',
      );

    const queryString = parameters
      ? '?' +
        new URLSearchParams(parameters as Record<string, string>).toString()
      : '';

    const fullUrl = `${baseUrl}${url}${queryString}`;

    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const POST = async <T extends object>({
  url,
  parameters,
}: Props): Promise<T> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl)
      throw new Error(
        'Server base URL is not defined in environment variables',
      );

    const fullUrl = `${baseUrl}${url}`;

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parameters),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
