# Pilot Testing of the Tracking Platform at Breakneck Ridge

## Device Used

### RAK WisNode RAK2171 TrackIt Location Tracker
<br>
<p align="center" >
<img src=https://user-images.githubusercontent.com/99907934/204183562-814e10ad-b3e6-496b-9e86-52ceff2d0d5a.png width="400"/>
</p>

Rak GPS tracker was used for the poilot testing. [WisNode tracker](https://store.rakwireless.com/products/wisnode-trackit-set-rak2171?_pos=8&_sid=b75377cdd&_ss=r&variant=42255224045766) has dependable hardware and firmware, that is already compatible for the Helium network. This makes the on-boarding process easier during the testing phase. This tracker was distributed with the project team members who hiked the high difficulty trail as part of the poilot testing.

## Pilot Testing Area

The pilot testing was carried out within the long Breakneck Ridge trail that extend over 3 miles. This is the most difficult part of the hike and covers the most dangerous portion of the trek and reaches an elevation above 1200ft.
<p align="center" >
<img src=https://user-images.githubusercontent.com/99907934/204186700-63fa69ef-bd81-43af-b1b4-fed8e3847f6d.png width="500"/>
</p>
The image highlight this trail. The terrain is covered with wilderness; however, the higher elevation of the general path would provide better coverage of LoRaWAN devices.

## Testing Results

After several rounds of testing through the hiking path. The coverage and the validity of the tracking system was verifies. This required experienced hiking personal using the tracking device within the trails.
<p align="center" >
<img src=https://user-images.githubusercontent.com/99907934/211716358-f273c6df-be65-4af0-985f-9f382d9d79cd.png width="800"/>
</p>
As it is seen on the image, the GPS cordinates are transmitted at reasonable rates, providing a high number of location pings. The trace of the trail can be clearly seen from the GPS marker points taken in the real world. Further more, there's important information about the LoRaWAN coverage, that was discovered through this testing.
<p align="center" >
<img src=https://user-images.githubusercontent.com/99907934/211718187-745b20e0-3714-4616-95f0-0d980467470a.png width="800"/>
</p>
As visible on this overlay image of the Helium coverage in the area of testing. Even in the hexes that does not have coverage verification of Helium, It was observed that the device is sending out signals and providing GPS cordinates. This shows a higher than anticipated robustness for tracking through the Helium network, and further provide positive reinforcement on the notion that Helium coverage can be widely used for tracking purposes even in more remote settings with fewer hotspots at the vicinity.

Further, OpenTrack platform was tested in large area tracking siuations across North Jersey/Rockland County, and it was observed that tracking applciation function properly with no issues.
<p align="center" >
<img src=https://user-images.githubusercontent.com/99907934/211863303-6dcc22e8-1a9f-4ee8-892f-2069ff82256a.png width="800"/>
</p>

Only problem that was observed was that there is <1% chance of miscordinated GPS signal that shows up. This is a know issue that effect most GPS chips and does not cause any significant problems.

Overall, the pilot testing yielded better than expected possitive results on the developed platform and shows immense potential for a public LoRaWAN tracking avenue. This is passed for community beta testing among a group of 25 individuals around the country. Beta testing will carry out along with the next few steps for public launch.
