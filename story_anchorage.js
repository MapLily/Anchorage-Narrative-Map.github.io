var config = {
    style: 'mapbox://styles/henry-carter/ck5sf1mv62c501jnu2k5ma97d',
    accessToken: 'pk.eyJ1IjoiaGVucnktY2FydGVyIiwiYSI6ImNrNXB2NjZnbTIwNTYzZXFsbGJnMjk0NDgifQ.TzYPv73Q9fghm1NJDR2FHg',
	showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Mapping Urban Change in Anchorage Through Oral History',
    subtitle: 'by Sarahlily Stein',
    byline: 'Scroll down to begin',
    footer: 'The images in this map were accessed from the following websites (in order of appearance):https://www.echoak.com/2018/05/texas-vs-alaska-greatest-state-in-the-union/, https://www.stockalpine.com/anchorage-ski-zones, https://www.maps.google.com, http://akonthego.com/blog/alaska-cemeteries-are-resting-places-for-history, https://www.maps.google.com, https://www.travelagewest.com/Hotels/Anchorage/The-Lakefront-Anchorage-p9662133, https://www.adn.com/opinions/2017/11/30/anchorage-may-not-be-as-diverse-as-you-think-or-as-equal-racially/, https://ca.linkedin.com/company/anchorage-downtown-partnership-ltd-, https://www.adn.com/opinions/2019/12/08/a-love-letter-to-downtown-anchorage/.',
    chapters: [
        {                     
            id: 'section1',
            title: 'Alaska: the largest state in the US', 
            image: './images/Alaska.1.png',
			description: 'Welcome to Alaska, the largest state in the US. Its largest city is Anchorage, population 291,538. This story map will explore how development in Anchorage, Alaska has led to environmental and identity changes from the 1950s to the present day based on the lived experiences of Rick, a longtime Anchorage resident.  This is an interactive story map. Along the way, you will be able to play audio clips of Rick’s stories of growing up in Anchorage. Scroll down for the next chapter.',
            location: {       
                center: [ -157.00, 66.00],
                zoom: 2.75,   
                pitch: 30,    
                bearing: 0
            },                
            onChapterEnter: [],
            onChapterExit: [] 
        }, 
        {
            id: 'section2',
            title: 'Welcome to Anchorage',
            image: './images/southcentral.jpg',
            description: 'Anchorage is located in south-central Alaska. Following World War II, Anchorage experienced a population explosion. With this population growth has come urban growth and expansion. These have changed the lifestyles of Anchorage residents, as well as the city’s identity. To explore these changes, we will follow the experiences of Rick’s life in Anchorage from 1956 to 1989.',
            location: {
                center: [-149.9003, 61.2181], 
                zoom: 7.5, 
                pitch: 30, 
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }          
            ]                 
        },                    
                    

        {                     
			id: 'section3',   
			title: "Gilman's Bakery",
			image: './images/gilmans.jpg',
			description: 'As a young child, Rick and his family lived in downtown Anchorage. On their way home from school, Rick and his friends would stop by Gilmans Bakery at the corner of 6th Avenue and Cordova Street. The satellite image above shows what that corner looks like now. ',
			location: {       
				center: [-149.878324, 61.216225],
				zoom: 13.5,   
				pitch: 30,    
				bearing: 0   
			},                
			onChapterEnter: [],
			onChapterExit: [] 
        },

        {                     
			id: 'section4',   
			title: 'Anchorage Memorial Park Cemetary',
			image: './images/cemetery.jpg', 
			description: 'On dark winter afternoons, Rick and his friends would play in the Anchorage Memorial Park Cemetery, shown here on the map bordered by Cordova Street and Fairbanks Street.',
			location: {       
				center: [-149.878324, 61.216225],
				zoom: 14,   
				pitch: 30,    
				bearing: 0   
			},                
			onChapterEnter: [],
			onChapterExit: [] 
        },  

        {                     
			id: 'section5',   
			title: 'Turnagain Beauty Salon',
			image: './images/Turnagain.jpg',
			description: "When Rick's family moved to the Turnagain neighborhood, his mother started a business on the first floor of their house at the corner of Northern Lights Blvd and Turnagain. The Turnagain Beauty Salon, as she named it, became the site of many (mis)adventures. Rick's story below recalls the incident of the 'horse in the beauty salon.' In the second audio clip, Rick describes the wilderness that used to be present in Turnagain and how the neighborhood has changed since his childhood.",
			location: {       
				center: [-149.935268, 61.195305],
				zoom: 13.5,   
				pitch: 30,    
				bearing: 0  
			},                
			onChapterEnter: [],
			onChapterExit: [] 
		},

		{
			id: 'section6',
			title: 'Spenard',
			image: './images/Lake-Spenard.1.jpg',
			description: 'As a child, Rick also lived in the Spenard neighborhood. Listen to him describe the way the neighborhood used to look and how development has changed it.',
			location: {
			center: [-149.930343, 61.182202],
			zoom: 13.5,
			pitch: 30,
			bearing: 0
			},
			onChapterEnter: [],
			onChapterExit: [] 
        },
{                     
			id: 'section7',   
			title: 'Mountainview',
			image: './images/Mountainview-diversity.png',
			description: "Rick lived in Mountainview while he was in junior high and highschool. His family's home was at the edge of a subdivision on what was previously a homestead. After school, Rick would go snowshoeing and cross-coutry skiing in the woods of a nearby military base",
			location: {       
				center: [-149.82, 61.23], 
				zoom: 12.5,   
				pitch: 30,    
				bearing: 0   
			},                
			onChapterEnter: [],
			onChapterExit: [] 
        }, 
        {                     
			id: 'section8',   
			title: 'Anchorage: Urban Change',
			image: './images/Anchorage-downtown.1.jpg',
            description: 'Listen as Rick describes some of the changes that happened in Anchorage as a result of development',
			location: {       
                center: [-149.9003, 61.2181], 
                zoom: 7.5, 
                pitch: 30, 
                bearing: 0  
			},                
			onChapterEnter: [],
			onChapterExit: [] 
        },	
        {                     
			id: 'section9',   
			title: 'Is Anchorage representative of Alaska?',
			image: './images/Downtown-Anchorage.jpg',
			description: "Wilderness is a key part of the Alaskan identity. The development of Anchorage has shifted the city’s identity. Now that it's developed, is Anchorage representative of Alaska?",
			location: {       
                center: [ -157.00, 66.00],
                zoom: 2.75,   
                pitch: 30,    
                bearing: 0   
			},                
			onChapterEnter: [],
			onChapterExit: [] 
        }, 	              
    ]                         
};                            
//Last updated 5/28/20                              
