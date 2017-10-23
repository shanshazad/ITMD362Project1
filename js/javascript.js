function buttonSuccess()
{
  var a=document.forms["signup_form"]["first_name_field"].value;
  var b=document.forms["signup_form"]["last_name_field"].value;
  var c=document.forms["signup_form"]["email_field"].value;
  var d=document.forms["signup_form"]["password_field"].value;
  
if (a==null || a=="" || b==null || b=="" || c==null || c=="" || d==null || d=="")
  {
    alert('Fields cannot be left blank');
	return false;
  }
  else if (document.signup_form.check1.checked == false)
  {
    alert('You must agree to our Terms and Services');
	return false;
  }
    document.getElementById("signup_form").submit();
};