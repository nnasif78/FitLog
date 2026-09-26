export async function fetchJson<T>(urls: string[]): Promise<T> {
    for (const url of urls) {
        try {
            const response = await fetch(url, {cache:"no-store"})
            if (response.ok) {
                return await response.json() as T
            }
        } catch {
        }
    }
    throw new Error("Could not load workout data")
}