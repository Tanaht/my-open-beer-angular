module.exports=function($http,$resource,$location, config, rest) {
	var selfConfig = config;
	var self = this;
	this.information = {//objet qui contient l'information d'un utilisateur
		setting:false,
		connected : "false",
		mail:"Non Connecté",
		password : "",
		token : "",
		posted:{
			mail:"",
			password:"",
		}
	};
	var data = {};
	this.getToken = function(){
		rest.connect(this.information, function(){
			if(self.information.receive.connected){
				console.log("Connected to database with success");

				self.information.token = self.information.receive.token;
				selfConfig.server.privateToken = self.information.receive.token;
				self.information.connected = self.information.receive.connected;

				self.information.mail = self.information.posted.mail;
				self.information.password = self.information.posted.password;
				self.information.setting = false;
			}
			else{
				console.log("Connected to database failed");
			}
		});
	};
	this.deconnect = function(){
		this.information.connected = false;
		this.information.mail = "Non Connecté";
		this.information.password = "";
		this.information.token = "";
		this.information.posted.mail = "";
		this.information.posted.password = "";
		this.information.receive.token = "";
		this.information.receive.connected = false;
		config.server.privateToken = "";
	}

};