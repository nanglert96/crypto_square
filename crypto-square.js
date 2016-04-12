var Crypto = function(text){
	this.message = text;
};

Crypto.prototype.normalizePlaintext = function(){
	return this.message.replace(/[\W]/g, "").toLowerCase()
};

Crypto.prototype.size = function(){
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length))
};

module.exports = Crypto;
