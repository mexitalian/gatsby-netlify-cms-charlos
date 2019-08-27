console.log(process.env.GOOGLE_MAPS_API_KEY);
exports.GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`