exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 404,
        body: "Hello, world!"
    })
}