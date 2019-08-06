import axios from "axios";

export function getData() {
    return axios
        .get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
        .then(res => {
            return res.data.feed.entry;
        })
        .catch((error) => {
            console.log(error);
        });
}
