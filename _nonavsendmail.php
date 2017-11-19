<?php ob_start();
$fromemail="No-Reply <flynnduism@gmail.com>"; // change here if you want
$toemail="flynnduism@gmail.com";   // change here if you want
$sub="Ronan and Amiee - Wedding RSVP";          // change here if you want
$success_page_name="cheers.html";

$contact = $_POST['optin'];

////// do not change in following
if($_SERVER['REQUEST_METHOD']=="POST")
{
$fieldnm_1=str_replace ( array("\n"), array("<br>"),trim($_REQUEST['fieldnm_1']));  
$fieldnm_2=str_replace ( array("\n"), array("<br>"),trim($_REQUEST['fieldnm_2']));
$fieldnm_3=str_replace ( array("\n"), array("<br>"),trim($_REQUEST['fieldnm_3']));

$contentmsg=stripslashes("<br><b><font style=color:#CC3300>$sub</font></b><br>
<table width=708 border=0 cellpadding=2 cellspacing=1 bgcolor=#CCCCCC>

<tr>
      <td width=165 align=right valign=top bgcolor=#FFFFFF><B>Response: *:</b> </td>
      <td width=565 align=left valign=top bgcolor=#FFFFFF>$contact</td>
</tr>

<tr>
      <td width=165 align=right valign=top bgcolor=#FFFFFF><B>Name(s) of guests: *:</b> </td>
      <td width=565 align=left valign=top bgcolor=#FFFFFF>$fieldnm_3</td>
</tr>

</table>
");

////
$headers  = "MIME-Version: 1.0
";
$headers .= "Content-type: text/html; charset=iso-8859-1
";
				
$from=$fromemail;
				
$headers .= "From: ".$from." 
";
				
@mail($toemail,$sub,$contentmsg,$headers);
				
				
header("Location:$success_page_name");

}
?>

