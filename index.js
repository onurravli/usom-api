const axios = require('axios');

const fetchData = async (route, url, params) => {
    const endpoint = `https://www.usom.gov.tr/api/${route}/index?${params}?url=${url}`;
    const res = await axios.get(endpoint);
    return res.data;
};

const main = async () => {
    const data = await fetchData('address', '', 'usom.gov.tr')
        .then((data) => {
            for (x in data.models) {
                console.log(data.models[x].url);
            }
        })
        .catch((err) => {
            console.error(err);
        });
};

main();
