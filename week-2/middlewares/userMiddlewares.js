try {
    function validateEmail1(email) {
        let re = /\S+@acad.ifma.edu.br+/;
        return re.test(email);
      }
} catch {
    return console.log("Fuction Erro!")
}

const validateBody = (req, res, next) => {
    const {body} = req;
    if(body.name === undefined || body.email === undefined || body.password === undefined){
        const missingFields = {};
    
    if (body.name === undefined || body.name === '') {
        missingFields.name = "Name is missing";
    }
    
    if (body.email === undefined || body.email === '') {
        missingFields.email = "Email is missing";
    }
    
    if (body.password === undefined || body.password === '') {
        missingFields.password = "Password is missing";
    }
    
    return res.status(400).json(missingFields);
    }

    next();
}

const validateToken = (req, res, next) => {
    const {body} = req
    if(body.email === undefined){
             return res.status(404).json({message: "This email is invaled"})
      }

    next();
}

const validateTokenEmail = (req, res, next) => {
    const {body} = req
    if (body.email === undefined || body.email === '') {
        return res.status(400).json({message: "This email is invaled"})
    }

    next()
}

module.exports = {
    validateBody,
    validateEmail1,
    validateToken,
    validateTokenEmail
}