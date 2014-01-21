# Add adapter logic

var rest, mime, errorCode, client;

# Replace with bootstrap
rest = require('rest'),
errorCode = require('rest/interceptor/errorCode');

client = rest
	.chain(retry, { initial: 250, max: 2000 })
	.chain(errorCode, {code: 400})
        .chain(errorCode, { code: 500 });

# WRAP with adapter logic

# Add resource url constant

client({ path: resourceUrl }).then(
    function(response) {
	# Add logic for success channel
        console.log('response: ', response);
    },
    function(response) {
	# Add logic for invalid message channel
        console.error('response error: ', response);
    }
    function(response) {
	# Add logic for dead letter channel
        console.error('response error: ', response);
    }
);
