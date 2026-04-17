<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<link rel="stylesheet" href="https://org.farmacontatto.it/PhsNews/lists/admin/ui/phplist-ui-bootlist/css/style.css" />

<script type="text/javascript">

window.onload = submitForm;

function submitForm() {

    successMessage = 'Thank you for your registration. Please check your email to confirm.';

    // $data = json_decode(file_get_contents("php://input"));

    var $nome = "Lauraaa";
    var $cognome = "Madoniniii";
    var $email  =  "achille.bonzini@gmail.com";
    var $telefono  =  "024239995";
    var $test3  =  "on";
    var $test4  =  "on";

    var mydata = "email="+ $email +"&attribute5="+ $nome +"&attribute6="+ $cognome +"&attribute1="+ $telefono +"&attribute3="+ $test3 +"&attribute4="+ $test4 +"&htmlemail=1&list%5B4%5D=signup&subscribe=subscribe&VerificationCodeX=";

    jQuery.ajax( {
        type: 'POST',
        data: mydata,
        url: 'https://org.farmacontatto.it/PhsNews/lists/?p=subscribe&id=2',
        dataType: 'html',
        success: function () {
            alert('ok');
        },
        error: function () { alert('Sorry, we were unable to process your subscription.'); }
    });
}
</script>


formtoken=8df73a8921d6d8fff4eac0b6af9ad51c&makeconfirmed=0&email=demo%40evershop.org&htmlemail=1&attribute5=aaaaa&attribute6=bbbbb&attribute1=1234567890&attribute4=on&list%5B2%5D=signup&list%5B3%5D=signup&VerificationCodeX=&subscribe=Iscrivimi+ai+servizi+selezionati
