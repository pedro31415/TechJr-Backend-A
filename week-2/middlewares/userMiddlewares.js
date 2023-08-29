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

module.exports = {
    validateBody,
    validateEmail1
}