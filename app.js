const { Component, xml, useRef , mount } = owl;
class Root extends Component{
    static template =xml`
    <div>
        <input t-ref="1"/>
        <span>hello</span>
        <button t-on-click="btn">click</button>
    </div>`

    ref1 = useRef("1");

    btn(){
        console.log(this.ref1.el.value);
    }
   
}

mount(Root, document.body);