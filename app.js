const { Component, xml, useState , mount } = owl;

class Counter extends Component {
  static template = xml`
    <button t-on-click="increment">
      Click Me! [<t t-esc="props.name.value"/>]    
    </button>`;     // recieved the value from state and directly displayed it

    increment() {
        this.props.name.value++;                          // used the age method and executed it
        this.props.name.age = () => {                     // you can directly use the method as it is
            console.log("from counter");                  // or you can override them and the then call them
        }
       this.props.name.age()
      }
    static props = [
        "name"
      ]
}

class Root extends Component{
    static template =xml`
    <Counter name="name"/>`
    
    name = useState({ value: 10 , age: function(){   //passing a variable 'value' and a method age into a state
        console.log("from root");
        return 23;
    } });

    static components = {Counter}
}

mount(Root, document.body);