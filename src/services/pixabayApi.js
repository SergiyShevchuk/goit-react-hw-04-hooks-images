import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '27141360-7419ff24f1361f7148c73d16c';
const REQUEST_PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';

const fetchPictures = async (searchQuery, page) => {
  const response = await axios({
    method: 'get',
    url: `?key=${KEY}&q=${searchQuery}&page=${page}&${REQUEST_PARAMS}`,
  });
  const hits = response.data.hits;
  const totalHits = response.data.totalHits;
  const data = { hits, totalHits };
  return data;
};

export default fetchPictures;
