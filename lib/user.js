YUI.add('user', function (Y) {
    
    Y.User = function () {
        this.firstName = "Stanley";
        this.lastName = "Ng";
        this.email = "stanleyn@yahoo-inc.com";
    };

    Y.User.prototype = {

        getFirstName: function () {
            return this.firstName;
        },

        getLastName: function () {
            return this.lastName;
        },

        getEmail: function () {
            return this.email;
        }

    };

}, '0.0.1', {
    requires: [
    ]
});