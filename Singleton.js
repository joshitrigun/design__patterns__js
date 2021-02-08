/* Use when limit the number of instances to zero or one*/


const Singleton = (function() {
    let pManager
    function ProcessManager() { /* */ }
    
    function createProcessManager() {
        pManager = new ProcessManager() 
        return pManager
    }
    return {
        getProcessManager: () =>
        {
          if(!pManager)
            pManager = createProcessManager()
          return pManager
        }
    }
})()

const processManager = Singleton.getProcessManager();

const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);