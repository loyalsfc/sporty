const key = process.env.REACT_APP_API_KEY
const base_url = "https://apiv3.apifootball.com/"

export const getLiveScores = async(params) => {
    const res = await fetch(`${base_url}?action=get_events&${params}&APIkey=${key}`);
    const result = await res.json()
    return result
}

export const getCountries = async() => {
    const res = await fetch(`${base_url}?action=get_countries&APIkey=${key}`);
    const result = await res.json()
    return result
}

export const queryEndpoint = async(action) => {
    const res = await fetch(`${base_url}?${action}&APIkey=${key}`);
    const result = await res.json()
    return result
}

export const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}