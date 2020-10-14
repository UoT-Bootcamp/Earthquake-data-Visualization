# Visualizing Data with Leaflet

![leaflet](https://github.com/UoT-Bootcamp/Leaflet-Challenge/blob/master/Images/1-Logo.png)<br/>

## Background:

The United States Geological Survey, or USGS (for short) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Our task is to deploy new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Getting the data set:

#### Earthquake Data:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. We visited the USGS GeoJSON Feed page and picked a data set to visualize. We chose 'All Earthquakes from the Past 7 Days'. The URL of this JSON to pull in the data for our visualization is https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

#### Tectonic Data:

For plotting the second data set on the map to illustrate the relationship between tectonic plates and seismic activity, we need to pull in a second data set and visualize it along side the original set of data. The URL for this data on tectonic plates can be found at - https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json


## Importing and visualizing the data:

* Created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

* The data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color. The depth of the earth is the third coordinate for each earthquake.

* Included popups that provide additional information about the earthquake when a marker is clicked.

* Created a legend that will provide context for the map data.

* Plotted a second data set on the map.

* Added a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

* Added layer controls to the map.


## Leaflet-Step-1:

The GitHub pages link is - https://uot-bootcamp.github.io/Leaflet-Challenge/Leaflet-Step-1/

The look of this map is below:

![map](https://github.com/UoT-Bootcamp/Leaflet-Challenge/blob/master/Leaflet-Step-1/screenshot/leaflet_1.png)


## Leaflet-Step-2:

The GitHub pages link is - https://uot-bootcamp.github.io/Leaflet-Challenge/Leaflet-Step-2/

The look of this map is below:

![map](https://github.com/UoT-Bootcamp/Leaflet-Challenge/blob/master/Leaflet-Step-2/screenshots/screenshot1.png)<br>

![map](https://github.com/UoT-Bootcamp/Leaflet-Challenge/blob/master/Leaflet-Step-2/screenshots/screenshot2.png)<br>

![map](https://github.com/UoT-Bootcamp/Leaflet-Challenge/blob/master/Leaflet-Step-2/screenshots/screenshot3.png)<br>

