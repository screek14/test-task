const defaultConfig = {
  http: {
    url: Laravel.url,
    defaultRequest: {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }
  },
}

export default defaultConfig;