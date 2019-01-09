var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodApp', {useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

/* var newTodo = new Todo({
    text: 'Cook a dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo ', doc);
}, (err) => {
    console.log('Unable to save todo');
}); */

/* var otherTodo = new Todo({
    text: '   Edit this video   '
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save todo', err);
}); */

// cvicenie

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var user = new User({
    email: 'andrew@example.com'
});

user.save().then((doc) => {
    console.log('User saved', doc);
}, (err) => {
    console.log('Unable to save user', err);
});