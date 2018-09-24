function app(){
    
}
    
app.prototype.registerBinding = function(model, element, property){
    var field = new Binding({
        object: model,
        property: property,
        element: document.getElementsByName(element)[0],
        attribute: "value"
    });
}

setup = function setup(){
    
    var myapp = new app();
    var person = {
        Firstname: 'Suresh',
        Lastname: 'Venkatesan',
        AddressLine1: '6316 Ventura Way',
        AddressLine2: '',
        LicenseNumber: 'F803393'
    }
    
    myapp.registerBinding(person, "Firstname", "Firstname");    
}

setup();