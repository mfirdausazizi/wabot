// Regular expression pattern for Malaysian mobile numbers
var mobilePattern = /^(01)[0-46-9]-*[0-9]{7,8}$/;

$('#prospect_form').validate({
  rules: {
    phone_number: {
      required: true,
      pattern: mobilePattern
    }
  },
  messages: {
    phone_number: {
      required: "Please enter your phone number",
      pattern: "Please enter a valid Malaysian mobile number"
    }
  },
  submitHandler: function(form) {
    // Serialize form data
    var formData = $(form).serialize();
    console.log(formData);

    // Send form data to the external page using AJAX
    $.ajax({
      url: webhook_url,
      type: 'POST',
      data: formData,
      success: function(response) {
        // Handle success response if needed
        console.log('Form data sent successfully', response);
        form.submit();
      },
      error: function(xhr, status, error) {
        // Handle error if needed
        console.log('Error sending form data:', error);
      }
    });
  }
});
