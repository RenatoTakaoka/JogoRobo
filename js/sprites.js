var Sprite = function(posX, posY, width, height, color, Imagem, type='obstacle', life = null){
	this.posX = posX;
	this.posY = posY;
	this.width = width;
	this.height = height;
	this.color = color;
	this.Imagem = Imagem;
	this.type = type;
	this.life = life;
	this.visible = true;
}
//Retorna  largura
Sprite.prototype.halfWidth = function(){
	return this.width/2;
}
//Retorna altura
Sprite.prototype.halfHeight = function(){
	return this.height/2;
}
//Retorna a posição do centro do objeto no eixo X
Sprite.prototype.centerX = function(){
	return this.posX + this.halfWidth();
}
//Retorna a posição do centro do objeto no eixo Y
Sprite.prototype.centerY = function(){
	return this.posY + this.halfHeight();
}
