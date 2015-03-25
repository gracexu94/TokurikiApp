var overlay = function(place) {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
	overlay = document.querySelector( 'div.overlay' ),
	closeBttn = overlay.querySelector( 'button.overlay-close' );

	if (place===0) {
		document.getElementById("overlay").innerHTML = 
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
			+'<div class="overlay_content">'
			+	'<img class="overlay_pic" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Koryuji_otera.jpg">'
			+	'<big> Kōryūji 広隆寺 </big>'
			+	'</br>'
			+	'<small> ※ Notes: None in particular! </small>'
			+	'<p> Kōryū-ji (広隆寺) is a Shingon temple in Uzumasa, Ukyō Ward, Kyoto, Japan. The temple is also known by the names Uzumasa-dera (太秦寺) and Kadono-dera (葛野寺), and was formerly known as Hatanokimi-dera (秦公寺), Hachioka-dera (蜂岡寺) and Hōkō-ji (蜂岡寺).</p>'
			+	'<p>Kōryū-ji is said to be the oldest temple in Kyoto, having been constructed in 603 by Hata no Kawakatsu upon receiving a Buddhist statue from Prince Shōtoku. Fires in 818 and 1150 destroyed the entire temple complex, but it was rebuilt several times since.'  
			+	'</br><a target="_blank" href="http://en.wikipedia.org/wiki/Kōryū-ji">Read More>></a> </br></p>'		
			+'</div>'
			+'<nav>'
			+	'<ul>'
			+		'<li><button type="button" onclick="showDirections(0)">Show Directions</button><li>'
			+	'</ul>'
			+'</nav>';
	} else if (place===1) {
		document.getElementById("overlay").innerHTML = 
	    '<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
	    +'<div class="overlay_content"> '
	    +'<img class="overlay_pic" src="img/kyotomuseum.jpg">'
	    +'<big> Kyoto National Museum </big>'
	    +'</br>'
	    +'<small> ※ Notes: Free general admission for Doshisha University students with ID. </small>'
	    +'<p> Opened in 1897, Kyoto National Museum displays a large collection of pre-modern art.  The Main Exhibition Hall and Collections Galleries display the regular exhibitions, while the Special Exhibition Hall is reserved for special exhibits when they are displayed.  While some of the exhibits have a permenant place in the museum, other exhibits, such as the paintings and calligraphy, are changed on a regular basis.'
	    +'</br><a target="_blank" href="http://en.wikipedia.org/wiki/Kyoto_National_Museum">Read More>></a> </br></p>'       
	    +'</div>' 
	    +'<nav>'
	    +'<ul>'
	    +    '<li><button type="button" onclick="showDirections(1)">Show Directions</button><li>'
	    +'</ul>'
	    +'</nav>';    
	} else if (place===2) {
		document.getElementById("overlay").innerHTML = 
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
	    +'<div class="overlay_content">'
	    +'<img class="overlay_pic" src="img/sanju.jpg">'
	    +'<big> Sanjūsangen-dō 三十三間堂 </big>'
	    +'</br>'
	    +'<small> ※ Notes: None in particular! </small>'
	    +'<p> Located in the Higashiyama district of Kyoto, Sanjūsangen-dō is officially called "Rengeō-in" (蓮華王院), meaning "Hall of the Lotus King."  The temple name literally translates to "hall with thirty-three spaces between columns," and is recognized as the longest wooden building in Japan. It was built by Taira no Kiyomori under the command of Emperor Go-Shirakawa in 1164, and then rebuilt in 1266 after being destroyed in a fire.'
	    +'Inside the temple are 1001 Thousand-Armed Kannon statues. One large Kannon sits in the middle, with 500 golden Kannon on either side.'
	    +'</br><a target="_blank" href="http://en.wikipedia.org/wiki/Sanj%C5%ABsangen-d%C5%8D">Read More>></a> </br></p>'       
	    +'</div>' 
	    +'<nav>'
	    +'<ul>'
	    +    '<li><button type="button" onclick="showDirections(2)">Show Directions</button><li>'
	    +'</ul>'
	    +'</nav>';     
	} else if (place===3) {
		document.getElementById("overlay").innerHTML = 
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
        +'<div class="overlay_content">'
        +'<img class="overlay_pic" src="img/ginkakuji.jpg">'
        +'<big> Ginkakuji 銀閣寺</big>'
        +'</br>'
        +'<small> ※ Notes: None in particular! </small>'
        +'<p> Ginkaku-ji (銀閣寺, lit. "Temple of the Silver Pavilion"), officially named Jishō-ji (慈照寺, lit. "Temple of Shining Mercy"), is a Zen temple in the Sakyo ward of Kyoto, Japan. It is one of the constructions that represent the Higashiyama Culture of Muromachi period.'
		+ 'Ashikaga Yoshimasa initiated plans for creating a retirement villa and gardens as early as 1460, and after his death, Yoshimasa would arrange for this property to become a Zen temple. The temple is today associated with the Shokoku-ji branch of Rinzai Zen.'
        +'</br><a target="_blank" href="http://en.wikipedia.org/wiki/Ginkaku-ji">Read More>></a> </br></p>'       
        +'</div>' 
        +'<nav>'
        +'<ul>'
        +    '<li><button type="button" onclick="showDirections(3)">Show Directions</button><li>'
        +'</ul>'
        +'</nav>';   

	} else if (place===4) {
		document.getElementById("overlay").innerHTML =
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
        +'<div class="overlay_content">'
        +'<img class="overlay_pic" src="img/shokokuji.jpg">'
        +'<big> Shōkokuji 相国寺</big>'
        +'</br>'
        +'<small> ※ Notes: None in particular! </small>'
        +'<p> Shōkoku-ji (相国寺), formally identified as Mannen-zan Shōkoku Shōten Zenji (萬年山相國承天禅寺), is a Buddhist temple in northern Kyoto founded in 1382 by Ashikaga Yoshimitsu. Shōkoku-ji was founded in the middle Heian period. Initial construction of the central temple structures was begun in 1383, and the entire temple complex was initially dedicated in 1392. In the eighth month of the third year of Meitoku, Yoshimitsu organized a great banquet attended by all the great officers of the Imperial court and the military leaders of that time. The pomp and ceremony of the affair was said to have equaled an Imperial event.'
        +'</br><a target="_blank" href="http://en.wikipedia.org/wiki/Sh%C5%8Dkoku-ji">Read More>></a> </br></p>'       
        +'</div>' 
        +'<nav>'
        +'<ul>'
        +    '<li><button type="button" onclick="showDirections(4)">Show Directions</button><li>'
        +'</ul>'
        +'</nav>';    

	} else if (place===5) {
		document.getElementById("overlay").innerHTML = 
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
        +'<div class="overlay_content">'
        +'<img class="overlay_pic" src="img/nijo.jpg">'
        +'<big> Nijō Castle 二条城</big>'
        +'</br>'
        +'<small> ※ Notes: None in particular! </small>'
        +'<p> Nijō Castle (二条城 Nijō-jō) is a flatland castle located in Kyoto, Japan. The castle consists of two concentric rings (Kuruwa) of fortifications, the Ninomaru Palace, the ruins of the Honmaru Palace, various support buildings and several gardens. The surface area of the castle is 275,000 square meters, of which 8000 square meters is occupied by buildings.　It is one of the seventeen assets of Historic Monuments of Ancient Kyoto which have been designated by UNESCO as a World Heritage Site.'
        +'</br><a target="_blank" href="http://en.wikipedia.org/wiki/Nij%C5%8D_Castle">Read More>></a> </br></p>'       
        +'</div>' 
        +'<nav>'
        +'<ul>'
        +    '<li><button type="button" onclick="showDirections(5)">Show Directions</button><li>'
        +'</ul>'
        +'</nav>';    		

	} else if (place===6) {
		document.getElementById("overlay").innerHTML =
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
        +'<div class="overlay_content">'
        +'<img class="overlay_pic" style="min-height:450px" src="img/heian.jpg">'
        +'<big>Heian Jingu 平安神宮</big>'
        +'</br>'
        +'<small> ※ Notes: None in particular! </small>'
        +'<p> The Heian Shrine (平安神宮 Heian-jingū) is a Shinto shrine located in Sakyō-ku, Kyoto, Japan. The Shrine is ranked as a Beppyou Jinja (the top rank for shrines) by the Association of Shinto Shrines.</p>'
        +'In 1895, a partial reproduction of the Heian Palace from Heian-kyō was planned for construction for the 1100th anniversary of the establishment of Heian-kyō. The Industrial Expo was held in Kyoto that year, and the replica was to be the main monument. After the Expo ended, the building was kept as a shrine in memory of the 50th Emperor, Emperor Kanmu.'
        +'</br><a target="_blank" href="http://en.wikipedia.org/wiki/Heian_Shrine">Read More>></a> </br></p>'       
        +'</div>' 
        +'<nav>'
        +'<ul>'
        +    '<li><button type="button" onclick="showDirections(6)">Show Directions</button><li>'
        +'</ul>'
        +'</nav>';     
	} else if (place===7) {
		document.getElementById("overlay").innerHTML =
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
        +'<div class="overlay_content">'
        +'<img class="overlay_pic" src="img/kawai.jpg">'
        +'<big>Kawai Kanjirō Memorial Museum 河合井寛次郎記念館</big>'
        +'</br>'
        +'<small> ※ Notes: None in particular! </small>'
        +'<p>Few mingei (folk-art) museums are as hard to locate or as delightful to loiter in. The reason for both is that the museum was in fact the actual house of the late artist Kawai Kanjiro, tucked away in a side street near Higashiyama-Gojo in eastern Kyoto.</p>'
        +'<p>Kawai Kanjirō (河井 寛次郎, 1890-1966) was a Japanese potter and a key figure in mingei (Japanese folk art) and studio pottery movements, which included Bernard Leach, Shōji Hamada and many others.'
        +'</br><a target="_blank" href="http://www.japanvisitor.com/japan-museums/kawai-kanjiro-memorial-museum">Read More>></a> </br></p>'       
        +'</div>' 
        +'<nav>'
        +'<ul>'
        +    '<li><button type="button" onclick="showDirections(7)">Show Directions</button><li>'
        +'</ul>'
        +'</nav>';     
	} else if (place===8) {
		document.getElementById("overlay").innerHTML =
		'<button type="button" class="overlay-close" onclick="overlay()">Close</button>'
        +'<div class="overlay_content">'
        +'<img class="overlay_pic" src="img/derp.jpg" style="min-height:450px">'
        +'<big>ABOUT THIS SITE</big>'
        +'</br>'
        +'<small>Created by Grace Xu and Jared Slawski (KCJS Fall 2014, pictured left)</small>'
        +'<p>Established in September 1989, the Kyoto Consortium for Japanese Studies (KCJS, 京都アメリカ大学コンソーシアム) is a consortium of 14 American universities that sponsors a rigorous, two-semester academic program for undergraduates who wish to do advanced work in Japanese language and cultural studies.</p>'
        +"<p>This web application represents a vision for one of the many ways in which technology can improve and enhance educational experiences, providing a more interactive and interconnected way of presenting and sharing information."
        +"</br><small>Built as a final project for Professor Julie Davis' Arts of Japan class.</small></p> "       
        +'</div>' 
        +'<nav>'
        +'<ul>'
        +    '<li><button type="button" onclick="contact()">More About KCJS</button><li>'
        +'</ul>'
        +'</nav>';
	}

	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	support = { transitions : Modernizr.csstransitions };

	if( classie.has( overlay, 'open' ) ) {
		classie.remove( overlay, 'open' );
		classie.add( overlay, 'close' );
		var onEndTransitionFn = function( ev ) {
			if( support.transitions ) {
				if( ev.propertyName !== 'visibility' ) return;
				this.removeEventListener( transEndEventName, onEndTransitionFn );
			}
			classie.remove( overlay, 'close' );
		};
		if( support.transitions ) {
			overlay.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}
	}
	else if( !classie.has( overlay, 'close' ) ) {
		classie.add( overlay, 'open' );
	}
}

function contact() {
	var win = window.open("http://www.kcjs.jp/index.html", '_blank');
    win.focus();
}

function initialize() {
	var bounds = new google.maps.LatLngBounds();
	var mapOptions = {
		mapTypeId: 'roadmap'
	}; 
	//directions 
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();

	directionsDisplay = new google.maps.DirectionsRenderer();

	//display a map 
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	map.setTilt(45);

	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('directions-panel'));

	// Multiple Markers
    var markers = [
        ['Kōryūji', 35.0155, 135.7073],
        ['Kyōto National Museum', 34.9900, 135.7730],
        ['Sanjuusangendou', 34.9878, 135.7717], 
		['Ginkakuji', 35.0267, 135.7983], 
		['Shoukokuji', 35.0330, 135.7620],
		['Nijou Castle', 35.0142, 135.7475], 
		['Heian Jingu', 35.0167, 135.7822],
		['Kawai Kanjirou Memorial Museum', 34.993534, 135.774429],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' 
	        + '<h3>Kōryūji </br>広隆寺</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(0)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
        	+ '<h3>Kyōto National Museum　</br>京都国立博物館</h3>' 
        	+ '<section><p><button id="trigger-overlay" type="button" onclick="overlay(1)">More Info</button></p></section>' 
        +'</div>'],
        ['<div class="info_content">' 
	        + '<h3>Sanjūsangendō </br>三十三間堂</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(2)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Ginkakuji </br>銀閣寺</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(3)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Shōkokuji </br>相国寺</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(4)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Nijō Castle </br>二条城</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(5)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Heian Jingu </br>平安神宮</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(6)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Kawai Kanjirō Memorial Museum </br>河合井寛次郎記念館</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(7)">More Info</button></p></section>'
        + '</div>'],
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow({maxWidth: 300}), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
                $("#map-canvas").css("margin-right",""); //hide dir panel
				$("#directions-panel").hide();
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }
}

var showDirections = function(place) {
	closePanel();
	overlay(); //close overlay
	$("#map-canvas").animate( {marginRight:'400px'},350); //show dir panel
	$("#directions-panel").css("text-align", "center");
	$("#directions-panel").show();

	var bounds = new google.maps.LatLngBounds();
	var mapOptions = {
		mapTypeId: 'roadmap'
	}; 
	//directions 
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();

	directionsDisplay = new google.maps.DirectionsRenderer();

	//display a map 
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	map.setTilt(45);

	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('directions-panel'));

	// Multiple Markers
    var markers = [
        ['Kōryūji', 35.0155, 135.7073],
        ['Kyōto National Museum', 34.9900, 135.7730],
        ['Sanjuusangendou', 34.9878, 135.7717], 
		['Ginkakuji', 35.0267, 135.7983], 
		['Shoukokuji', 35.0330, 135.7620],
		['Nijou Castle', 35.0142, 135.7475], 
		['Heian Jingu', 35.0167, 135.7822],
		['Kawai Kanjirou Memorial Museum', 34.993534, 135.774429],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' 
	        + '<h3>Kōryūji </br>広隆寺</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(0)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
        	+ '<h3>Kyōto National Museum　</br>京都国立博物館</h3>' 
        	+ '<section><p><button id="trigger-overlay" type="button" onclick="overlay(1)">More Info</button></p></section>' 
        +'</div>'],
        ['<div class="info_content">' 
	        + '<h3>Sanjūsangendō </br>三十三間堂</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(2)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Ginkakuji </br>銀閣寺</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(3)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Shōkokuji </br>相国寺</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(4)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Nijō Castle </br>二条城</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(5)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Heian Jingu </br>平安神宮</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(6)">More Info</button></p></section>'
        + '</div>'],
        ['<div class="info_content">' 
	        + '<h3>Kawai Kanjirō Memorial Museum </br>河合井寛次郎記念館</h3>' 
	        + '<section><p><button id="trigger-overlay" type="button" onclick="overlay(7)">More Info</button></p></section>'
        + '</div>'],
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow({maxWidth: 300}), marker, i;

	if (place===0) {
		//koryuji
	    // Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=0) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "35.0155,135.7073";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});

	} else if (place===1) {
		//kyoto natl museum
		// Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=1) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "34.9900,135.7730";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});

	} else if (place===2) {
		//sanjusangendo
		// Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=2) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "34.9878,135.7717";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});

	} else if (place===3) {
		//ginkakuji
		// Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=3) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "35.0267,135.7983";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});
	} else if (place===4) {
		//shokokuji
		// Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=4) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "35.0330,135.7620";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});

	} else if (place===5) {
		//nijojo
		// Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=5) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "35.0142,135.7475";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});

	} else if (place===6) {
		//heian jingu
		// Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=6) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "35.0167, 135.7822";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});

	} else if (place===7) {
		//heian jingu
		// Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        if (i!=7) {
		        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		        bounds.extend(position);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: markers[i][0]
		        });

		        // Allow each marker to have an info window    
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                infoWindow.setContent(infoWindowContent[i][0]);
		                infoWindow.open(map, marker);
		            }
		        })(marker, i));

		        // Automatically center the map fitting all markers on the screen
		        map.fitBounds(bounds);
		    }
	    }
		var start = "doshisha university, kyoto, japan";
		var end = "34.993534, 135.774429";
		var request = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode.WALKING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		    };

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(response);
		    }
		});
	}
}

var closePanel = function() {
    $("#map-canvas").css("margin-right",""); //hide dir panel
    document.getElementById("directions-panel").innerHTML = "<big><strong>WALKING DIRECTIONS</big></strong></br><small>Click anywhere in this panel to exit and refresh the map.</small>";
	$("#directions-panel").hide();
	initialize();
}

google.maps.event.addDomListener(window, 'load', initialize);