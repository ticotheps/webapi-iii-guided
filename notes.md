# Review

- Why break the API into routers?
    -Code is a communication medium
    -Minimize the noise and maximize the signal.
    -User <-> [Router -- DataAccess API]
    -Think of a 'Router' as a type of component.
    -Router should:
        -accept input from clients.
        -send responses to clients.
    -Data Access (Models) Layer
        -persistence of data (to disk, to db, to external API)
        -serves the routing layer.
    -Complexity (this is where bugs hide)
        -doing too much in a single unit (function, file, module, component)
        -i.e. 
            function doAandDoB() {

            }

            function directorOfTheShow() {}
            function doA() {}
            function doB() {}
            function doC() {}
            function doD() {}
        - ***PLEASE READ THE README (RTFM)***
        -Developers need to get good at dealing with uncertainty.
- Are endpoints harder to build? (update/delete)?
    -Talk to your PM if you're having trouble with this.
- Async/await as an alternative syntax for dealing with promises?
    - const promise = axios.get(url);
- req.query vs req.body?


