function Binding(field) {
    
    this.element = field.element;
    //this.value = field.object[field.property];
    this.attribute = field.attribute;  
    var value = field.object[field.property];
    
	this.valueGetter = function(){
		return value;
	}
    
	this.valueSetter = function(val){
		this.value = val
		this.element[this.attribute] = val
	}

	Object.defineProperty(field.object, field.property, {
		get: this.valueGetter,
		set: this.valueSetter
	});	
    
	//field.object[field.property] = this.value;
	this.element[this.attribute] = value;

}


Binding.prototype.registerBinding = function(){
      
}
