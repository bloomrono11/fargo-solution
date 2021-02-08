$(document).ready(function () {

    let selectLabel = $('#subjectSelect');

    let parent = selectLabel.parent();
    let label = parent.find('label.subject-select-label');

    selectLabel.on('focusin', function () {
        label.addClass('active');
        console.log(parent);
        parent.css("color", "#4285f4");
    });
    selectLabel.on('focusout', function () {
        label.removeClass('active');
        parent.css("color", "#000");
    });

    contact.initialize();
});

let contact = {

    formId: 'contactForm',
    status: undefined,

    initialize: function () {
        let form = $('#' + this.formId);
        //Note for test purpose only
        // this.fillFormWithDummyValues();
        this.listenOnFormSubmit(form);
    },
    /**
     * This method is for listening on form submit
     * @param form
     */
    listenOnFormSubmit: function (form) {
        let me = this;
        form.on('submit', function (event) {
            event.preventDefault();
            me.validateForm(form);
        });
        $('#formSubmit').on('click', function (event) {
            event.preventDefault();
            me.validateForm(form);
        });
    },
    /**
     * Temporary to fill form with default values
     */
    fillFormWithDummyValues: function () {
        $('input[name=name]').val('Test1');
        $('input[name=email]').val('test@test.com');
        $('input[name=subject]').val('subject');
        $('textarea[name=message]').val('message description');
    },

    /**
     * Validate form
     * @param form {object} HTML form object
     * @returns {boolean} false to disable default form behavious
     */
    validateForm: function (form) {

        let status = $('#status');

        status.removeClass('red-text');
        status.removeClass('orange-text');
        status.removeClass('font-weight-bold');


        let name = form.find('#name').val();
        if (name === "") {
            status.html("Name cannot be empty");
            status.addClass('red-text');
            return false;
        }
        if (name.length < 4) {
            status.html("Name cannot be less than 4 characters");
            status.addClass('red-text');
            return false;
        }

        let email = form.find('#email').val();
        if (email.trim() === "") {
            status.html("Email cannot be empty");
            status.addClass('red-text');
            return false;
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {

                status.html("Email format invalid");
                status.addClass('red-text');
                return false;
            }
        }
        let subject = $('#subject').val();
        if (subject === "") {

            status.html("Subject cannot be empty");
            status.addClass('red-text');

            return false;
        }
        if (subject.length < 4) {
            status.html("Subject cannot be less than 4 characters");
            status.addClass('red-text');
            return false;
        }

        let message = $('#message').val();
        if (message === "") {

            status.html("Message cannot be empty");
            status.addClass('red-text');
            return false;
        }

        status.addClass('orange-text');
        status.addClass('font-weight-bold');
        status.html("Sending...");

        this.status = status;

        let formData = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message
        };

        this.ajaxContactForm(formData);

        return false;
        // $('#contact-form').submit();
    },

    ajaxContactForm: function (formData) {
        let me = this;
        // console.log(formData);
        $.ajax({

            url: "php/contact.php",
            type: "POST",
            data: formData,
            accept:'json',
            success: function (data) {

                // console.log(data);

                $('#status').text(data.message);
                if (data.code) { //If mail was sent successfully, reset the form.
                    let contactForm =$('#contactForm');
                    let inputs = contactForm.find("input");
                    for (let i = 0; i < inputs.length; i++) {
                        $(inputs[i]).val("");
                    }
                    contactForm.find('textarea').val('');
                    contactForm.find('select').val('');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // console.log(jqXHR, textStatus,errorThrown);
                if(errorThrown ==='Method Not Allowed') {
                    textStatus='server not reachable';
                }
                me.status.text(textStatus);
                me.status.addClass('red-text');
            }
        });
    }

};