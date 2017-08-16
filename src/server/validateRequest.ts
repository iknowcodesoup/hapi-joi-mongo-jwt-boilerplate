const validation = function(decoded, request, callback) {

    return callback(null, true);
    /*    // do your checks to see if the person is valid
        if (!people[decoded.id]) {
          return callback(null, false);
        }
        else {
          return callback(null, true);
        }*/
};

export default validation;
