client.addListener('message', function(from, to, message) {
    if (to.match(/^[#&]/)) {
		if(message.match(/^\-말\s(.*)$/)) {
			client.say(to, message.replace(/^\-말\s/, ''));
		}
    }
    else {
        // private message
        if(message.match(/^\-말\s#(.*)\s(.*)/)) {
        	var tmp = message.split(' ');
        	client.say(tmp[1], tmp[2])
        }
    }
});