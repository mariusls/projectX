$(document).ready(function() {

    var $form = $("form"),
        $successMsg = $(".alert");

    $.validator.addMethod("lettersOnly", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
    });

    $.validator.addMethod("numbersOnly", function(value, element) {
        return this.optional(element) || value == value.match(/^\d{8}/);
    })

    $form.validate({
        rules: {
            firstname: {
                required: true,
                lettersOnly: true
            },

            lastname: {
                required: true,
                lettersOnly: true
            },

            email: {
                required: true,
                email: true
            },

            mobile: {
                required: true,
                numbersOnly: true

            },

            appointmenttype: {
                required: true
            },

            postalcode: {
                required: true
            },

            customcheckbox: {
                required: true
            }
        },

        messages: {
            firstname: "Vennligst fyll inn gyldig fornavn",
            lastname: "Vennligst fyll inn gyldig etternavn",
            email: "Vennligst fyll inn gyldig e-post",
            mobile: "Vennligst fyll inn gyldig telefonnummer på åtte siffer",
            appointmenttype: "Vennlgist velg avtale-type",
            postalcode: "Vennligst velg nærmeste optiker",
            customcheckbox: "Vennligst godta at vi sender deg informasjon"
        },

    });
});


// Checkbox value, nødvendig?
/*
$(document).ready(function() {
    $('#custom-checkbox').click(function() {
        var checkbox = $('.checkbox-custom');

        if ((checkbox).prop('checked', false)) {
            checkbox.prop('checked', true);
        }
        else {
            checkbox.prop('checked', false);
        }
    });
});*/




/*$(document).ready(function() {
    
    $('form').submit(function(event) {

        $('.form-group').removeClass('has-error');
        $('.help-block').remove();
        
        var formData = {
            'firstname'         : $('input[name=firstname').val(),
            'lastname'          : $('input[name=lastname').val(),
            'email'             : $('input[name=email').val(),
            'phone'             : $('input[name=mobile').val(),
            'postal'            : $('input[name=postalcode').val()
        };

        $.ajax({
            type                : 'POST',
            url                 : 'validate-custom.php',
            data                : formData,
            dataType            : 'json',
            encode              : true
        })

        .done(function(data) {
            console.log(data);

            if ( ! data.success) {

                if (data.errors.firstname) {
                    $('#firstname-group').addClass('has-error');
                    $('#firstname-group').append('<div class="help-block">' + data.errors.firstname + '</div>');
                }

                if (data.errors.lastname) {
                    $('#lastname-group').addClass('has-error');
                    $('#lastname-group').append('<div class="help-block">' + data.errors.lastname + '</div>');
                }

                if (data.errors.email) {
                    $('#email-group').addClass('has-error');
                    $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>');
                }

                if (data.errors.phone) {
                    $('#mobile-group').addClass('has-error');
                    $('#mobile-group').append('<div class="help-block">' + data.errors.phone + '</div>');
                }

                if (data.errors.appointmenttype) {
                    $('#appointmenttype-group').addClass('has-error');
                    $('#appointmenttype-group').append('<div class="help-block">' + data.errors.appointmenttype + '</div>');
                

                if (data.errors.postal) {
                    $('#postalcode-group').addClass('has-error');
                    $('#postalcode-group').append('<div class="help-block">' + data.errors.postal + '</div>');
                }
            }
            else {
                $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                alert("Success!")
            }
        })

        event.preventDefault();
    });
});*/