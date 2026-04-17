<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<link rel="stylesheet" href="https://org.farmacontatto.it/PhsNews/lists/admin/ui/phplist-ui-bootlist/css/style.css" />

<div id="overlay">
    <div class="cv-spinner">
        <span class="spinner"></span>
    </div>
</div>

<form method="post" name="subscribeform" id="subscribeform" enctype="multipart/form-data">
    <table border=0>
        <tr>
            <td><div class="required">Email *</div></td>
            <td class="attributeinput"><input type=text name="email" value="" id="email" size="40"></td>
        </tr>
        <tr>
            <td><div class="required">Nome *</div></td>
            <td class="attributeinput">
                <input type=text name="attribute5" id="attribute5
                " class="attributeinput" size="40" value="">
            </td>
        </tr>
        <tr>
            <td><div class="required">Cognome *</div></td>
            <td class="attributeinput">
                <input type=text name="attribute6" id="attribute6" class="attributeinput" size="40" value="">
            </td>
        </tr>
        <tr>
            <td><div class="required">Telefono</div></td>
            <td class="attributeinput">
                <input type=text name="attribute1" id="attribute1" class="attributeinput" size="40" value="">
                
            </td>
        </tr>

        <tr>
            <td></td>
            <td class="attributeinput">
            <input type="checkbox" name="attribute3" value="on"  class="attributeinput" id="attribute3" />
            <span class="required"><label for="attribute3">Dichiaro di essere maggiorenne *</label></span>
        </td>
    </tr>        
    <tr>
        <td></td>
        <td class="attributeinput">
        <input type="checkbox" name="attribute4" value="on"  class="attributeinput" id="attribute4" /></span>
            <label for="attribute4">Acconsento al trattamento dei miei dati personali in base<br> all’art. 13 del D. Lgs. 196/2003 e all’art. 13 GDPR 679/16 *</label>
            </td>
        </tr>
    </table>
    <input type=hidden name="htmlemail" value="1">
    <input type="hidden" name="list[4]" value="signup"  />
    <input type="hidden" name="subscribe" value="subscribe"/>
    <div style="display:none"><input type="text" name="VerificationCodeX" value="" size="20"></div>
    <button class='button' 
        onclick="if (checkform()) {submitForm();} return false;"
    >Subscribe</button>
    <div id="result" style="color: red;"></div>
</form>

<style type="text/css">
#overlay{	
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  height:100%;
  display: none;
  background: rgba(80,80,80,0.3);
}
.cv-spinner {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px #ddd solid;
  border-top: 4px #2e93e6 solid;
  border-radius: 50%;
  animation: sp-anime 0.8s infinite linear;
}
@keyframes sp-anime {
  100% { 
    transform: rotate(360deg); 
  }
}
.is-hide{
  display:none;
}
</style>

<script type="text/javascript">

function checkform()
{
    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!(re.test(jQuery("#email").val()))) {
        jQuery("#result").empty().append("Please enter a valid email address");
        jQuery("#email").focus();
        return false;
    }
    if (jQuery("#attribute1").val() == "") {
        jQuery("#result").empty().append("Please enter your " + "First name");
        jQuery("#attribute1").focus();
        return false;
    }
    if (jQuery("#attribute4").val() == "") {
        jQuery("#result").empty().append("Please enter your " + "First name");
        jQuery("#attribute4").focus();
        return false;
    }
    if (jQuery("#attribute5").val() == "") {
        jQuery("#result").empty().append("Please enter your " + "First name");
        jQuery("#attribute5").focus();
        return false;
    }
    if (jQuery("#attribute6").val() == "") {
        jQuery("#result").empty().append("Please enter your " + "First name");
        jQuery("#attribute6").focus();
        return false;
    }

    return true;
}

function submitForm() {
    successMessage = 'Thank you for your registration. Please check your email to confirm.';
    data = jQuery('#subscribeform').serialize();
    jQuery.ajax( {
        type: 'POST',
        data: data,
        url: 'https://org.farmacontatto.it/PhsNews/lists/?p=subscribe&id=2',
        dataType: 'html',
        beforeSend: function () {
                $("#overlay").fadeIn(300);
            },
        success: function (data, status, request) {
            jQuery("#result").empty().append(data != '' ? data : successMessage);
            jQuery('#attribute1').val('');
            jQuery('#attribute3').val('');
            jQuery('#attribute4').val('');
            jQuery('#attribute5').val('');
            jQuery('#attribute6').val('');
            jQuery('#email').val('');
            $("#overlay").fadeOut(300);
        },
        error: function (request, status, error) { alert('Sorry, we were unable to process your subscription.'); }
    });
}

</script>