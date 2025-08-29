        //! custom fetch-api utility
    // consists of
    // - a definition of a NextFetchRequestConig object 
    // - a FetchAPIOptions interface to define the 
    //   corresponding parameters for the fetch request
    // - a async fechAPI function that uses the defined interface
    //   to get the relevant data via the specific requests to the 
    //   endpoint as far as i know :)

type NextFetchRequestConig ={
    revalidate?: number | false;
    tags?: string[];
};


interface FetchAPIOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    authToken?: string;
    body?: Record<string, unknown>;
    next?: NextFetchRequestConfig;
}


export async function fetchAPI(url: string, options: FetchAPIOptions) {
    const { method, authToken, body, next } = options;

    const  headers: RequestInit & { next?: NextFetchRequestConig } = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(authToken && { Authorization: `Bearer ${authToken}`}),
        },
        ...(body && { body: JSON.stringify(body) }),
        ...(next && { next }),
    };

    try{ 
        const response = await fetch(url, headers);
        const contentType = response.headers.get('content-type');
        if(contentType && contentType.includes('application/json') && response.ok) {
            return await response.json();
        } else { 
            return { status: response.status, statusText: response.statusText };
        }
    } catch (error){
        console.error(`Error ${method} data:`, error);
        throw error;
    }
}