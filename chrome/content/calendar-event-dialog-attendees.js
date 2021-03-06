/* ***** BEGIN LICENSE BLOCK *****
 * Version: GPL 3.0
 *
 * The contents of this file are subject to the General Public License
 * 3.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.gnu.org/licenses/gpl.html
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * -- Exchange 2007/2010 Calendar and Tasks Provider.
 * -- For Thunderbird with the Lightning add-on.
 *
 * This work is a combination of the Storage calendar, part of the default Lightning add-on, and 
 * the "Exchange Data Provider for Lightning" add-on currently, october 2011, maintained by Simon Schubert.
 * Primarily made because the "Exchange Data Provider for Lightning" add-on is a continuation 
 * of old code and this one is build up from the ground. It still uses some parts from the 
 * "Exchange Data Provider for Lightning" project.
 *
 * Author: Deepak Kumar
 * email: deepk2u@gmail.com
 *
 *
 * This code uses parts of the Microsoft Exchange Calendar Provider code on which the
 * "Exchange Data Provider for Lightning" was based.
 * The Initial Developer of the Microsoft Exchange Calendar Provider Code is
 *   Andrea Bittau <a.bittau@cs.ucl.ac.uk>, University College London
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * ***** BEGIN LICENSE BLOCK *****/
var Cu = Components.utils;

Cu.import("resource://exchangecalendar/ecFunctions.js");

if(window.arguments[0].opener=="exchWebService-onForEve" || window.arguments[0].opener=="exchWebService-onForward"){
	document.getElementById("all-day").disabled=true;
	document.getElementById("event-starttime").disabled=true;
	document.getElementById("event-endtime").disabled=true;
	var buttons = document.getElementsByTagName("button");
	for each (let bt in buttons){
		bt.disabled=true;
	}
}

/*
function exchEventAttendeeDialog(aDocument, aWindow)
{
	this._document = aDocument;
	this._window = aWindow;

}

exchEventAttendeeDialog.prototype = {

	onLoad: function _onLoad()
	{
dump(" >> onload\n");
		// Add the exchangeAutoComplete option.
		if (this._document.getElementById("attendees-list")) {
dump(" -- We have itemCount:"+this._document.getElementById("attendees-list").itemCount+"\n");
			for (var i=0; i< this._document.getElementById("attendees-list").itemCount; i++) {
				if (this._document.getElementById("attendeeCol3#"+i)) {
dump(" -- .. attendeeCol3#"+i+", autocompletesearch:"+this._document.getElementById("attendeeCol3#"+i).getAttribute("autocompletesearch")+"\n");
					var autocompletesearch = this._document.getElementById("attendeeCol3#"+i).getAttribute("autocompletesearch");
					if (autocompletesearch.indexOf("exchangeAutoCompleteSearch") == -1) {
						this._document.getElementById("attendeeCol3#"+i).setAttribute("autocompletesearch", autocompletesearch + " exchangeAutoCompleteSearch");
					}
				}
			}
		}
	},
}
var tmpEventAttendeeDialog = new exchEventAttendeeDialog(document, window);
window.addEventListener("load", function () { window.removeEventListener("load",arguments.callee,false); tmpEventAttendeeDialog.onLoad(); }, true);
*/
