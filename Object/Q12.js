function parse_URL(url) {
    const urlObj = new URL(url);
    
    const segments = urlObj.pathname.split('/').filter(segment => segment !== '');
    const params = {};

    // Populate the params object
    urlObj.searchParams.forEach((value, key) => {
        params[key] = value;
    });

    return {
        file: urlObj.pathname.split('/').pop(),
        hash: urlObj.hash,
        host: urlObj.host,
        params: params,
        path: urlObj.pathname,
        port: urlObj.port,
        protocol: urlObj.protocol.replace(':', ''), // Remove ':' from protocol
        query: urlObj.search,
        relative: urlObj.pathname + urlObj.search,
        segments: segments,
        source: urlObj.href
    };
}

// Test the function
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));
    