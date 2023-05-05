class Context {

    constructor(value) {
        this.value = value;
    }

    Provider = ({children,value}) =>{
        this.value =  value;
        return children;
    }

    Consumer = ({children}) =>{
        return children(this.value);
    }

}

function createContext() {
    const context = new Context();
    return {
        Provider: context.Provider,
        Consumer: context.Consumer
    }
}

export default createContext;