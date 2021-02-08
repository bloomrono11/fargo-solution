$(document).ready(function () {

    publisher.initialize();
});

let publisher = {

    formId: 'signUpForm',
    errorMessage: '',
    errorInputIds: [],
    data: [],
    countries: ["India", "United States", "Singapore", "France", "United Kingdom", "Australia", "Japan", "China", "Other"],
    initialize: function () {

        let form = $('#' + this.formId);
        let numberInputs = form.find('input[data-type=number]');
        if (numberInputs.length > 0) {
            this.listenOnKeyUp(numberInputs);
        }
        this.initializeAutoCompleteCountry();

        form.submit(function () {
            return false;
        });
        let me = this;
        $('#submit').on('click', function () {
            me.storeFormDataOnChange();
        });
        // this.storeFormDataOnChange();
    },
    /**
     * This method is for auto complete country
     */
    initializeAutoCompleteCountry: function () {
        let me = this;
        $('#country').mdbAutocomplete({
            data: me.countries
        });
        // console.log($('#country'));
    },
    /**
     * This method is for input type text treated as number using a key up event handler
     * @param inputs
     */
    listenOnKeyUp: function (inputs) {

        for (let i = 0; i < inputs.length; i++) {
            $(inputs[i]).on('keyup', this.updateField);
        }
    },
    /**
     * This method is to update phone number and cal
     * @param valuePressed
     */
    updateField: function (valuePressed) {

        let keyValue = valuePressed.keyCode || valuePressed.which;
        let input = $(this);
        let value = input.val();

        if ((keyValue < 48 || keyValue > 57) && keyValue !== 8) {
            if (value.length > 1) {
                value = value.substr(0, value.length - 1);
            }
            input.val(value);
            return;
        }

        if (input.attr('name') === 'zipcode') {
            let country = 'US';//todo add the country implementation
            if (value.length > 5 && country === 'US') {
                input.val(value.substr(0, value.length - 1));
            } else if (value.length > 7) {
                input.val(value.substr(0, value.length - 1));
            }
            return;
        }

        if (value.length > 12) {
            input.val(value.substr(0, value.length - 1));
            return;
        }
        if ((value.length) % 3 === 0 && value.length < 5 && keyValue !== 8) {
            input.val(value + '-');
        } else if ((value.length) % 7 === 0 && value.length > 5 && keyValue !== 8) {
            input.val(value + '-');
        }
    },

    /**
     * This method is to store the form data onchange or submit
     */
    storeFormDataOnChange: function () {

        let form = $('#' + this.formId);
        let inputs = form.find('input');
        if (inputs.length < 1) return;
        this.clearData();
        for (let i = 0; i < inputs.length; i++) {

            //Note ignore fields that are not required for validation
            let input = $(inputs[i]);
            // console.log(input.attr('validate-field'));
            if (input.attr('validate-field') === undefined || input.attr('validate-field') === false) {
                continue;
            }

            if (input.attr('data-type') === 'number') {
                this.validateNumber(input);
            } else {
                this.validateValue(input);
            }
        }
        let errorMessage = this.errorMessage;

        if (errorMessage.trim() === '') {
            this.performSubmission();
        }
        this.errorMessage = '';
        this.showModalForInputError(errorMessage);
        this.handleModalErrorGoToBtn($('#formErrorModal'))

    },
    /**
     * This method is to validate numeric fields zipcode and phone number
     * @param input the input field of form element of html as a jquery object
     */
    validateNumber: function (input) {

        let name = input.attr('name');
        let value = input.val();
        let me = this;
        // console.log(value);
        let phoneRegex = /[0-9][-]/g, zipCodeRegex = /[0-9]/g;

        if (value !== undefined && value.length > 1 && phoneRegex.test(value)) {
            me.addToData(name, value);
            return;
        }
        if (input.attr('name') === 'zipcode') {
            if (value !== undefined && value.length > 1 && zipCodeRegex.test(value)) {

                me.addToData(name, value);
                return;
            }
        }

        this.errorMessage += 'Please enter a valid value for ' + input.attr('name') + '<br>';
        this.errorInputIds.push(input.attr('id'));

    },

    /**
     * This method is to validate email, user name and address fields
     * @param input the input field of form element of html as a jquery object
     */
    validateValue: function (input) {
        let value = input.val();
        let name = input.attr('name');
        let me = this;
        let errorMessage = '';
        // console.log(input, name);
        if ((value.length < 1 || value.trim() === '') && name !== 'address2') {
            this.errorMessage += 'Please enter a value for ' + name + '<br>';
            this.errorInputIds.push(input.attr('id'));
            return;
        }
        if (name.toLowerCase().includes('name') || name === 'city' || name === 'state') {
            let nameRegex = /[a-z]/gi;
            if (nameRegex.test(value)) {
                me.addToData(name, value);
            } else {
                this.errorMessage += 'Please enter a valid value for ' + name + '<br>';
                this.errorInputIds.push(input.attr('id'));
            }
        } else if (name.toLowerCase().includes('country')) {
            for (let i = 0; i < this.countries.length; i++) {
                if (value.trim() === this.countries[i]) {
                    me.addToData(name, value);
                    return;
                }
            }

            this.errorMessage += 'Please select a valid option/value for ' + name + '<br>';
            this.errorInputIds.push(input.attr('id'));

        } else if (name.includes('email')) {
            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (emailRegex.test(value)) {

                me.addToData(name, value);
            } else {
                this.errorMessage += 'Please enter a valid value for ' + name + '<br>';
                this.errorInputIds.push(input.attr('id'));
            }
        } else {
            if (name === ('address1')) {
                if (value.length > 1 && value.trim() !== '') {
                    me.addToData(name, value);
                } else {
                    this.errorMessage += 'Please enter a valid value for ' + name + '<br>';
                    this.errorInputIds.push(input.attr('id'));
                }
            }
            if (name === ('address2')) {
                if (value.length > 1 && value.trim() !== '') {
                    me.addToData(name, value);
                }
            }
        }
    },
    /**
     * This method is to add to data array
     * @param name
     * @param value
     */
    addToData: function (name, value) {
        this.data.push({name: name, value: value});
    },
    /**
     * This method is to delete from data array
     * @param index
     */
    removeFromData: function (index) {
        this.data.splice(index, 1);
    },
    /**
     * This method is to clear the data from data array
     */
    clearData: function () {
        this.data = [];
    },
    /**
     * This method is for displaying a modal for the form error
     * @param errorMessage
     */
    showModalForInputError: function (errorMessage) {
        // console.log(errorMessage);
        if (errorMessage.length < 2 || errorMessage.trim() === '') return;

        $('#errorMessage').html(errorMessage);
        $('#errorFormFocusBtn').attr('data-link', this.errorInputIds[0]);
        $('#formErrorModal').modal('show');
    },
    /**
     * This method is to handle
     * @param modal
     */
    handleModalErrorGoToBtn: function (modal) {

        $('#errorFormFocusBtn').on('click', function () {

            $(this).off('click');
            let errorItemId = $(this).attr('data-link');
            modal.modal('hide');
            // console.log($(this));
            // console.log(errorItemId);
            $('#' + errorItemId).focus();
        });
    },
    /**
     * This method is to submit form data
     */
    performSubmission: function () {

        this.data.push({name: "signUpForm", value: $('#' + this.formId).attr('name')});
        // console.log(JSON.stringify(this.data));
        // return;
        //todo complete this part later
        let me = this;
        let status = $('#status');
        $.ajax({
            //Todo fix this later based on server setup
            url: "php/advertiseOrPublish.php",
            type: "POST",
            data: JSON.stringify(me.data),
            accept: 'json',
            success: function (data) {
                // console.log(data);
                status.text("Status: " + data.message);

                status.addClass('green-text');
                status.removeClass('text-hide red-text');

                if (data.code) { //If mail was sent successfully, reset the form.
                    let publisherForm = $('#signUpForm');
                    let inputs = publisherForm.find("input");
                    for (let i = 0; i < inputs.length; i++) {
                        $(inputs[i]).val("");
                    }
                    publisherForm.find('select').val('');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
                if (errorThrown === 'Method Not Allowed') {
                    textStatus = 'server not reachable';
                }
                status.text("Status: " + textStatus);
                status.addClass('red-text');
                status.removeClass('text-hide green-text');
            }
        });
    }
};