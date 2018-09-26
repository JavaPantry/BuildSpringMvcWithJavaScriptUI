function confirm_entry2(msg)
{	
	input_box=confirm(msg);
	if (input_box==true) { 	
			// Output when OK is clicked
			window.location.href = "/euo/repairOnline.htm";
	}
}

/*
 * see original function postalCodeToObtainAddress(flag, langLoc) in pulldownPre.js
 * flag='shipping' in shippingAddressTmpl.jsp
 * flag='billing' in processOrder.jsp
 */
function getCityProvinceByPostalCode() {
    var postalCodeField = document.getElementById('postCode');
    if(!postalCodeField.checkValidity()){
        return;
    }
    var postalCode = postalCodeField.value;
	var req = newXMLHttpRequest();
	var requestUrl = "/euo/postalCodeCheck.xml?postalCode=" + postalCode;
	var handlerFunction = doReadyStateChange(req, _populateAddress);
	req.onreadystatechange = handlerFunction;
	req.open("GET", requestUrl, true);
	req.send(null);
}

function _populateAddress(addressXml) {
	var statusMsg = communicationErrorMsg;
    var jqPostCodeFld = $('#postCode');
    var $group = jqPostCodeFld.closest('.form-group');
    var $block = $group.find('.help-block.with-errors');

    if (addressXml != null && addressXml != undefined){
	    var address = addressXml.getElementsByTagName("address")[0];
	    if (address != undefined){
	        var status = address.getElementsByTagName("hasErr")[0].firstChild.nodeValue;
	        if (status == '0'){
	            var provinceCode = address.getElementsByTagName("provinceCode")[0].firstChild.nodeValue;
	            var provinceLabel = address.getElementsByTagName("provinceLabel")[0].firstChild.nodeValue;
	            var city = address.getElementsByTagName("city")[0].firstChild.nodeValue;
	            $block.empty();
	            $group.removeClass('has-error has-danger has-success');
	            document.getElementById('province_text').value = provinceLabel;
	            document.getElementById('city_text').value = city;
	            return;
	        }else{
	        	statusMsg = address.getElementsByTagName("statusMsg")[0].firstChild.nodeValue;
	        }
	    }
    }
    $block.empty().append(statusMsg);
    $group.addClass('has-error has-danger');
    document.getElementById('province_text').value = '';
    document.getElementById('city_text').value = '';
}


/*
function getCityProvinceByPostalCode(flag, langLoc) {
	var frm = document.forms[0];
	
	
	var postCodeFld = document.getElementById('postCode');
	var jqPostCodeFld = $('#postCode'); 
    //var pCode = document.getElementById('postCode').value;
    //var pCodeValid = document.getElementById('postCode').checkValidity();
    var pCode = postCodeFld.value;
    var pCodeValid = postCodeFld.checkValidity()
    if(!pCodeValid){
    	return;
    }

    if(pCodeValid)
    {
		var req = newXMLHttpRequest();
		var requestUrl = "/euo/postalCodeCheck.xml?postalCode=" + document.getElementById('postCode').value +"&flag="+flag;
		var handlerFunction = doReadyStateChange(req, _populateAddress);
		req.onreadystatechange = handlerFunction;
	    req.open("GET", requestUrl, true); 
	    req.send(null);
	}
}

function _populateAddress(addressXml) {
	if (addressXml == null || addressXml == undefined){
		return;
	}
    //Add new states list to the state combo box.
    var address = addressXml.getElementsByTagName("address")[0];
	var frm = document.forms[0];
	var getAddress = false;
	var langLoc = sessionLocale;//document.getElementById('LANGUAGE').value;
    if (address != undefined){
		// Check status
		var status = address.getElementsByTagName("hasErr")[0].firstChild.nodeValue;
		if (status == '0'){
			getAddress = true;
			// Loop over the items in the cart
			var provinceCode = address.getElementsByTagName("provinceCode")[0].firstChild.nodeValue;
			// Extract the text nodes
			var provinceLabel = address.getElementsByTagName("provinceLabel")[0].firstChild.nodeValue;
			var city = address.getElementsByTagName("city")[0].firstChild.nodeValue;
	     	var street = address.getElementsByTagName("street")[0].firstChild.nodeValue;
	     	document.getElementById('province_text').value = provinceLabel;
	     	//request to ignore address information, let user key-in

	     	document.getElementById('city_text').value = city;
     	}
 	}
 	if (!getAddress) {
 		// Allow the user input the city and province
 		if (langLoc == "en") {
 			document.getElementById('lbl_postCode').innerHTML = '<label id="lbl_postCode" class="midredbold">Postal Code</label>';
 			document.getElementById('ErrorSummary').innerHTML = '<span class="midredbold">Postal Code can not found</span>';
 		}else {
 			document.getElementById('lbl_postCode').innerHTML = '<label id="lbl_postCode" class="midredbold">Code postal</label>';
 			document.getElementById('ErrorSummary').innerHTML = "<span class='midredbold'>Le code postal que vous avez entré ne peut être trouvé</span>";
 																						  
 		}
     	document.getElementById('province_text').value = '';
     	document.getElementById('city_text').value = '';
 	}
}*/

function ltrim(str) { 
	for(var k = 0; k < str.length && isWhitespace(str.charAt(k)); k++);
	return str.substring(k, str.length);
}
function rtrim(str) {
	for(var j=str.length-1; j>=0 && isWhitespace(str.charAt(j)) ; j--) ;
	return str.substring(0,j+1);
}
function trim(str) {
	return ltrim(rtrim(str));
}
function isWhitespace(charToCheck) {
	var whitespaceChars = " \t\n\r\f";
	return (whitespaceChars.indexOf(charToCheck) != -1);
}

if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}



