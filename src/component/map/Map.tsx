import {GoogleMap, LoadScript} from "@react-google-maps/api";
import React from "react";

export const Map = () => {
    const containerStyle = {
        width: '60%',
        height: '400px'
    };
    const center = {
        lat: 59.9665038,
        lng: 30.432499
    };

    return <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY!}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    </LoadScript>;
}
