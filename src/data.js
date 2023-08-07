//Fetch selected data type
async function getData(type) {
    try {
        const resp = await fetch(`./data/${type}.json`);
        return resp.json();
    } catch (error) {
        alert(error.message);
        throw new Error(error.message);
    }
}

export {
    getData
}