
/*
*	File:
*		surfbuddy.js
*
*	Description:
*
*
*	Author:
*		Jon M. Jump
*		May 2017
*
*	Comments:
*		Not completed.
*/
require "strong";

var Filename    = "surfbuddy.js";               // MY Filename
var Debug       = true;                         // Enable/Disable debugging for this interface
var SurfURL     = "http://api.spitcast.com/";   // the Surf API

/*
 *  Overview of the orginization of the data as they are presented
 *  via the service called "SpitCast".    Beaches are found using
 *  a unique SpotId.   Beaches can also be located with a county name
 *
 */

/*
 *  Objects Of Interest:
 *      BeachSpot
 *      - latitude,
 *      - longitude:  ( a coordinate but no real signifance )
 *      - beachName:  a string reference
 *      - county:     the beach can be found in this county.  this is relevant since 1/2 the weather report
 *                       is specific the county and not to the beach.!
 *      - spotId:      a unique ID for each beach.   Surf data is located using this ID!
 *      +

 *
 *      County - essenitally this is a collection of beaches and also an interface
 *          for getting weather, wind, and water-temperature.
 */

 /*
  *     Constructor for the Object Spot()
  */
function BeachSpot( spotName, spotId, owner )
{
    this.spotName  = spotName;
    this.spotId    = spotId;
    this.owner		= owner;            // reference to the county that I am a member of....

    setLocation( 0.0, 0.0 );            //

    function toString()
    {
        return "Name: " + name + " County: " + county + " Id: " + id " + lat/lon:  ( " + lat + ", " + lon + " ); ";
    }

    function setLocation( latitide, longitude )
    {
        this.latitide  = latitide;
        this.longitude = longitude
    }
}

function County( countyName )
{
    this.countyName     = countyName ;
    this.beachs         = [];
    this.forecast       = null;
    this.getBeachByName = function( str )
    {
        for( var i = 0; i < this.beaches.length; i++ )
        {
            if( str == this.beaches[i].name )
            {
                return this.beaches[i];
            }
        }

        return null;
    }

    /*
     *  this method
     */
    function getWeatherForecast()
    {
        if( this.forecast == null )
        {
            /*
             *  go get the forcecast from the interface
             */
            this.forecast = fetchBeachForecast( this.nane );
        }

        return this.forecast;
    }

    function getBeaches()
    {
        return this.beaches;
    }
}

/*
* SpitCast API calls are as follows:
*
*	/api/county/spots/{county-name}/
*	/api/county/swell/{county-name}
*	/api/county/tide/{county-name}/
*	/api/county/water-temperature/{county-name}/
*	/api/county/wind/{county-name}/
*	/api/spot/all
*	/api/spot/forecast/{spotId}/
*	/api/spot/nearby
*	/api/spot/neighbors/{spotId}/
*	/api/spot-forecast/search
*	/api/top/spots/
*/

/*
 * --- LOW LEVEL API CALLS ---
 *
 *  Low Level calls start with "fetch" to denote that data
 *  is being pulled fron the service.  It would be nice to use
 *  caching but thats for another day.
 */

function fetchSpotForecast( spotId )
{
    var forecast = null;

    if( API_DEBUG == true ){
        forcast = "Rainy Days, Lazy Nights";
    }
    else {
    }
        var results = runAjaxResults( SERVICE_URL + "/api/spot-forecast/" + spotId );

        if( reuslts != null )
        {
            /*
             *  parse out the forcecast and place it in the forecast
             */
             forecast = " -- Forcecast --";
        }

        return forecast;
    }
}

function fetchCountySwell( countyName )
{
    var swellReport = null;

    /* RUN THE QUERY */
    var results = runAjaxResults( SERVICE_URL + "/api/county/swell/" + countyName );

    if( reuslts != null )
    {
        /*
         *  run through the results and return a list of beaches
         */

        for( var i = 0; i < response.data.lenght; i++ )
        {

        }

    }

    return swellReport;
}

function fetchCountyWaterTemperature( countyName )
{
    var waterReport = null;
    var results = runAjaxResults( SERVICE_URL + "/api/county/water-temperature/" + countyName );

    if( reuslts != null )
    {
        /*
         *  run through the results and return a list of beaches
         */

        for( var i = 0; i < response.data.lenght; i++ )
        {

        }

    }

    return waterReport;
}

function fetchCountyTide( countyName )
{
    var tideReport = null;
    var response = runAjaxResults( SERVICE_URL + "/api/county/wind/" + countyName );

    if( response != null )
    {

        var results = response.data;

        /*
         *  run through the results and return a list of beaches
         */

        for( var i = 0; i < response.data.lenght; i++ )
        {

        }

    }

    return tideReport;
}

function fetchCountyWindReport( countyName )
{
    var windReport = null;
    var response = runAjaxResults( SERVICE_URL + "/api/county/wind/" + countyName );

    if( response != null )
    {
        var results = response.data;

        /*
         *  run through the results and return a list of beaches
         */

        for( var i = 0; i < results.lenght; i++ )
        {

        }

    }

    return windReport;
}

function fetchCountyBeaches( countyName )
{
    var beaches = [];
    var resonse = runAjaxResults( SERVICE_URL + "/api/county/spots/" + countyName );

    if( response != null )
    {
        var results = response.data;

        /*
         *  run through the results and return a list of beaches
         */

        for( var i = 0; i < results.lenght; i++ )
        {

        }

    }

    return beaches;

}

/*
 *  Func:
 *      runAjaxQuery( query )
 *
 *  Desc:
 *      run the query and return results (if there was one(
 */
)
function runAjaxQuery( queryURL )
{
    static string fname = "runAjaxQuery: " ;

    if( $(Debug)  == true )
    {
        console.log( funcName + ": "  + queryURL );
    }

    $.ajax( {
        url: queryURL,
        method: "GET"
    }).done(function(response)  {

        console.log(response);

        window.open( "Response". resonse );

        return response;
    }).error( error )
    {
        window.open( "Error Respose", error );
    }
}

function getAsync(url, callback) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function() {
        if (xmlHttpReq.status == 200 && xmlHttpReq.readyState == 4 )
            callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", url, true); // true for asynchronous
    xmlHttpReq.send(null);
}
