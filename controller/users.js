// const User = require('../user.json');
const User = require('../user.json');

module.exports = {
    // Getall: async (req, res, next) => {
    //    await 
    //           res.status(200).json(User); 
    //         User.find({id:"1"});
    // },

    Getall: async (req, res, next) => {
        const filteredUsers = User
        res.json(filteredUsers);
    },
    index: async (req, res, next) => {
        // Get all the cars!
        const filters = req.query;
        const filteredUsers = User.filter(user => {
            let isValid = true;
            for (key in filters) {
                console.log(key, user[key], filters[key]);
                isValid = isValid && user[key] == filters[key];
            }
            return isValid;
        });
        res.send(filteredUsers);

    },

    getpage: async (req, res, next) => {
        //pageination
                    const page = parseInt(req.query.page)
                    const limit= parseInt(req.query.limit)
            
                    const startIndex = (page - 1) * limit
                    const endIndex = page * limit
            
                    const results = {}
            
                    if(endIndex < User.length){
                        results.next = {
                            page: page + 1,
                            limit: limit
                        }    
                    }
                 
                    if(startIndex > 0) {
                        results.previous = {
                            page: page - 1,
                            limit: limit
                        }
                    }
        
                    results.results = User.slice(startIndex , endIndex)
                    // res.json(results)
                    res.json(results)
                    next()
                
       

    },
  
    
};

// function paginationResults(model) {
//     return(req , res, next) => {
//         const page = parseInt(req.query.page)
//         const limit= parseInt(req.query.limit)

//         const startIndex = (page - 1) * limit
//         const endIndex = page * limit

//         const results = {}

//         if(endIndex < model.length){
//             results.next = {
//                 page: page + 1,
//                 limit: limit
//             }    
//         }
     
//         if(startIndex > 0) {
//             results.previous = {
//                 page: page - 1,
//                 limit: limit
//             }
//         }


//         results.results = model.slice(startIndex , endIndex)
//         // res.json(results)
//         res.paginationResults = results
//         next()
//     }
// }