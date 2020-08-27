$(document).ready(
    function () {
        home.initialize();
    });
let home = {

    status: undefined,
    subscribed: false,
    initialize: function () {
        $('#subscriptionForm').submit(false);
        this.listenOnSubscribeButton();
    },
    /**
     * This method is to listen on the form's submit button for subscription from inex.html
     */
    listenOnSubscribeButton: function () {

        let me = this;
        //Note this is to disable form submission by devs when subscription is done and element is hidden
        if (me.subscribed === true) {
            return;
        }
        $('#subscriptionSubmit').on('click', function () {

            let subscriptionForm = $('#subscriptionForm');
            let email = subscriptionForm.find('#email');
            email = $(email);

            let name = subscriptionForm.find('#name');
            name = $(name);

            me.status = $(subscriptionForm.find('#subscriptionStatus'));
            if (email.length < 1 || name.length < 1 || me.status.length < 1) {
                console.warn('Invalid html content found!!!');
                return;
            }
            let isValid = me.validateSubscriptionData(name, email);
            if (isValid === false) return;
            me.subscribeToFSI(name, email);
        });

    },
    /**
     * This method is for form validation of subscription data
     * @param name {Object} Name of the subscriber as a JQuery object
     * @param email {Object} Email of the subscriber as a JQuery object
     * @returns {boolean} true if valid form data, false otherwise
     */
    validateSubscriptionData: function (name, email) {

        if (this.status.hasClass('text-hide') === false) {
            this.status.addClass('text-hide');
        }
        this.status.html('');
        if (email.val() === undefined || email.val().length < 1 || email.val().trim() === '') {
            this.status.removeClass('text-hide').html('<span class="red-text"> <b>Email</b> cannot be empty</span>');
            email.focus();
            return false;
        }
        if (name.val() === undefined || name.val().length < 1 || name.val().trim() === '') {
            this.status.removeClass('text-hide').html('<span class="red-text"><b>Name</b> cannot be empty</span>');
            name.focus();
            return false;
        }

        let nameRegex = /[a-z]/gi;
        if (!nameRegex.test(name.val())) {
            return false
        }
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(email.val())) {
            this.status.removeClass('text-hide').html('<span class="red-text">Please enter a valid <b>Email</b></span>');
            return false
        }

        return true;
    },
    /**
     * This method is to make the subscription call to fsi
     * @param name {Object} Name of the subscriber as a JQuery object
     * @param email {Object} Email of the subscriber as a JQuery object
     *  //todo implement back end for subscription
     */
    subscribeToFSI: function (name, email) {

        let data = {}, me = this;
        data[name.attr('name')] = name.val();
        data[email.attr('name')] = email.val();
        $.ajax({
            url: '/subscribe.php',
            method: 'post',
            timeout: '120000',
            data: JSON.stringify(data),
            crossDomain: true,

            success: function () {
                let text = '<span class="green-text font-weight-bolder">Subscribed Successfully</span>';
                me.status.removeClass('text-hide');
                me.status.html(text);

                //hide form
                $('#subscriptionForm').hide();
                // clear element data
                name.val('');
                email.val('');
                //on successful subscription, disable the form completely from js
                me.subscribed = true;
            },
            error: function () {
                let text = '<span class="red-text font-weight-bolder">Failed to subscribe. Please try again later</span>';
                me.status.removeClass('text-hide');
                me.status.html(text);
            }
        });
    }
};