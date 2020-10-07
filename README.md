# Visualizing Data with Leaflet

![leaflet](https://github.com/UoT-Bootcamp/Leaflet-Challenge/blob/master/Images/1-Logo.png)<br/>

## Background:

The United States Geological Survey, or USGS (for short) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Our task is to deploy new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Getting the data set:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. We visited the USGS GeoJSON Feed page and picked a data set to visualize. We chose 'All Earthquakes from the Past 7 Days'. The URL of this JSON to pull in the data for our visualization is https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

## Importing and visualizing the data:

* Created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

* The data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color. The depth of the earth is the third coordinate for each earthquake.

* Included popups that provide additional information about the earthquake when a marker is clicked.

* Created a legend that will provide context for the map data.

