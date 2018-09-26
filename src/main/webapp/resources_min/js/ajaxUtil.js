// ajax.js
/*******************************************************************************
 * AJAX XMLHttpRequest object define
 ******************************************************************************/
function newXMLHttpRequest() {
	var xmlreq = false;
	if (window.XMLHttpRequest) {
		// Create XMLHttpRequest object in non-Microsoft browsers
		xmlreq = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// Create XMLHttpRequest via MS ActiveX
		try {
			// Try to create XMLHttpRequest in later versions
			// of Internet Explorer
			xmlreq = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e1) {
			// Failed to create required ActiveXObject
			try {
				// Try version supported by older versions
				// of Internet Explorer
				xmlreq = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e2) {
				// Unable to create an XMLHttpRequest with ActiveX
			}
		}
	}
	return xmlreq;
}

/**************************************************
 AJAX handler function
 **************************************************/
function doReadyStateChange(req, responseXmlHandler) {
	// Return an anonymous function that listens to the 
	// XMLHttpRequest instance
	return function() {
		// If the request's status is "complete"
		if (req.readyState == 4) {
			// Check that a successful server response was received
			if (req.status == 200) {
				// Pass the XML payload of the response to the 
				// handler function
				responseXmlHandler(req.responseXML);
			} else {
				// An HTTP problem has occurred
				alert("HTTP error: " + req.status);
			}
		}
	}
}

