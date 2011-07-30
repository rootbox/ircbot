var irc = require('irc'),
	fs = require('fs');

var client = new irc.Client('apink.hanirc.org', 'r_', {
	debug: true,
	channels: ['#jsmirror'],
	userName: 'r_bot',
	realName: 'rootbox bot',
});

client.addListener('error', function(message) {
	console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

client.addListener('message', function(from, to, message) {
    if (to.match(/^[#&]/)) {
    	// channel message
		/*
        if (message.match(/dance/)) {
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D\\-<\u0001") }, 1000);
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D|-<\u0001") }, 2000);
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D/-<\u0001") }, 3000);
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D|-<\u0001") }, 4000);
        }
		*/
    }
    else {
        // private message
    }
});

irc.Client.prototype.loadPlugins = function() {
	fs.readdir('./plugins', function(error, files) {
		files.forEach(function(file) {
			fs.readFile('./plugins/' + file, 'utf8', function(err, data) {
				if(error) {
					console.error(error);
				} else {
					eval(data);
				}
			});
		});
	});
};

client.loadPlugins();
