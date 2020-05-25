var config = {
    style: 'mapbox://styles/henry-carter/ck5sf1mv62c501jnu2k5ma97d',
    accessToken: 'pk.eyJ1IjoiaGVucnktY2FydGVyIiwiYSI6ImNrNXB2NjZnbTIwNTYzZXFsbGJnMjk0NDgifQ.TzYPv73Q9fghm1NJDR2FHg',
	showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Anchorage: Mapping Urban Change',
    subtitle: 'GEOG 494: Urban Field Methods Project',
    byline: 'Sarahlily Stein',
    footer: 'Source: source citations, etc.',
    chapters: [
        {                     
            id: 'other-identifier',
            title: 'Alaska: the largest state in the US', 
            image: './images/Alaska.1.png',
			description: 'Welcome to Alaska, the largest state in the US. Its largest city is Anchorage, population 291,538. This story map will explore how development in Anchorage, Alaska has led to environmental and identity changes from the 1950s to the present day based on the lived experiences of Rick, a longtime Anchorage resident.  This is an interactive story map. You can zoom in or out. Along the way, you will be able to play audio clips of Rick’s stories of growing up in Anchorage. Scroll down for the next chapter.',
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
            id: 'slug-style-id',
            title: 'Welcome to Anchorage',
            image: './images/southcentral.jpg',
            description: 'Anchorage is located in south-central Alaska. When Rick was born, the city’s population was 47,000 (cite). Since then, the city’s population has increased by 520%. Following World War II, Anchorage has experienced a population explosion. With this population growth has come urban growth and expansion. These have changed the lifestyles of Anchorage residents, as well as the city’s identity. To explore these changes, we will follow the experiences of Rick’s life in Anchorage from 1956 to 1989 (check dates).',
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
			title: 'Turnagain Beauty Salon',
			image: './images/Turnagain.jpg',
			description: '',
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
			id: 'section4',   
			title: 'Anchorage Memorial Park Cemetary',
			image: './images/cemetery.jpg', 
			description: '',
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
			id: 'section5',   
			title: "Gilman's Bakery",
			image: './images/gilmans.jpg',
			description: '<iframe width="400" height="315" src="https://www.youtube.com/embed/50HC7ZK4STk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', // embed video
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
			id: 'section6',
			title: 'Spenard',
			image: './images/Lake-Spenard.1.jpg',
			description: '',
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
			image: './images/mountainview-diversity.png',
			description: '<iframe frameborder="0"  width="400"  height="200"  src="https://drive.google.com/file/d/14FX_r-IbPBMm2F6RDpFLSnM8YYWT96T9/preview?usp=sharing"></iframe>',
			audio: './audio/Mountainview.mp3',
			//audio.play();
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
			image: './images/downtown-Anchorage-1957.jpg', 
			image: './images/Anchorage-downtown.1.jpg', // only the final image is displaying. How to show both?
            description: '<a href="https://www.shipwreckmuseum.com/edmund-fitzgerald/">Great Lakes Shipwreck Museum</a> <div></div><iframe width="320" height="200" src="https://www.youtube.com/embed/UKJNBxDCMIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
			description: '',
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
                              