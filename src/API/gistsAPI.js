import axios from 'axios';

const parseGist = (gist) => ({
  description: gist.description || '[No Description]',
  url: gist.html_url,
  files: gist.files.map((file) => ({
    name: file.filename,
    type: file.type,
    lang: file.language,
  })),
});

const handleGistsFound = (setGists, setGistsFound) => (gists) => {
  const parsedGists = gists.data.map(parseGist);
  setGists(parsedGists);
  setGistsFound(true);
};

const handleGistsNotFound = (setGists, setGistsFound) => () => {
  setGists([]);
  setGistsFound(false);
};

const gistsAPI = {
  get: (userLogin, setGists, setGistsFound) => (
    axios
      .get(`https://api.github.com/users/${userLogin}/gists`)
      .then(handleGistsFound(setGists, setGistsFound))
      .catch(handleGistsNotFound(setGists, setGistsFound))
  ),
};

export default gistsAPI;