# Breakneck-Ridge-Initiative

IoT solution with an open source and free to use tracking platform for high difficulty trails that observe lost hikers and higher rate of hiker injuries.

## Partners

#### IoT Off-Grid
<p align="center">
  <img width="200"  src="https://user-images.githubusercontent.com/99907934/164896333-6e5bbc16-f823-4034-b364-64a2c670c44a.png">
</p>

An IoT software and hardware technology company, with expertise in LoRaWAN ecosystem, deploying turnkey solutions for users. Dedicated team of IoT engineers, systems designers and programmers working on the firontiers of IoT and expansive netowkrs such as Helium Network.

#### New York New Jersey Trail Conference 
<p align="center">
  <img width="200"  src="https://user-images.githubusercontent.com/99907934/164896553-91ef238c-a9ea-4ea6-81f1-605dcbc3e47d.png">
</p>

New York - New Jersey Trail Conference, a volunteer federation made up of other environmentally focused groups and individuals. Focused on maintaining and improving hiking trails in the North Eastern area and fostering conservation efforts.

## Dangers of Breakneck Ridge

As a “landmark” site overlooking the Hudson River, the Breakneck Ridge Trail is very popular amongst hikers in the Metropolitan Area. In fact in 2018, it was noted by “trails.com” as the most popular day-hike in the United States. The steep hike also happens to be a relatively difficult one, and possesses many areas in which individuals want to explore “off-track.”

Lost and injured hikers on the ridge are unfortunately more common than one would expect. Broken ankles, sprains, bruises, etc. can be frequent and this is a great concern given the difficulty of the climb and descent. There have even been incidents of death, and so it is vital for the NYNJTC to continuously look for ways to make the available trails safer. They are often working on projects to make the trail safer, but also want to make sure individuals get emergency help as soon as possible, if need be.

In these drastic scenarios, it can become difficult to reach a hiker when the conditions are poor (rain, nighttime, etc). A cost issue with finding a lost or hurt individual is that police, the fire department, and medical services will likely all be needed during or after the rescue. It all-too-often happens in which the local fire department and EMT’s must be called in to help out. Being able to locate a hiker through a GPS tracker would limit this need, and providing location on trails should also keep hikers out of danger / areas in which they can get hurt and require medical attention.
<p align="center">
  <img src="https://user-images.githubusercontent.com/99907934/164873789-5a4ac43d-ec17-4a33-8a42-069b8c72b65c.png">
</p>

## LoRaWAN Trackers as a Solution

The ability to provide a suitable mode to track inexperienced hikers in dangerous trails, such as Breakneck Ridge, would provide an effective way to ensure the safety of the hikers. Furthermore, a tracking solutions would reduce the rescue efforts upon the unfortunate incident of a lost hiker. Generally, for a tracking application such as this, there are few challenges that would need to be addressed. 

Challenges to deploy a tracking solution:
1. Coverage within the wilderness to pick up the tracker signal.
2. Convenient and scalable platform to get the trackers online and monitored.

Use of LoRaWAN(Long Range Wide Area Network) technology based trackers would allow overcoming some key challenges involved with a tracking deployment such as this. LoRaWAN has a longer reach of signals with a low power consumption for the transmission of data, due to the use of radio waves for communication. These technical advantages would allow overcoming the challenge of providing adequate coverage for trackers, which is the most crucial challenge that needs to be addressed. The presence of LoRaWAN networks such as Helium already in the region provides existing infrastructure to provide adequate coverage. The use of Helium LoRaWAN network along with the IoT Off-Grid firmware solutions could be used to develop a free to use tracking platform that is both convenient and scalable. This would afford a pathway to overcome the challenge of getting trackers online and monitoring. 

## Project Outline

### Solution for Tracking Hikers

The tracking solution primarily have 3 segments.
1. Hiker with a LoRaWAN GPS tracker (End Node)
2. Helium LoRaWAN Network (LoRaWAN Coverage)
3. Open-Source Tracker Monitoring Platform (Management Entity)
<p align="center">
  <img width="700" src="https://user-images.githubusercontent.com/99907934/164873847-3f21c7c4-5566-42e5-bf6f-3b1e5ac90940.png">
</p>

The GPS trackers that will be carried by the hikers will be sending out beacons every 3 minutes providing the location of the hiker. These beacons would be picked by the Helium LoRaWAN hotspots in the area, which would communicate that information to the Helium Network. The data can be access via the IoT Off-Grid developed Tracker Monitoring Platform. This platform can be accessed by the management entities overseeing the parks.


### Open Source / Free to use Monitoring Platform
<p align="center">
  <img src="https://user-images.githubusercontent.com/99907934/164909031-835d9e10-6098-47b3-afcb-91bef185662f.png">
</p>

IoT Off-Grid will develop a platform that is able to track the hikers. This will be an open source platform and will be free to use. 

Organizational Use:
The partnering organization NYNJTC will have ability to on-board devices and keep them online indefinitely. SImilarly, any non-profit, conservation, or recreation organization reaching out to use the platform on a permanent basis can be integrated to have proper access.

Individual/Private Use:
The trackers that are on boarded on to the platform by private individuals will be online for a maximum of 7 days and afterwards it will be kicked out. The same device can be on boarded again, if wished to . The 7 days limit is imposed to prevent misuse of the free to use platform by for profit entities. 

IoT Off-Grid will develop the platform and update regularly to provide support to evolve the platform overtime based on the user input. The platform will be available as a web application to provide the easiest possible access to the largest segment of users without being restricted by any operating system(OS) incompatibility. 

This platform source code will be available to use by any entity and deploy themselves.


