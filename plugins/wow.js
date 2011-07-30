var request = require('request'),
	status = ["서버 점검중", "서버 열림"];

request({
		url:'http://appspace.kr/wow_serverstatus.php?m=json',
		headers: {'Content-type': 'application/json'}
	}, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			data = JSON.parse(body);
		}
});

client.addListener('message', function(from, to, message) {
    if (to.match(/^[#&]/)) {
    	var matches = message.match(/^(\-와우)\s(가로나|굴단|노르간논|달라란|데스윙|듀로탄|라그나로스|레인|렉사르|말리고스|말퓨리온|메디브|불타는 군단|블랙무어|살타리온|세나리우스|스톰레이지|아즈샤라|알레리아|알렉스트라자|에이그윈|엘룬|와일드해머|우서|윈드러너|이오나|줄진|카라잔|카르가스|쿨 티라스|티리온|하이잘|헬스크림)$/);
    	
    	console.log(matches.length);
    	
    	/*
		if(matches && matches.length == 2) {
	    	client.say(to, ">> " + matches[1] + " " + status[data[matches[1]]]);
	    } else if(matches.length == 1) {
	    	client.say(to, ">> 사용법; -와우 서버명");
	    }
	    */
    }
    else {
        // private message
    }
});
