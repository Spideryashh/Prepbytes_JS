const obj = {
    
    info: function() {
        console.log("name",this.name,this.class)
        return this.name + " "+ this.class;
    }
}
const student2 = {
    name : "student2",
    class : 11
}

obj.info.call(student2);

// call Vs Apply Vs Bind
const obj2 = {
    info: function(age,marks) {
        console.log("name",this.name,this.class,age,marks)
        return this.name + this.class + age + marks
    }
}

const student3 = {
    name : "student3",
    class : 12,
}

obj2.info.apply(student3,[20,100]);

var btn = {
    content : 'ok ',
    click() {
        console.log(this.content + "clicked");
    }
}
btn.click();

var btn2 = btn.click;
btn2();

var btn3 = btn.click.bind(btn)
btn3();

// call => 
// apply => we can pass array in apply but not in call
// bind =>
