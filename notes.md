# Review

- Why break the API into routers?
    -Code is a communication medium
    -Reduce the 'noise' so you can hear the 'signal'.
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
        -Different states of a Promise:
            -pending (working on it boss)
            -resolved (success) => .then(function() { // runs on success})
            -rejected (fail) =>    .catch(function() { // runs on failuer})
    -'synchronous' is like when you must wait until the guy in front of you at Walmart checks out COMPLETELY.
    - 'asynchronous' is like when you purchase a coffee from Starbucks. 
        -You don't have to wait to pay until AFTER the person in front of you receives their coffee.
        -You can pay for your coffee immediately after the person in front of you pays for it.
        -Starbucks promises to get you your coffee when it's ready.
    -Async/await attempts to give you the illusion of synchronicity without actually being synchronous.
    -i.e 
        ```js

        p().then(r1 => {
            // this first
            //
            p2(r1.one).then(r2 => {
                // then this
                //
                p3(r2.data).then(r3 => {
                    // this last
                    // do stuff
                });
            });
        }).catch(all errors handle here);

        p().then(r1 => {
            reutrn p2(r1.one);
        })
        .then().then()

        try {
            const r1 = await p();
            const r2 = await p2(r1);
        } catch (error) {
            // handle error
        }

        try {
            const r3 = await p3(r2);
        } catch (error) {
            // handle special error
        }

        ```
- req.query vs req.body?
    -req.body is an object that is sent in a message during a request
    -i.e. 
        ```js

        cont httpMessage = {
            headers: {
                authorization: 'token'
            },
            body: {
                name: 'frodo'
            }
        }
        ```
    -a query is string
    -i.e. 
        ```js
        
        query = '?name=sam&race=hobbit';

        req.query = {
            name: 'sam',
            race: 'hobbit'
        }
        ```


