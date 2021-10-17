const getMutualFundList = async () => {
    try {
        const response = fetch('https://api.mfapi.in/mf');
        const parsedData = (await response).json()
        return parsedData;
    } catch (err) {
        console.error('Error in Mutual fund listing : ' + err);
    }
}

const getFundGraphData = async (code) => {
    try {
        const response = fetch('https://api.mfapi.in/mf/'+code);
        return (await response).json();
    } catch (err) {
        console.error('Error in Fund graph data' + err);
    }
}

const searchMutualFundList = async (input) => {
    try {
        const response = fetch('https://api.mfapi.in/mf/search?q='+input);
        return (await response).json();
    } catch (err) {
        console.error('Error in Mutual fund search' + err);
    }
}

export { getMutualFundList , getFundGraphData , searchMutualFundList };