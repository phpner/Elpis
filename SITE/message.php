<?php header('Content-type: text/html; charset=utf-8');?>
<style>
    .thanks{
    font-size: 3rem;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    color: #545454;
    background: #d6d6d6;
    display: block;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 0 15px 2px #2b522661;
}

</style>
<?php 

setlocale(LC_ALL, "russian");
$monthes = array(
    1 => 'Января', 2 => 'Февраля', 3 => 'Марта', 4 => 'Апреля',
    5 => 'Мая', 6 => 'Июня', 7 => 'Июля', 8 => 'Августа',
    9 => 'Сентября', 10 => 'Октября', 11 => 'Ноября', 12 => 'Декабря'
);

$data = (date('d ') . $monthes[(date('n'))] . date(' Y, H:i:s'));


if($_POST['name']){
    $name = trim(strip_tags($_POST['name']));
}else{
    $name = "";
}
if($_POST['tel']){
    $phone = trim(strip_tags($_POST['tel']));
}else{
    $phone = "";
}

if($_POST['text']){
    $text = trim(strip_tags($_POST['text']));
}else{
    $text = "";
}


$body = "Имя: $name Телефон: $phone Дата: $data Сообщение: $text" ;

require_once($_SERVER['DOCUMENT_ROOT'] . '/phpmailer/PHPMailerAutoload.php'); //подключаем класс
$mail = new PHPMailer(); //вызываем класс

$mail->IsSMTP(); 
$mail->Host = 'smtp.mail.ru'; 
$mail->SMTPAuth = true; 
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->CharSet = 'utf-8'; //Устанавливаем кодировку
$mail->Username = 'phpner-2018@mail.ru'; 
$mail->Password = 'zxcvbnm2018'; 



$mail->SetLanguage('ru'); //для ошибок итд.
/*$mail->addAddress("imarkeventus@mail.ru","email1"); //куда отправлять список через ","
$mail->addAddress("zas@elpismed.ru","email2"); //куда отправлять список через ","*/
/*$mail->addAddress("2291464@gmail.com","phpner-2018@mail.ru"); //куда отправлять список через ","*/
$mail->addAddress("phpner@gmail.com","phpner-2018@mail.ru"); //куда отправлять список через ","
$mail->addAddress("phpner-2018@mail.ru","phpner-2018@mail.ru"); //куда отправлять список через ","
$mail->From = 'phpner-2018@mail.ru';
$mail->FromName = 'Элпис';
$mail->Subject = "ПРЕДРЕЙСОВЫЕ МЕДИЦИНСКИЕ ОСМОТРЫ В ВОРОНЕЖЕ И ОБЛАСТИ";
$mail->Body = $body;
$mail->IsHTML(true);
//отправка 
if(!$mail->Send()) {
echo "Mailer Error: " . $mail->ErrorInfo; //Выводит ошибку с учетом языка
} else {
echo "Мы Вам скоро перезвоним!";
}
/*header( 'Refresh: 0;' );*/
/*exit;*/
?>
<!-- <script>

    setInterval(function(){
        document.location.href = '/'
    },3000);
</script> -->