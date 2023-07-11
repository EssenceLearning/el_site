/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

// Ajax contact
$(document).ready(function () {
    var form = $('.el-contact-form')

    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
         $("<input />").attr("type", "hidden")
          .attr("name", "server")
          .attr("value", window.location.href)
          .appendTo($(form));

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: 'https://script.google.com/a/macros/essencelearning.in/s/AKfycbxr11RqAvmEDjFSxd02uHM06OPj6tTDI5DBaM-VKAmvqVtg_SSCZbdiExN1hNk69G9Jqw/exec',
            data: $(form).serialize()
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $('#contact-message').html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>Thank you for getting in touch. We will get back to you soon!</div>')
            .fadeIn();
            $(form)[0].style.display = 'none';
            setTimeout(() => { $(form)[0].reset(); $('#myModal').modal('hide'); $(form)[0].style.display = 'block'; }, 3000);
        }).fail(function(data) {
          // Set the message text.
          if (data.responseText !== '') {
              $('#contact-message').text(data.responseText);
          } else {
              $('#contact-message').html('<div class="alert alert-success" style="color: red" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>We apolgies that we failed to process the contact request, please contact us through our phone number!</div>')
            .fadeIn()
          }
        });
        event.preventDefault();
    });
  });


 $(document).ready(function(){
    $("#myModal").modal('show');
  });
  