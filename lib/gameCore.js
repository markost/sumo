/*
* @todo: create a collection of debug messages, maybe a json file so it can be localized. 
*/

var SUMO = {
	params: {
		debug: true
	},
	init: function (conf){
		SUMO.params = jQuery.extend(true, SUMO.params, conf);
	},
	require: function (module, namespace){
		namespace = namespace || SUMO;
		if(module !== undefined){
			namespace[module] = {};
			SUMO.log(module + " module created on instance.",'info');
		}
		
			},
	log: function (msg, level){
		if(SUMO.params.debug){
			if(!jQuery.isArray(msg)) {
				msg = [msg];
			}
			for(var m in msg){
				console[level](msg);
			}
		}
	}

};