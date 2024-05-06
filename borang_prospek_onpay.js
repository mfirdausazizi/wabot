// Submit data to webhook before form submission
$('#prospect_form').validate({
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
