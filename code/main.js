function RegEx() {
    var email = document.getElementById('mail');
    var first_name = document.getElementById('firstname');
    var last_name = document.getElementById('lastname');
    var id = document.getElementById('cin');
    
    var filter_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var filter_name = /^[a-zA-Z].*[\s.]*$/;
    var filter_id = /^[a-zA-Z]{1,2}\d{6}$/;
    var filter_contact = /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!filter_email.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus();
        return false;
    }
    if (!filter_name.test(first_name.value)) {
        alert('Please provide a valid full name');
        first_name.focus();
        return false;
    }
    if (!filter_name.test(last_name.value)) {
        alert('Please provide a valid full name');
        last_name.focus();
        return false;
    }
    if (!filter_id.test(id.value)) {
        alert('Please provide a valid cin');
        id.focus();
        return false;
    }
    if (!filter_contact.test(contact.value)) {
        alert('Please provide a valid phone number');
        contact.focus();
        return false;
    }
    return true;
}