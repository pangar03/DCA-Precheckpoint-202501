export const getData = async () => {
    const res = await fetch('./data/fortnite.json');
    const data = await res.json();

    return data.data;
}