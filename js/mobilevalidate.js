jQuery(function ($) {

    jQuery.validator.addMethod("country", function (value, element) {
        return this.optional(element) || /^[^+]/.test(value);
    }, "Enter Number Without Country Code");
    jQuery.validator.addMethod("number", function (value, element) {
        return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    }, "Invalid mobile number format");

    jQuery.validator.addMethod("mobile", function (value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid mobile number");

    jQuery.validator.addMethod("alphabets", function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    }, "Please enter Alphabets only");

    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please enter a valid email address.");

    jQuery.validator.addMethod("intlTelNumber", function(value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid International Phone Number");




    if ($('#contact-form').length > 0) {
        $('#contact-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                lname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number:true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname:
                        {
                            required: "Please enter first name"
                        },
                    lname:
                        {
                            required: "Please enter last name"
                        },
                    mobile:
                        {
                            required: "Please enter mobile no",
                            minlength: "Min 10 digit mobile number",
                            maxlength: "Invalid mobile number"
                        },
                    email:
                        {
                            required: "Please enter email",
                            email: "Please enter valid email address"
                        }
                }
        });
    }

    if ($('#price-popup').length > 0) {
        $('#price-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number:true,
                    minlength: 10,
                    maxlength: 10
                }
            },
            messages:
                {
                    fname:
                        {
                            required: "Please enter name"
                        },
                    mobile:
                        {
                            required: "Please enter mobile no",
                            minlength: "Min 10 digit mobile number",
                            maxlength: "Invalid mobile number"
                        }
                }

        });
    }

    if ($('#main-popup').length > 0) {
        $('#main-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number:true,
                    minlength: 10,
                    maxlength: 10
                }
            },
            messages:
                {
                    fname:
                        {
                            required: "Please enter name"
                        },
                    mobile:
                        {
                            required: "Please enter mobile no",
                            minlength: "Min 10 digit mobile number",
                            maxlength: "Invalid mobile number"
                        }
                }



        });
    }

    if ($('#float-form').length > 0) {
        $('#float-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number:true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages:
                {
                    fname:
                        {
                            required: "Please enter name"
                        },
                    mobile:
                        {
                            required: "Please enter mobile no",
                            minlength: "Min 10 digit mobile number",
                            maxlength: "Invalid mobile number"
                        },
                    email:
                        {
                            required: "Please enter email",
                            email: "Please enter valid email address"
                        }
                }
        });
    }





});
