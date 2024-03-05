# vueWebOne


Building a product page

followed : https://www.youtube.com/watch?v=bzlFvd0b65c&t=1s


Link vue app to html:
1. create app ::::=> const app = Vue.createApp({})
2. mount app in html ::::=> const mountedApp = app.mount("# idFromHtmlTag")
3. call the mounted app to the designated id/class in html  ::::=> <p id="idFromHtmlTag">{{}}</p>


BINDING ATTRIBUTE : 
attribute to expression
expression : alt, src, class, href, disabled, style
attribute : data() {  return { myAttribye :'Attribute Val'} } ::::=> from the createApp

example : <img v-bind:src="myCreatedAttribute"> or <img :src="myCreatedAttribute">
example : <img :alt="description">
example : <a :href="url">
example : <div :class="isActive">
example : <span :style="isActive">


CONDITIONAL BINDING : 
v-if="booleanAttributeIfTrue"
v-else

v-if="condition 1"
v-else-if="condition 2"
v-else

v-show="booleanAttributeIfTrue", //if not true, it adds a display:none css : Best for toggle


LIST RENDERING : 
v-for="value in array"
:key ="value.key"


EVENT HANDLING : 
v-on:click="methodName" or @click="methodName"

method:{
    methodName(){this.myVariable += 1;}
}

//passing over the value
@mouseover="imageName(keyVal)" ;


CLASS AND STYLE BINDING : 
v-bind:style="{}"
:style="{backgroundColor: variant.color}"
//style object is javascript : CamelCase property name
style="styleData" //add in main.js
 :disabled="!inStock"


COMPUTED PROPERTIES
>     compute property for us : calculate for us
> catches the valye and stores it away and used only when we need : boots performance
> example : 
computed :{
    title(){ return this.var1+" "+this.var2}
}

using : <h 2 >{ { title } } </ h 2 >


COMPONENTS AND PROPS
> COMPONENTS : parent and child component : parent could be main page & child could it sub part in that page
> has to be inside components folder

STEPs:
1. create component file : camel cased : Captial letter
2. inside the file : create app.component('component-name', 'all the component related html'); // two objects
3. call the component like js in the main or index html file
4. calling the component in html like <component-name></component-name>


PROPS : to make communication from child to parent : more like two way communication
steps : 
1. declare "props:{}" in js ffile of the child component
2. declare "the variable of prop" from child compoent into main js file as data and set its value
example : main.js :=> data (){ return { myProp : true }}
: ComponentFile.js => props:{ myProp:{type:boolean, required: true} }
3. pass value from child to parent via : <component-name :myProp="myProp"></component-name>


COMMUNICATING EVENTS : 

: props used to pass data from parent(data object) to child variable
: emits and listeners used : to notify parent or everyone that something happened in child or some other component

: we emit and then listener listens 
Example : 
1. defind emiter in child using : 
methods:{
    someEmitter(){
        this.$emit('my-custom-emit-name');
    }
}
2. inside html, <child/someComponent-name @my-custom-emit-name="myListenerMethod"></child/someComponent-name>

3. inside main or parent js file
methods:{
    myListenerMethod(){
        //actual thing happening here
    }
}

kind of like passing data from Child to parent



FORMS AND MODEL : 

1-way-binding : 
v-bind:src="image" binds to data(){return{image}}
but if image changes, the data image stays same 


2-way-binding:
v-modal="name" binds to data(){return{name=""}}
if name changes, data name value also changes

best for forms/inputs