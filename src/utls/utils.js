const key = process.env.REACT_APP_API_KEY
const base_url = "https://apiv3.apifootball.com/"

export const getLiveScores = async() => {
    const res = await fetch(`${base_url}?action=get_events&from=2024-01-06&to=2024-01-06&APIkey=${key}`);
    const result = await res.json()
    return result
}

export const getCountries = async() => {
    const res = await fetch(`${base_url}?action=get_countries&APIkey=${key}`);
    const result = await res.json()
    return result
}