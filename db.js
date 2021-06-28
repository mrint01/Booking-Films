const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root123:root123@cluster0.cmxgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true  })
            .then(() => console.log('WORK.'))
            .catch((err) => console.log('NOT WORK. Raison :',err));