YUI.add('user-tests', function (Y) {

    "use strict";

    var suite = new Y.Test.Suite('User Test Suite');

    suite.add(new Y.Test.Case({
        name: 'User',
        obj: null,

        setUp: function () {
            this.obj = new Y.User();
        },

        tearDown: function () {
            delete this.obj;
            this.obj = null;
        },

        'should return true': function () {
            var Assert = Y.Assert;

            Assert.isTrue(true);
        },

        'should instantiate Y.User object': function () {
            var Assert = Y.Assert;

            Assert.isObject(Y.User, this.obj);
        },

        'should return "Stanley" in the first name': function () {
            var Assert = Y.Assert;

            Assert.areEqual('Stanley', this.obj.getFirstName());
        },

        'should return "Ng" in the last name': function () {
            var Assert = Y.Assert;

            Assert.areEqual('Ng', this.obj.getLastName());
        },

        'should return "stanleyn@yahoo-inc.com" in the email': function () {
            var Assert = Y.Assert;

            Assert.areEqual('stanleyn@yahoo-inc.com', this.obj.getEmail());
        }
    }));

    Y.Test.Runner.add(suite);

}, '0.0.1', {
    requires: [
        'test', 'user'
    ]
});